"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-lg" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
      <div className="flex gap-2 px-3 py-2">
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-4 py-3 text-sm font-semibold text-white active:bg-[#1a3a5c]"
        >
          <MessageCircle className="h-4 w-4" />
          Request Quote
        </Link>
      </div>
    </div>
  );
}
