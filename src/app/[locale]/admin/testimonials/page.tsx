"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/components/admin/Toast";
import { Star, Save } from "lucide-react";
import type { Testimonial } from "@/lib/types";

export default function AdminTestimonialsPage() {
  const router = useRouter();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  async function fetchTestimonials() {
    try {
      const res = await fetch("/api/admin/testimonials");
      const data = await res.json();
      setTestimonials(Array.isArray(data) ? data : []);
    } catch {
      showToast("Failed to load testimonials", "error");
    } finally {
      setLoading(false);
    }
  }

  function updateTestimonial(index: number, field: keyof Testimonial, value: string | number) {
    setTestimonials((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
    setDirty(true);
  }

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/testimonials", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testimonials),
      });
      if (res.ok) {
        showToast("Testimonials saved");
        setDirty(false);
      } else {
        showToast("Failed to save testimonials", "error");
      }
    } catch {
      showToast("Failed to save testimonials", "error");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-600 border-t-transparent" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Testimonials</h1>
          <p className="mt-1 text-sm text-gray-500">Edit client testimonials inline</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving || !dirty}
          className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save className="h-4 w-4" />
          {saving ? "Saving..." : "Save All"}
        </button>
      </div>

      {testimonials.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
          <Star className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-3 text-sm font-semibold text-gray-900">No testimonials</h3>
          <p className="mt-1 text-sm text-gray-500">No testimonials have been added yet.</p>
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="rounded-xl bg-white shadow-sm border border-gray-200 p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Name</label>
                  <input
                    type="text"
                    value={testimonial.name}
                    onChange={(e) => updateTestimonial(index, "name", e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Company</label>
                  <input
                    type="text"
                    value={testimonial.company}
                    onChange={(e) => updateTestimonial(index, "company", e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Role</label>
                  <input
                    type="text"
                    value={testimonial.role}
                    onChange={(e) => updateTestimonial(index, "role", e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Rating</label>
                  <input
                    type="number"
                    min={1}
                    max={5}
                    value={testimonial.rating}
                    onChange={(e) => updateTestimonial(index, "rating", Number(e.target.value))}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-xs font-medium text-gray-500 mb-1">Content</label>
                <textarea
                  value={testimonial.content}
                  onChange={(e) => updateTestimonial(index, "content", e.target.value)}
                  rows={2}
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
