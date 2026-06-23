import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  phone: z.string().optional(),
  productInterest: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    const resendApiKey = process.env.RESEND_API_KEY;

    // Always log the inquiry
    console.log("=== New Contact Inquiry ===");
    console.log("Name:", validated.name);
    console.log("Email:", validated.email);
    console.log("Company:", validated.company);
    console.log("Phone:", validated.phone || "N/A");
    console.log("Product Interest:", validated.productInterest || "N/A");
    console.log("Message:", validated.message);
    console.log("===========================");

    // Try to send email if API key is configured
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: "AcrylicPro Website <noreply@maxcustomacrylics.com>",
          to: "maxcustomacrylics@gmail.com",
          replyTo: validated.email,
          subject: `New Inquiry from ${validated.name} - ${validated.company}`,
          html: `
            <h2>New Contact Form Inquiry</h2>
            <p><b>Name:</b> ${validated.name}</p>
            <p><b>Email:</b> ${validated.email}</p>
            <p><b>Company:</b> ${validated.company}</p>
            <p><b>Phone:</b> ${validated.phone || "N/A"}</p>
            <p><b>Product Interest:</b> ${validated.productInterest || "N/A"}</p>
            <h3>Message:</h3>
            <p>${validated.message.replace(/\n/g, "<br>")}</p>
          `,
        });
        console.log("Email sent successfully");
      } catch (emailError) {
        console.error("Resend failed:", emailError);
        // Still return success - message was logged
      }
    }

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
