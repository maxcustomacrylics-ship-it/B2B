import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { getSupabase, hasSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif", "image/svg+xml"];
const MAX_SIZE = 5 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });
    if (!ALLOWED_TYPES.includes(file.type)) return NextResponse.json({ error: `Unsupported file type: ${file.type}` }, { status: 400 });
    if (file.size > MAX_SIZE) return NextResponse.json({ error: "File too large. Max 5 MB." }, { status: 400 });

    const buffer = Buffer.from(await file.arrayBuffer());
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
        const { error } = await sb.storage.from("images").upload(`uploads/${fileName}`, buffer, { contentType: file.type, upsert: true });
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
