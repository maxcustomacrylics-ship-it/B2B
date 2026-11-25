import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { getSupabase, hasSupabase } from "@/lib/supabase";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif"];
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];
const MAX_SIZE = 8 * 1024 * 1024;

/**
 * Verify the file is really an image by inspecting its magic bytes.
 * The browser-supplied MIME type can be spoofed, so it is not trusted.
 */
function detectImageType(buffer: Buffer): string | null {
  if (buffer.length < 12) return null;

  // JPEG: FF D8 FF
  if (buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) return "image/jpeg";

  // PNG: 89 50 4E 47 0D 0A 1A 0A
  if (
    buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47 &&
    buffer[4] === 0x0d && buffer[5] === 0x0a && buffer[6] === 0x1a && buffer[7] === 0x0a
  ) {
    return "image/png";
  }

  // WebP: "RIFF" .... "WEBP"
  if (
    buffer.toString("ascii", 0, 4) === "RIFF" &&
    buffer.toString("ascii", 8, 12) === "WEBP"
  ) {
    return "image/webp";
  }

  // AVIF: bytes 4..8 = "ftyp", brand at 8..12 contains "avif"/"avis"
  if (buffer.toString("ascii", 4, 8) === "ftyp") {
    const brand = buffer.toString("ascii", 8, 12);
    if (brand === "avif" || brand === "avis") return "image/avif";
  }

  return null;
}

export async function POST(request: Request) {
  // Uploading is a privileged operation — admin only.
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });
    if (file.size > MAX_SIZE) return NextResponse.json({ error: "File too large. Max 8 MB." }, { status: 400 });

    const ext = path.extname(file.name || "").toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return NextResponse.json({ error: `Unsupported file extension: ${ext || "(none)"}` }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Trust the bytes, not the declared MIME type.
    const detected = detectImageType(buffer);
    if (!detected) {
      return NextResponse.json({ error: "File content is not a valid image" }, { status: 400 });
    }
    if (!ALLOWED_TYPES.includes(detected)) {
      return NextResponse.json({ error: `Unsupported image type: ${detected}` }, { status: 400 });
    }

    const timestamp = Date.now();
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
    const fileName = `${timestamp}-${safeName}`;

    // Always save locally first
    const isVercel = !!process.env.VERCEL;
    const uploadsDir = isVercel ? "/tmp/uploads" : path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadsDir, { recursive: true });
    const localPath = path.join(uploadsDir, fileName);
    await writeFile(localPath, buffer);

    // Try Supabase for public URL (works on Vercel)
    if (hasSupabase()) {
      try {
        const sb = getSupabase()!;
        const { error } = await sb.storage.from("images").upload(`uploads/${fileName}`, buffer, { contentType: detected, upsert: true });
        if (!error) {
          const { data: urlData } = sb.storage.from("images").getPublicUrl(`uploads/${fileName}`);
          return NextResponse.json({ url: urlData.publicUrl });
        }
      } catch {}
    }

    // Fallback: return local URL (works on dev, not Vercel)
    return NextResponse.json({ url: isVercel ? "" : `/uploads/${fileName}` });

  } catch (err: any) {
    console.error("[upload] Error:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
