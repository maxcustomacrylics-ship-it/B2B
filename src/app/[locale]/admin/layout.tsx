"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import Toast from "@/components/admin/Toast";
import { Menu, X } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/admin/login" || pathname === "/en/admin/login") {
      setAuthed(true);
      return;
    }
    fetch("/api/admin/auth")
      .then((res) => res.json())
      .then((data) => {
        if (!data.authenticated) {
          router.push("/admin/login");
        }
        setAuthed(data.authenticated);
      })
      .catch(() => {
        router.push("/admin/login");
      });
  }, [pathname, router]);

  if (authed === null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-600 border-t-transparent" />
      </div>
    );
  }

  if (pathname === "/admin/login" || pathname === "/en/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <AdminSidebar onNavigate={() => {}} />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-60">
            <AdminSidebar onNavigate={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="lg:ml-60">
        {/* Mobile header with menu button */}
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 lg:px-8">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden rounded-lg p-2 text-gray-500 hover:bg-gray-100"
          >
            <Menu className="h-5 w-5" />
          </button>
          <span className="text-sm text-gray-500 hidden sm:block">Logged in as Admin</span>
          <div className="w-8 lg:hidden" /> {/* spacer for centering */}
        </header>
        <main className="p-4 lg:p-8">{children}</main>
      </div>
      <Toast />
    </div>
  );
}
