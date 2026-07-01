import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="py-20 text-center">
      <h1 className="text-6xl font-bold text-[#0F2744]">404</h1>
      <p className="mt-4 text-lg text-gray-500">The page you're looking for doesn't exist.</p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors">Back to Home</Link>
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border-2 border-[#0F2744] px-6 py-3 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors">Contact Us</Link>
      </div>
    </Container>
  );
}
