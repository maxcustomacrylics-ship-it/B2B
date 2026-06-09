"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import Toast from "@/components/admin/Toast";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [authed, setAuthed] = useState<boolean | null>(null);

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
      <AdminSidebar />
      <div className="ml-60">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-end border-b border-gray-200 bg-white px-8">
          <span className="text-sm text-gray-500">Logged in as Admin</span>
        </header>
        <main className="p-8">{children}</main>
      </div>
      <Toast />
    </div>
  );
}
