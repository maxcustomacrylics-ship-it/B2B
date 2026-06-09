import { NextResponse } from "next/server";
import { z } from "zod";

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

    // Log the inquiry (replace with email/CRM integration)
    console.log("=== New Contact Inquiry ===");
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
