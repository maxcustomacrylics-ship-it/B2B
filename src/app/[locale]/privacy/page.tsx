import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getSettings } from "@/lib/data-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Privacy Policy | Max Custom Acrylics",
  description: "Learn how we collect, use, and protect your personal information.",
};

export default async function PrivacyPage() {
  const s = await getSettings();
  const title = s.privacyTitle || "Privacy Policy";
  const content = s.privacyContent || "";
  return (
    <Container className="py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: title }]} />
      <div className="mt-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-[#0F2744]">{title}</h1>
        {content ? <div className="mt-6 prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} /> : (
          <div className="mt-6 text-gray-500 space-y-4">
            <p>This Privacy Policy describes how we collect, use, and protect your personal information when you use our website or services.</p>
            <h2 className="text-lg font-semibold text-[#0F2744]">Information We Collect</h2>
            <p>We collect information you provide directly, such as your name, email address, company name, and project details when you submit an inquiry form.</p>
            <h2 className="text-lg font-semibold text-[#0F2744]">How We Use Your Information</h2>
            <p>We use your information to respond to inquiries, provide quotations, and deliver our services. We do not sell or share your personal information with third parties.</p>
            <h2 className="text-lg font-semibold text-[#0F2744]">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us through our website.</p>
          </div>
        )}
      </div>
    </Container>
  );
}
