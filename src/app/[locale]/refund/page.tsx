import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Refund & Return Policy ",
  description: "Our refund and return policy for custom acrylic products — quality guarantee, inspection, and resolution process.",
};

export default function RefundPage() {
  return (
    <Container className="py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Refund & Return Policy" }]} />
      <article className="mt-8 mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Refund & Return Policy</h1>
        <p className="mt-4 text-muted">Last updated: June 2026</p>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">1. Quality Guarantee</h2>
          <p>We stand behind the quality of our products. Every order undergoes rigorous quality control inspection before shipment. If you receive products that do not meet the agreed specifications, we will work with you to resolve the issue promptly.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">2. Inspection Upon Receipt</h2>
          <p>Please inspect all products within <strong>7 days</strong> of receipt. Any defects, damages, or discrepancies must be reported within this period with photographic evidence and a written description of the issue.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">3. Eligible Returns</h2>
          <p>Returns are accepted for the following reasons:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Products do not match the approved specifications or samples</li>
            <li>Manufacturing defects (cracks, bubbles, dimensional errors exceeding tolerance)</li>
            <li>Damage during transit (must be documented upon delivery)</li>
            <li>Incorrect quantity or wrong items shipped</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">4. Non-Returnable Items</h2>
          <p>Due to the custom nature of our products, the following are generally non-returnable:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Custom-manufactured products that meet specifications</li>
            <li>Products that have been installed, modified, or used</li>
            <li>Issues reported after the 7-day inspection period</li>
            <li>Minor cosmetic variations inherent to acrylic manufacturing</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">5. Resolution Options</h2>
          <p>For eligible claims, we offer the following resolutions at our discretion:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Replacement:</strong> Re-manufacture the affected products at no additional cost</li>
            <li><strong>Refund:</strong> Full or partial refund for the affected items</li>
            <li><strong>Credit:</strong> Account credit toward future orders</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">6. Process</h2>
          <p>To initiate a return or refund request, contact us through our <a href="/en/contact" className="text-primary-600 hover:underline">Contact page</a> with your order number, description of the issue, and supporting photos. We will respond within 2 business days.</p>
        </section>
      </article>
    </Container>
  );
}
