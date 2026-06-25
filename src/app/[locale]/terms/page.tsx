import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service ",
  description: "Read the terms and conditions governing the use of AcrylicPro Custom's website and services.",
};

export default function TermsPage() {
  return (
    <Container className="py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />
      <article className="mt-8 mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Terms of Service</h1>
        <p className="mt-4 text-muted">Last updated: June 2026</p>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
          <p>By accessing and using the AcrylicPro Custom website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">2. Services Description</h2>
          <p>AcrylicPro Custom provides B2B acrylic board customization services including but not limited to: precision cutting, UV printing, edge finishing, heat bending, and assembly. All services are subject to availability and may be modified at our discretion.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">3. Quotes & Pricing</h2>
          <p>All quotes generated through our website are estimates and subject to final confirmation. Final pricing is determined after design review, material confirmation, and order volume verification. We reserve the right to adjust pricing based on actual specifications and current material costs.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">4. Orders & Payment</h2>
          <p>Orders are confirmed upon receipt of a purchase order or deposit as agreed. Payment terms are negotiated on a per-order basis. Standard payment methods include wire transfer (T/T) and letter of credit (L/C) for international orders.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">5. Intellectual Property</h2>
          <p>All designs, specifications, and technical drawings provided by the client remain the client's intellectual property. Our manufacturing processes, trade secrets, and proprietary techniques are protected. Custom designs created by our team are transferred to the client upon full payment.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
          <p>AcrylicPro Custom shall not be liable for any indirect, incidental, or consequential damages. Our liability is limited to the value of the specific order in question. We are not responsible for delays caused by force majeure events including natural disasters, supply chain disruptions, or government actions.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">7. Governing Law</h2>
          <p>These terms are governed by the laws of the People's Republic of China. Any disputes shall be resolved through negotiation first, followed by arbitration in Guangzhou if necessary.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">8. Contact</h2>
          <p>For questions about these Terms, please visit our <a href="/en/contact" className="text-primary-600 hover:underline">Contact page</a>.</p>
        </section>
      </article>
    </Container>
  );
}
