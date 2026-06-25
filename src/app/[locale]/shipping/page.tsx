import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Shipping Policy ",
  description: "Shipping information for acrylic product orders — shipping methods, packaging, delivery times, and international logistics.",
};

export default function ShippingPage() {
  return (
    <Container className="py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shipping Policy" }]} />
      <article className="mt-8 mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Shipping Policy</h1>
        <p className="mt-4 text-muted">Last updated: June 2026</p>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">1. Shipping Methods</h2>
          <p>We offer the following shipping options for domestic and international orders:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Sea Freight:</strong> Most economical for bulk orders. Transit time: 15–40 days depending on destination.</li>
            <li><strong>Air Freight:</strong> Faster delivery for time-sensitive orders. Transit time: 3–10 days.</li>
            <li><strong>Express Courier:</strong> DHL, FedEx, UPS, TNT for samples and small orders. Transit time: 3–7 days.</li>
            <li><strong>Rail Freight:</strong> Available for select Europe and Central Asia routes. Transit time: 12–25 days.</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">2. Packaging</h2>
          <p>All acrylic products are packaged with protective film, foam cushioning, and reinforced cartons or wooden crates as appropriate for the product size, quantity, and shipping method. Custom packaging and labeling is available upon request.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">3. Shipping Costs</h2>
          <p>Shipping costs are calculated based on order weight, dimensions, destination, and shipping method. A shipping quote will be provided with your order confirmation. For FOB terms, the buyer is responsible for freight, insurance, and customs clearance. CIF and DDP terms are available for select destinations.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">4. Delivery Time</h2>
          <p>Total delivery time consists of production lead time plus shipping transit time:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Production:</strong> 7–15 business days (standard), 4–6 business days (rush)</li>
            <li><strong>Shipping:</strong> 3–40 days depending on method and destination</li>
          </ul>
          <p>You will receive tracking information once your order has shipped.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">5. International Orders</h2>
          <p>International orders may be subject to import duties, taxes, and customs clearance fees. These charges are the responsibility of the buyer unless otherwise agreed. We provide all necessary documentation including commercial invoice, packing list, and certificate of origin.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">6. Insurance</h2>
          <p>All shipments are insured against loss or damage during transit. In the event of shipping damage, document the damage upon receipt and contact us immediately with photos of the damaged packaging and products.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">7. Tracking & Support</h2>
          <p>For shipping inquiries or to request a tracking update, please visit our <a href="/en/contact" className="text-primary-600 hover:underline">Contact page</a>.</p>
        </section>
      </article>
    </Container>
  );
}
