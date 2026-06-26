"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, X, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import { mainNav } from "@/data/navigation";
import { useSettings } from "@/components/providers/SettingsProvider";

export default function Header() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const settings = useSettings();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keyboard: close dropdown on Escape
  useEffect(() => {
    if (!openDropdown) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenDropdown(null); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [openDropdown]);

  function handleDropdownEnter(label: string) {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    setOpenDropdown(label);
  }
  function handleDropdownLeave() {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 200);
  }

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100">
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-[#0F2744] shrink-0">
              {settings.companyName}
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {mainNav.map((item) => {
                const isOpen = openDropdown === item.label;
                const hasChildren = item.children && item.children.length > 0;

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hasChildren && handleDropdownEnter(item.label)}
                    onMouseLeave={() => hasChildren && handleDropdownLeave()}
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        isOpen ? "text-[#0F2744] bg-blue-50" : "text-gray-500 hover:text-[#0F2744] hover:bg-gray-50"
                      }`}
                      onClick={() => hasChildren && setOpenDropdown(isOpen ? null : item.label)}
                      aria-expanded={hasChildren ? isOpen : undefined}
                      aria-haspopup={hasChildren ? "true" : undefined}
                    >
                      {t(item.label)}
                      {hasChildren && <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />}
                    </Link>

                    {/* Dropdown */}
                    {hasChildren && isOpen && (
                      <div
                        className="absolute left-0 top-full mt-1 w-52 rounded-xl border border-gray-100 bg-white shadow-lg py-2 z-50"
                        onMouseEnter={() => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } }}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {item.children!.map((child) => (
                          <Link
                            key={child.href + child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-[#0F2744] hover:bg-blue-50 transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#0F2744] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm"
              >
                Request a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden rounded-lg p-2 text-gray-500 hover:bg-gray-100"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div onClick={() => setMobileOpen(false)} style={{position:"fixed",inset:0,zIndex:9998,background:"rgba(0,0,0,0.5)"}} />
          <div style={{position:"fixed",top:0,right:0,bottom:0,zIndex:9999,width:280,background:"#fff",overflowY:"auto",WebkitOverflowScrolling:"touch"}}>
            <div style={{display:"flex",justifyContent:"flex-end",padding:"12px 16px"}}>
              <button onClick={() => setMobileOpen(false)} style={{background:"none",border:"none",fontSize:24,color:"#333",cursor:"pointer",padding:4,lineHeight:1}}>✕</button>
            </div>
            {mainNav.map((item) => (
              <div key={item.label}>
                <Link href={item.href} onClick={() => setMobileOpen(false)} style={{display:"block",padding:"14px 20px",fontSize:16,color:"#111",textDecoration:"none",borderBottom:"1px solid #f3f4f6",fontWeight:600}}>{t(item.label)}</Link>
                {item.children?.map((child) => (
                  <Link key={child.label} href={child.href} onClick={() => setMobileOpen(false)} style={{display:"block",padding:"10px 20px 10px 32px",fontSize:14,color:"#666",textDecoration:"none",borderBottom:"1px solid #fafafa"}}>{child.label}</Link>
                ))}
              </div>
            ))}
            <div style={{padding:"16px 20px",borderTop:"1px solid #e5e7eb",marginTop:8}}>
              <Link href="/contact" onClick={() => setMobileOpen(false)} style={{display:"block",width:"100%",padding:"12px 0",textAlign:"center",background:"#0F2744",color:"#fff",borderRadius:8,fontSize:14,fontWeight:600,textDecoration:"none"}}>Request a Quote</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
