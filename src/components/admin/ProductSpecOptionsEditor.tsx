"use client";

import { useEffect, useState } from "react";
import { showToast } from "@/components/admin/Toast";
import {
  SPEC_FIELDS,
  type SpecOption,
} from "@/lib/spec-options";

const PER_PRODUCT_FIELDS = SPEC_FIELDS.filter((f) => f.perProduct);

const inp =
  "block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500";

/**
 * Editor for the per-product overrides of the specification selector.
 *
 * The buyer-facing selector has a global default option set; this lets a
 * product narrow it (for example a box that is only made in 3–10 mm). Empty
 * fields fall back to the global defaults.
 */
export default function ProductSpecOptionsEditor({ slug }: { slug: string }) {
  const [options, setOptions] = useState<Record<string, SpecOption[]>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`/api/admin/product-options?slug=${encodeURIComponent(slug)}`);
        if (!res.ok) throw new Error("Failed to load");
        const data = await res.json();
        if (!cancelled) setOptions(data ?? {});
      } catch {
        if (!cancelled) showToast("Failed to load specification options", "error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const setFieldOptions = (key: string, text: string) => {
    // One option per line: "value | Label" — the label defaults to the value.
    const parsed: SpecOption[] = text
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [value, label] = line.split("|").map((p) => p.trim());
        return { value: value || "", label: label || value || "" };
      })
      .filter((o) => o.value);

    setOptions((prev) => {
      const next = { ...prev };
      if (parsed.length > 0) next[key] = parsed;
      else delete next[key];
      return next;
    });
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/product-options", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, options }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Save failed");
      showToast("Specification options saved");
    } catch (err: any) {
      showToast(err.message || "Save failed", "error");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-lg border border-gray-200 p-4 text-sm text-gray-500">
        Loading specification options…
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-sm font-semibold text-gray-900">
          Specification Selector Options
        </h3>
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-primary-700 disabled:opacity-50"
        >
          {saving ? "Saving…" : "Save Options"}
        </button>
      </div>
      <p className="text-xs text-gray-500 mb-4">
        Narrow the options shown in this product&apos;s specification selector.
        One option per line, as <code>value | Label</code> — the label is what
        the buyer sees. Leave a field empty to use the site-wide defaults.
      </p>

      <div className="space-y-4">
        {PER_PRODUCT_FIELDS.map((field) => {
          const current = options[field.key] ?? [];
          const text = current.map((o) => `${o.value} | ${o.label}`).join("\n");
          return (
            <div key={field.key}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              <textarea
                rows={3}
                defaultValue={text}
                onBlur={(e) => setFieldOptions(field.key, e.target.value)}
                placeholder={
                  field.key === "material"
                    ? "cell-cast | Cell-cast PMMA (clear)\nextruded | Extruded PMMA"
                    : "Leave empty for the default options"
                }
                className={`${inp} resize-y font-mono text-xs`}
              />
              <p className="mt-1 text-xs text-gray-400">
                {current.length > 0
                  ? `${current.length} custom option${current.length === 1 ? "" : "s"}`
                  : "Using site-wide defaults"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
