"use client";

import { useCallback, useState } from "react";
import SpecSelector, { type SpecValues } from "@/components/products/SpecSelector";
import InquiryForm from "@/components/products/InquiryForm";
import {
  SPEC_FIELD_LABELS,
  SPEC_KEY_ORDER,
} from "@/lib/spec-options";

type Props = {
  productName: string;
  productSlug: string;
  /** Per-product option overrides from the product record. */
  options?: Record<string, { value: string; label: string }[]>;
};

/**
 * Couples the specification selector with the inquiry form.
 *
 * The buyer fills in what they know in the selector, presses "Continue with
 * these specs", and the values are carried into the inquiry form as a
 * structured summary — so nobody has to retype a specification, and the
 * enquiry email arrives with the full requirements attached.
 */
export default function ProductInquiry({ productName, productSlug, options }: Props) {
  const [specs, setSpecs] = useState<SpecValues>({});

  const handleContinue = useCallback((values: SpecValues) => {
    setSpecs(values);
  }, []);

  // Build the human-readable summary that goes into the message body.
  const summary = SPEC_KEY_ORDER.map((key) => {
    const value = specs[key as keyof SpecValues];
    if (!value) return null;
    const label = SPEC_FIELD_LABELS[key] ?? key;
    // Resolve the option label where we have one, otherwise show the raw value.
    const field = (options?.[key] || []).find((o) => o.value === value);
    const display = field?.label ?? value;
    return `${label}: ${display}`;
  }).filter(Boolean) as string[];

  const summaryText = summary.length
    ? `Product: ${productName}\n\nRequested specifications:\n${summary
        .map((s) => `• ${s}`)
        .join("\n")}`
    : `Product: ${productName}`;

  return (
    <>
      <SpecSelector options={options} onContinue={handleContinue} />

      <section
        id="product-inquiry"
        className="mt-16 scroll-mt-24"
        aria-labelledby="product-inquiry-heading"
      >
        <div className="max-w-[720px] mb-6">
          <h2
            id="product-inquiry-heading"
            className="text-2xl font-bold text-[#0F2744]"
          >
            Request a Quote for {productName}
          </h2>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">
            Send us your requirements and we&apos;ll reply with a detailed
            quotation within 24 hours. Attach a drawing or reference image if
            you have one — it speeds things up considerably.
          </p>
        </div>

        {summary.length > 0 && (
          <div className="mb-5 rounded-xl border border-blue-200 bg-blue-50/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 mb-2">
              Your specifications will be sent with this enquiry
            </p>
            <ul className="space-y-1 text-sm text-[#0F2744]">
              {summary.map((line) => (
                <li key={line}>• {line}</li>
              ))}
            </ul>
          </div>
        )}

        <InquiryForm
          productName={productName}
          productSlug={productSlug}
          prefillMessage={summaryText}
          prefillSpecs={specs}
        />
      </section>
    </>
  );
}
