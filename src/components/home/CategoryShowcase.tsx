import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

const categories = [
  { title: "Acrylic Displays", href: "/products/acrylic-displays", count: "8 products", icon: "🖼", desc: "Retail displays, cosmetic stands, brochure holders, and counter displays." },
  { title: "Acrylic Boxes", href: "/products/acrylic-boxes", count: "6 products", icon: "📦", desc: "Storage boxes, donation boxes, display cases, and lock boxes." },
  { title: "Acrylic Signage", href: "/products/acrylic-signage", count: "6 products", icon: "📋", desc: "Office signs, door signs, name plates, and QR code stands." },
  { title: "Acrylic Home & Office", href: "/products/acrylic-home-office", count: "6 products", icon: "🏠", desc: "Desk organizers, monitor stands, makeup organizers, and trays." },
];

export default function CategoryShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Popular Acrylic Products</h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Explore our most-requested product categories — all custom manufactured to your specifications.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link key={cat.href} href={cat.href} className="group rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="text-4xl mb-3">{cat.icon}</div>
              <h3 className="font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors">{cat.title}</h3>
              <p className="mt-1 text-xs text-gray-400">{cat.count}</p>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#0F2744]"><ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
