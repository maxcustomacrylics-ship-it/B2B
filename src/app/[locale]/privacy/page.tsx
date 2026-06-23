import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | AcrylicPro Custom",
  description: "Learn how AcrylicPro Custom collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <Container className="py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <article className="mt-8 mx-auto max-w-3xl prose prose-slate">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-muted">Last updated: June 2026</p>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">1. Information We Collect</h2>
          <p>When you use our website or submit an inquiry, we may collect the following information:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Contact Information:</strong> Name, email address, phone number, and company name provided through our quote request or contact forms.</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent on site, browser type, and IP address (collected via standard analytics).</li>
            <li><strong>Cookies:</strong> Small data files stored on your device to improve site functionality and analyze traffic.</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>To respond to your inquiries and provide quotes</li>
            <li>To process and fulfill your orders</li>
            <li>To send important updates regarding your orders or our services</li>
            <li>To improve our website and customer experience</li>
            <li>To comply with legal obligations</li>
          </ul>
          <p>We do <strong>not</strong> sell, rent, or share your personal information with third parties for their marketing purposes.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">3. Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information. All data transmission is encrypted via HTTPS. Access to personal data is restricted to authorized personnel only.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">4. Cookies</h2>
          <p>Our website uses essential cookies to function properly and analytics cookies to understand how visitors use our site. You can disable cookies through your browser settings, though this may affect site functionality.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">5. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>To exercise these rights, contact us at our email address listed on the Contact page.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">6. Third-Party Services</h2>
          <p>We may use third-party services (such as analytics and email delivery) that have their own privacy policies. We encourage you to review those policies.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">7. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
        </section>

        <section className="mt-8 space-y-4 text-muted leading-relaxed">
          <h2 className="text-xl font-semibold text-foreground">8. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us through our <a href="/en/contact" className="text-primary-600 hover:underline">Contact page</a>.</p>
        </section>
      </article>
    </Container>
  );
}
