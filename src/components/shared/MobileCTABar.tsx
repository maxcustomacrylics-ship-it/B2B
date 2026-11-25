"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

/**
 * Sticky mobile call-to-action.
 *
 * On product pages it scrolls to the on-page enquiry form so the product
 * context is never lost. Elsewhere it goes to the contact page. The bar only
 * appears once the visitor has scrolled past the first screen, keeping the
 * opening view uncluttered.
 */
export default function MobileCTABar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  // Product detail pages have an on-page enquiry form; category/listing
  // pages under /products/ do not.
  const isProductDetail =
    /\/products\/[^/]+$/.test(pathname) &&
    !/\/products\/(acrylic-displays-2|acrylic-boxes-2|acrylic-signs-2|acrylic-trays-shelves|protective-products-2|acrylic-furniture|acrylic-trophies|acrylic-accessories|custom-acrylic-products)\/?$/.test(
      pathname
    );

  const href = isProductDetail ? "#product-inquiry" : "/contact";
  const label = isProductDetail ? "Get My Quote" : "Request Quote";

  useEffect(() => {
    const onScroll = () => {
      // Appear after the first screen, so it does not cover the hero.
      setVisible(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-lg transition-transform duration-300 ${visible ? "translate-y-0" : "translate-y-full"}`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      aria-hidden={!visible}
    >
      <div className="flex gap-2 px-3 py-2">
        <Link
          href={href}
          tabIndex={visible ? 0 : -1}
          className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-4 py-3 text-sm font-semibold text-white active:bg-[#1a3a5c] min-h-[48px]"
        >
          <MessageCircle className="h-4 w-4" />
          {label}
        </Link>
      </div>
    </div>
  );
}
