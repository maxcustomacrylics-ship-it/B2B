"use client";

import { useMemo, useState } from "react";
import {
  SPEC_FIELDS,
  type SpecFieldKey,
} from "@/lib/spec-options";
import { SUPPLY_POLICY } from "@/lib/supply-policy";

export type SpecValues = Partial<Record<SpecFieldKey, string>>;

type Props = {
  /** Per-product option overrides, keyed by field key. */
  options?: Record<string, { value: string; label: string }[]>;
  /** Called when the buyer asks to continue to the inquiry form. */
  onContinue?: (values: SpecValues) => void;
};

const inputCls =
  "block w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-[#0F2744] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20";
const labelCls = "block text-sm font-medium text-[#0F2744] mb-1.5";

export default function SpecSelector({ options, onContinue }: Props) {
  const [values, setValues] = useState<SpecValues>({});
  const [open, setOpen] = useState(false);

  const fields = useMemo(
    () =>
      SPEC_FIELDS.map((f) => {
        const override = options?.[f.key];
        if (override && override.length > 0) {
          return { ...f, options: override };
        }
        return f;
      }),
    [options]
  );

  const filledCount = Object.values(values).filter(
    (v) => v !== undefined && v !== ""
  ).length;

  const setValue = (key: SpecFieldKey, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleContinue = () => {
    onContinue?.(values);
    document
      .getElementById("product-inquiry")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderField = (field: (typeof fields)[number]) => {
    const value = values[field.key] ?? "";

    if (field.type === "textarea") {
      return (
        <div key={field.key} className="sm:col-span-2">
          <label className={labelCls} htmlFor={`spec-${field.key}`}>
            {field.label}
          </label>
          <textarea
            id={`spec-${field.key}`}
            name={field.key}
            rows={3}
            value={value}
            onChange={(e) => setValue(field.key, e.target.value)}
            placeholder={field.placeholder}
            className={`${inputCls} resize-y`}
          />
          {field.hint && (
            <p className="mt-1 text-xs text-gray-500">{field.hint}</p>
          )}
        </div>
      );
    }

    if (field.type === "number") {
      return (
        <div key={field.key}>
          <label className={labelCls} htmlFor={`spec-${field.key}`}>
            {field.label}
          </label>
          <input
            id={`spec-${field.key}`}
            name={field.key}
            type="number"
            inputMode="numeric"
            min={field.min}
            max={field.max}
            value={value}
            onChange={(e) => setValue(field.key, e.target.value)}
            placeholder={field.placeholder}
            className={inputCls}
          />
          {field.hint && (
            <p className="mt-1 text-xs text-gray-500">{field.hint}</p>
          )}
        </div>
      );
    }

    // select
    const opts = field.options ?? [];
    return (
      <div key={field.key}>
        <label className={labelCls} htmlFor={`spec-${field.key}`}>
          {field.label}
        </label>
        <select
          id={`spec-${field.key}`}
          name={field.key}
          value={value}
          onChange={(e) => setValue(field.key, e.target.value)}
          className={inputCls}
        >
          <option value="">Select…</option>
          {opts.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        {field.hint && (
          <p className="mt-1 text-xs text-gray-500">{field.hint}</p>
        )}
      </div>
    );
  };

  return (
    <section
      id="specify-requirements"
      className="mt-16 scroll-mt-24"
      aria-labelledby="spec-selector-heading"
    >
      <div className="max-w-[720px]">
        <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 tracking-wide mb-3">
          Specify Your Requirements
        </span>
        <h2
          id="spec-selector-heading"
          className="text-2xl font-bold text-[#0F2744]"
        >
          Tell us what you need — get a more accurate quote
        </h2>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          Fill in what you already know. Every field is optional, but the more
          you specify, the less we have to ask back — your quotation arrives
          within 24 hours, and sample fees are credited toward your first bulk
          order.
        </p>
      </div>

      {/* Mobile: collapsible. Desktop: always open. */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-6 w-full flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-[#0F2744] lg:hidden"
        aria-expanded={open}
        aria-controls="spec-selector-body"
      >
        <span>
          Specification fields
          {filledCount > 0 && (
            <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
              {filledCount} filled
            </span>
          )}
        </span>
        <span className="text-gray-400">{open ? "−" : "+"}</span>
      </button>

      <div
        id="spec-selector-body"
        className={`${open ? "block" : "hidden"} lg:block mt-4`}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map(renderField)}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-xl bg-gray-50 border border-gray-200 p-4">
          <p className="text-xs text-gray-500 flex-1">
            {SUPPLY_POLICY.moq.chip} · {SUPPLY_POLICY.leadTime.chip} ·{" "}
            {SUPPLY_POLICY.quote.chip}
          </p>
          <button
            type="button"
            onClick={handleContinue}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#0F2744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm"
          >
            Continue with these specs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
