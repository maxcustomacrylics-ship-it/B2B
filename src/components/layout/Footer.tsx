import Link from "next/link";
import Container from "@/components/ui/Container";
import { footerServices, footerCompany, footerLegal } from "@/data/navigation";

const productLinks = [
  { label: "Custom Acrylic Products", href: "/products/custom-acrylic-products" },
  { label: "Acrylic Displays", href: "/products/acrylic-displays-2" },
  { label: "Acrylic Boxes", href: "/products/acrylic-boxes-2" },
  { label: "Acrylic Signs", href: "/products/acrylic-signs-2" },
  { label: "Protective Products", href: "/products/protective-products-2" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <Container className="py-20">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">Max Custom Acrylics</Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-sm">Premium custom acrylic products engineered for your business. From design review to worldwide delivery.</p>
            <a href="mailto:info@maxcustomacrylics.com" className="mt-5 inline-block text-sm text-gray-400 hover:text-white transition-colors">info@maxcustomacrylics.com</a>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-300 mb-4">Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map((item) => (
                <li key={item.href}><Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-300 mb-4">Capabilities</h4>
            <ul className="space-y-2.5">
              {footerServices.map((item) => (
                <li key={item.href}><Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-300 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerCompany.map((item) => (
                <li key={item.href}><Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-gray-800">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Max Custom Acrylics. All rights reserved.</p>
          <div className="flex gap-x-6 text-xs text-gray-500">
            {footerLegal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white transition-colors">{item.label}</Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
