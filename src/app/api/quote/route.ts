import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const quoteSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  phone: z.string().optional(),
  materialType: z.string().min(1),
  width: z.number().min(1),
  height: z.number().min(1),
  thickness: z.number().min(1),
  quantity: z.number().min(1),
  complexity: z.string().min(1),
  edgeFinish: z.string().min(1),
  surfaceFinish: z.string().min(1),
  leadTime: z.string().min(1),
  message: z.string().optional(),
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
    const body = await request.json();
    const validated = quoteSchema.parse(body);

    console.log("=== Quote Request Received ===");
    console.log("Name:", validated.name);
    console.log("Email:", validated.email);
    console.log("Company:", validated.company);
    console.log("Phone:", validated.phone || "N/A");
    console.log("Material:", validated.materialType);
    console.log("Size:", `${validated.width}x${validated.height}x${validated.thickness} mm`);
    console.log("Quantity:", validated.quantity);
    console.log("Complexity:", validated.complexity);
    console.log("Edge Finish:", validated.edgeFinish);
    console.log("Surface Finish:", validated.surfaceFinish);
    console.log("Lead Time:", validated.leadTime);
    console.log("Message:", validated.message || "N/A");
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
          from: "AcrylicPro Website <noreply@maxcustomacrylics.com>",
          to: "maxcustomacrylics@gmail.com",
          replyTo: validated.email,
          subject: `New Quote Request from ${validated.name}`,
          html: `
            <h2>New Quote Request</h2>
            <p><strong>Name:</strong> ${validated.name}</p>
            <p><strong>Email:</strong> ${validated.email}</p>
            <p><strong>Company:</strong> ${validated.company}</p>
            <p><strong>Phone:</strong> ${validated.phone || "N/A"}</p>
            <p><strong>Material:</strong> ${validated.materialType}</p>
            <p><strong>Dimensions:</strong> ${validated.width} x ${validated.height} x ${validated.thickness} mm</p>
            <p><strong>Quantity:</strong> ${validated.quantity}</p>
            <p><strong>Complexity:</strong> ${validated.complexity}</p>
            <p><strong>Edge Finish:</strong> ${validated.edgeFinish}</p>
            <p><strong>Surface Finish:</strong> ${validated.surfaceFinish}</p>
            <p><strong>Lead Time:</strong> ${validated.leadTime}</p>
            <p><strong>Message:</strong><br/>${validated.message?.replace(/\n/g, "<br/>") || "N/A"}</p>
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
