"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { mainNav } from "@/data/navigation";
import { useSettings } from "@/components/providers/SettingsProvider";

export default function Header() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const settings = useSettings();

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border">
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-primary-700">
              {settings.companyName}
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted hover:text-primary-600 transition-colors"
                >
                  {t(item.label)}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href="/contact" variant="primary">
                {t("contact")}
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden rounded-lg p-2 text-foreground hover:bg-gray-100"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Nav — OUTSIDE header to avoid sticky clipping */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div onClick={() => setMobileOpen(false)} style={{position:"fixed",inset:0,zIndex:9998,background:"rgba(0,0,0,0.5)"}} />
          <div style={{position:"fixed",top:0,right:0,bottom:0,zIndex:9999,width:280,background:"#fff",overflowY:"auto",WebkitOverflowScrolling:"touch"}}>
            <div style={{display:"flex",justifyContent:"flex-end",padding:"12px 16px"}}>
              <button onClick={() => setMobileOpen(false)} style={{background:"none",border:"none",fontSize:24,color:"#333",cursor:"pointer",padding:4,lineHeight:1}}>✕</button>
            </div>
            <a href="/" onClick={() => setMobileOpen(false)} style={{display:"block",padding:"14px 20px",fontSize:16,color:"#111",textDecoration:"none",borderBottom:"1px solid #f3f4f6"}}>Home</a>
            <a href="/manufacturing" onClick={() => setMobileOpen(false)} style={{display:"block",padding:"14px 20px",fontSize:16,color:"#111",textDecoration:"none",borderBottom:"1px solid #f3f4f6"}}>Services</a>
            <a href="/products" onClick={() => setMobileOpen(false)} style={{display:"block",padding:"14px 20px",fontSize:16,color:"#111",textDecoration:"none",borderBottom:"1px solid #f3f4f6"}}>Products</a>
            <a href="/custom-solutions/industries" onClick={() => setMobileOpen(false)} style={{display:"block",padding:"14px 20px",fontSize:16,color:"#111",textDecoration:"none",borderBottom:"1px solid #f3f4f6"}}>Industries</a>
            <a href="/cases" onClick={() => setMobileOpen(false)} style={{display:"block",padding:"14px 20px",fontSize:16,color:"#111",textDecoration:"none",borderBottom:"1px solid #f3f4f6"}}>Projects</a>
            <a href="/blog" onClick={() => setMobileOpen(false)} style={{display:"block",padding:"14px 20px",fontSize:16,color:"#111",textDecoration:"none",borderBottom:"1px solid #f3f4f6"}}>Resources</a>
            <a href="/about" onClick={() => setMobileOpen(false)} style={{display:"block",padding:"14px 20px",fontSize:16,color:"#111",textDecoration:"none",borderBottom:"1px solid #f3f4f6"}}>About</a>
            <a href="/contact" onClick={() => setMobileOpen(false)} style={{display:"block",padding:"14px 20px",fontSize:16,color:"#111",textDecoration:"none",borderBottom:"1px solid #f3f4f6"}}>Contact</a>
            <div style={{padding:"16px 20px",borderTop:"1px solid #e5e7eb",marginTop:8}}>
              <a href="/contact" style={{display:"block",width:"100%",padding:"12px 0",textAlign:"center",background:"#2563eb",color:"#fff",borderRadius:8,fontSize:14,fontWeight:600,textDecoration:"none"}}>Contact Us</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
