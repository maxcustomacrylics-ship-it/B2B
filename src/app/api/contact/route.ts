import { NextResponse } from "next/server";
import { Resend } from "resend";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

const EMAIL_TO = "maxcustomacrylics@gmail.com";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const company = formData.get("company")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const productInterest = formData.get("productInterest")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const drawing = formData.get("drawing") as File | null;

    // Validation
    if (!name || name.length < 2) return NextResponse.json({ error: "Name is required" }, { status: 400 });
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    if (!company) return NextResponse.json({ error: "Company is required" }, { status: 400 });
    if (!message || message.length < 5) return NextResponse.json({ error: "Message must be at least 5 characters" }, { status: 400 });

    // Save uploaded drawing to local filesystem
    let drawingUrl: string | null = null;
    if (drawing && drawing.size > 0) {
      if (drawing.size > 10 * 1024 * 1024) {
        return NextResponse.json({ error: "File too large. Max 10MB." }, { status: 400 });
      }
      try {
        const buffer = Buffer.from(await drawing.arrayBuffer());
        const safeName = drawing.name.replace(/[^a-zA-Z0-9._-]/g, "-");
        const fileName = `${Date.now()}-${safeName}`;
        const uploadsDir = path.join(process.cwd(), "public", "uploads", "drawings");
        await mkdir(uploadsDir, { recursive: true });
        await writeFile(path.join(uploadsDir, fileName), buffer);
        drawingUrl = `/uploads/drawings/${fileName}`;
      } catch (e) { console.error("File save failed:", e); }
    }

    // Build email content
    const drawingSection = drawingUrl
      ? `<p><b>Drawing:</b> <a href="https://www.maxcustomacrylics.com${drawingUrl}">Download File (${drawing?.name || "drawing"})</a></p>`
      : "<p><b>Drawing:</b> No file attached</p>";

    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: "Max Custom Acrylics <noreply@maxcustomacrylics.com>",
          to: EMAIL_TO,
          replyTo: email,
          subject: `${drawing ? "📐 " : ""}New Inquiry from ${name} — ${company}`,
          html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;padding:20px">
              <h2 style="color:#0F2744">New Project Inquiry</h2>
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666;width:120px">Name</td><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">${name}</td></tr>
                <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Email</td><td style="padding:8px;border-bottom:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Company</td><td style="padding:8px;border-bottom:1px solid #eee">${company}</td></tr>
                <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Phone</td><td style="padding:8px;border-bottom:1px solid #eee">${phone || "N/A"}</td></tr>
                <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Interest</td><td style="padding:8px;border-bottom:1px solid #eee">${productInterest || "N/A"}</td></tr>
                ${drawingUrl ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Drawing</td><td style="padding:8px;border-bottom:1px solid #eee"><a href="https://www.maxcustomacrylics.com${drawingUrl}" style="color:#0F2744;font-weight:bold">📎 Download ${drawing?.name || "File"}</a></td></tr>` : ""}
              </table>
              <h3 style="color:#0F2744;margin-top:20px">Project Description</h3>
              <p style="background:#f8fafc;padding:12px;border-radius:8px;line-height:1.6">${message.replace(/\n/g, "<br>")}</p>
              <p style="color:#999;font-size:12px;margin-top:20px">Sent from maxcustomacrylics.com contact form</p>
            </div>
          `,
        });
      } catch (e) { console.error("Resend failed:", e); }
    }

    return NextResponse.json({ message: "Inquiry received successfully", drawing: drawingUrl }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
