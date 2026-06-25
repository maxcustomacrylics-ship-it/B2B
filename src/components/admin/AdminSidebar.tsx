"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  Wrench,
  Briefcase,
  FileText,
  Star,
  MessageSquare,
  Settings,
  DollarSign,
  ArrowLeft,
  LogOut,
} from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/services", label: "Capabilities", icon: Wrench },
  { href: "/admin/cases", label: "Projects", icon: Briefcase },
  { href: "/admin/blogs", label: "Blog Posts", icon: FileText },
  { href: "/admin/testimonials", label: "Testimonials", icon: Star },
  { href: "/admin/messages", label: "Site Copy", icon: MessageSquare },
  { href: "/admin/pricing", label: "Pricing", icon: DollarSign },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    window.location.href = "/admin/login";
  };

  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-60 flex-col bg-gray-900 text-gray-300">
      <div className="flex h-16 items-center gap-2 border-b border-gray-800 px-6">
        <span className="text-lg font-bold text-white">AcrylicPro</span>
        <span className="rounded bg-primary-600 px-2 py-0.5 text-xs font-medium text-white">Admin</span>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary-600 text-white"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-gray-800 px-3 py-4 space-y-1">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Site
        </Link>
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}
