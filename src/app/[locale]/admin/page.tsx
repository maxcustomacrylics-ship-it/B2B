"use client";

import { useEffect, useState } from "react";
import { Package, Wrench, Briefcase, FileText, Star } from "lucide-react";

type Stats = {
  products: number;
  services: number;
  cases: number;
  blogs: number;
  testimonials: number;
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    products: 0, services: 0, cases: 0, blogs: 0, testimonials: 0,
  });

  useEffect(() => {
    async function load() {
      const [p, s, c, b, t] = await Promise.all([
        fetch("/api/admin/products").then((r) => r.json()),
        fetch("/api/admin/services").then((r) => r.json()),
        fetch("/api/admin/cases").then((r) => r.json()),
        fetch("/api/admin/blogs").then((r) => r.json()),
        fetch("/api/admin/testimonials").then((r) => r.json()),
      ]);
      setStats({
        products: Array.isArray(p) ? p.length : 0,
        services: Array.isArray(s) ? s.length : 0,
        cases: Array.isArray(c) ? c.length : 0,
        blogs: Array.isArray(b) ? b.length : 0,
        testimonials: Array.isArray(t) ? t.length : 0,
      });
    }
    load();
  }, []);

  const cards = [
    { label: "Products", count: stats.products, icon: Package, color: "bg-blue-500" },
    { label: "Services", count: stats.services, icon: Wrench, color: "bg-green-500" },
    { label: "Case Studies", count: stats.cases, icon: Briefcase, color: "bg-purple-500" },
    { label: "Blog Posts", count: stats.blogs, icon: FileText, color: "bg-orange-500" },
    { label: "Testimonials", count: stats.testimonials, icon: Star, color: "bg-yellow-500" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p className="mt-1 text-sm text-gray-500">Overview of your website content</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {cards.map((card) => (
          <div key={card.label} className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-4">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${card.color}`}>
                <card.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{card.count}</div>
                <div className="text-xs text-gray-500">{card.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
