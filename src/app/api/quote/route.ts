import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rate-limit";
import { escapeHtml } from "@/lib/sanitize";

export const dynamic = "force-dynamic";

const quoteSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Invalid email address").max(200),
  company: z.string().min(1, "Company is required").max(200),
  phone: z.string().max(60).optional(),
  materialType: z.string().min(1).max(100),
  width: z.number().min(1).max(100000),
  height: z.number().min(1).max(100000),
  thickness: z.number().min(1).max(1000),
  quantity: z.number().min(1).max(10000000),
  complexity: z.string().min(1).max(100),
  edgeFinish: z.string().min(1).max(100),
  surfaceFinish: z.string().min(1).max(100),
  leadTime: z.string().min(1).max(100),
  message: z.string().max(5000).optional(),
  estimate: z.object({
    area: z.number(),
    total: z.number(),
    pricePerUnit: z.number(),
    materialCost: z.number(),
    cuttingCost: z.number(),
    edgeCost: z.number(),
    surfaceCost: z.number(),
    leadTime: z.string(),
  }).optional(),
});

export async function POST(request: Request) {
  try {
    // Rate limit — each accepted request triggers an outbound email.
    const limit = checkRateLimit(request, "quote", 5, 10 * 60 * 1000);
    if (!limit.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } }
      );
    }

    const body = await request.json();
    const validated = quoteSchema.parse(body);

    console.log("=== Quote Request Received ===");
    console.log("Quantity:", validated.quantity);
    console.log("Complexity:", validated.complexity);
    console.log("Lead Time:", validated.leadTime);
    if (validated.estimate) {
      console.log("Estimated Total:", validated.estimate.total);
      console.log("Estimated Unit Price:", validated.estimate.pricePerUnit);
    }
    console.log("=============================");

    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: "Max Custom Acrylics <noreply@maxcustomacrylics.com>",
          to: "maxcustomacrylics@gmail.com",
          replyTo: validated.email,
          subject: `New Quote Request from ${validated.name}`,
          // All user-supplied values are HTML-escaped.
          html: `
            <h2>New Quote Request</h2>
            <p><strong>Name:</strong> ${escapeHtml(validated.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(validated.email)}</p>
            <p><strong>Company:</strong> ${escapeHtml(validated.company)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(validated.phone || "N/A")}</p>
            <p><strong>Material:</strong> ${escapeHtml(validated.materialType)}</p>
            <p><strong>Dimensions:</strong> ${validated.width} x ${validated.height} x ${validated.thickness} mm</p>
            <p><strong>Quantity:</strong> ${validated.quantity}</p>
            <p><strong>Complexity:</strong> ${escapeHtml(validated.complexity)}</p>
            <p><strong>Edge Finish:</strong> ${escapeHtml(validated.edgeFinish)}</p>
            <p><strong>Surface Finish:</strong> ${escapeHtml(validated.surfaceFinish)}</p>
            <p><strong>Lead Time:</strong> ${escapeHtml(validated.leadTime)}</p>
            <p><strong>Message:</strong><br/>${escapeHtml(validated.message || "N/A").replace(/\n/g, "<br/>")}</p>
            ${validated.estimate ? `<p><strong>Estimated Total:</strong> $${validated.estimate.total}</p>` : ""}
          `,
        });
      } catch (emailError) {
        console.error("Resend email failed:", emailError);
      }
    }

    return NextResponse.json({ message: "Quote request received." }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 }
      );
    }
    console.error("Quote API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
