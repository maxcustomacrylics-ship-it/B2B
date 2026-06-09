import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  phone: z.string().optional(),
  productInterest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    // Send email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.log("=== New Contact Inquiry (email not configured) ===");
      console.log("Name:", validated.name);
      console.log("Email:", validated.email);
      console.log("Company:", validated.company);
      console.log("Phone:", validated.phone || "N/A");
      console.log("Product Interest:", validated.productInterest || "N/A");
      console.log("Message:", validated.message);
      console.log("===========================");
      return NextResponse.json(
        { message: "Inquiry received successfully" },
        { status: 200 }
      );
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: "AcrylicPro Website <onboarding@resend.dev>",
      to: "maxcustomacrylics@gmail.com",
      replyTo: validated.email,
      subject: `New Inquiry from ${validated.name} — ${validated.company}`,
      html: `
        <h2>New Contact Form Inquiry</h2>
        <table style="border-collapse:collapse; width:100%; max-width:600px;">
          <tr><td style="padding:8px; border-bottom:1px solid #eee; font-weight:bold;">Name</td><td style="padding:8px; border-bottom:1px solid #eee;">${validated.name}</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #eee; font-weight:bold;">Email</td><td style="padding:8px; border-bottom:1px solid #eee;">${validated.email}</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #eee; font-weight:bold;">Company</td><td style="padding:8px; border-bottom:1px solid #eee;">${validated.company}</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #eee; font-weight:bold;">Phone</td><td style="padding:8px; border-bottom:1px solid #eee;">${validated.phone || "N/A"}</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #eee; font-weight:bold;">Product Interest</td><td style="padding:8px; border-bottom:1px solid #eee;">${validated.productInterest || "N/A"}</td></tr>
        </table>
        <h3 style="margin-top:20px;">Message:</h3>
        <p style="background:#f5f5f5; padding:12px; border-radius:4px;">${validated.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json(
      { message: "Inquiry received successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
