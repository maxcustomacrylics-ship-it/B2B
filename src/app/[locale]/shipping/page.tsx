import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getSettings } from "@/lib/data-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Shipping Policy | Max Custom Acrylics",
  description: "Shipping Policy.",
};

export default async function ShippingPage() {
  const s = await getSettings();
  const title = s.shippingTitle || "Shipping Policy";
  const content = s.shippingContent || "";
  return (
    <Container className="py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: title }]} />
      <div className="mt-6 max-w-3xl">
        <h1 className="text-4xl font-bold text-[#0F2744]">{title}</h1>
        {content ? <div className="mt-6 prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} /> : (
          <div className="mt-6 text-gray-500"><p>Content can be edited in the admin panel under Legal Pages.</p></div>
        )}
      </div>
    </Container>
  );
}
