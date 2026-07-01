import { readFileSync, writeFileSync } from "fs";

const pages = [
  { file: "terms", slug: "terms", title: "Terms of Service" },
  { file: "refund", slug: "refund", title: "Refund Policy" },
  { file: "shipping", slug: "shipping", title: "Shipping Policy" },
];

for (const p of pages) {
  const f = `src/app/[locale]/${p.file}/page.tsx`;
  let s = readFileSync(f, "utf8");

  // Create new content
  const newContent = `import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getSettings } from "@/lib/data-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "${p.title} | Max Custom Acrylics",
  description: "${p.title}.",
};

export default async function ${p.file.charAt(0).toUpperCase() + p.file.slice(1)}Page() {
  const s = await getSettings();
  const title = s.${p.slug}Title || "${p.title}";
  const content = s.${p.slug}Content || "";
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
`;

  writeFileSync(f, newContent);
  console.log(p.file + ": DONE");
}
