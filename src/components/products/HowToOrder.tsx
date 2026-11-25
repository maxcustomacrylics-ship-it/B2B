import Link from "next/link";
import { SUPPLY_POLICY } from "@/lib/supply-policy";

/**
 * "How to Order / What to Provide".
 *
 * This is the block most often missing from custom-manufacturing sites, and
 * the one that pays for itself: it tells the buyer exactly what to prepare,
 * which cuts both the buyer's uncertainty and the number of clarification
 * emails we send.
 */
const STEPS = [
  {
    step: "01",
    title: "Choose your configuration",
    detail:
      "Fill in the specification fields above, or tell us your requirements in the enquiry form. Every field is optional — send what you know.",
  },
  {
    step: "02",
    title: "Prepare your files",
    detail:
      "Send AI, PDF, SVG, DXF, DWG, STEP or IGES for vector artwork, or a photo with dimensions marked. 300 DPI, CMYK, fonts converted to outlines, with die-lines and hole positions dimensioned.",
  },
  {
    step: "03",
    title: "Confirm the specification",
    detail:
      "We review your file against your stated requirements and send a quotation with material, thickness, finish, quantity pricing and lead time — usually within 24 hours.",
  },
  {
    step: "04",
    title: "Approve and produce",
    detail:
      "Pay the deposit, we produce a pre-production sample for your approval, then run the batch. You approve the sample before mass production begins.",
  },
];

export default function HowToOrder({ productName }: { productName: string }) {
  return (
    <section className="mt-16" aria-labelledby="how-to-order-heading">
      <h2 id="how-to-order-heading" className="text-2xl font-bold text-[#0F2744] mb-2">
        How to Order Your {productName}
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Four steps from enquiry to delivery. Tell us what you have — we&apos;ll
        tell you what we still need.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s) => (
          <div
            key={s.step}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <span className="text-xs font-bold tracking-wider text-blue-600">
              {s.step}
            </span>
            <h3 className="mt-1.5 text-sm font-semibold text-[#0F2744]">
              {s.title}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
              {s.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
        <h3 className="text-sm font-semibold text-[#0F2744] mb-2">
          What to include — minimum vs. complete
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1.5">
              Minimum to get a quotation
            </p>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>• Overall size (W × H × D, mm)</li>
              <li>• Quantity</li>
              <li>• Material and finish preference</li>
              <li>• Your email address</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1.5">
              For a precise, faster quote
            </p>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>• Drawing or artwork file (AI / PDF / STEP / DXF)</li>
              <li>• ID or OD, and wall thickness for boxes</li>
              <li>• Logo method and position</li>
              <li>• Pantone or colour reference</li>
              <li>• Packaging, destination and Incoterms</li>
              <li>• Target arrival date</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <a
            href="#product-inquiry"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F2744] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1a3a5c] transition-colors shadow-sm"
          >
            Start your enquiry
          </a>
          <Link
            href="/contact"
            className="text-sm font-medium text-[#0F2744] hover:text-blue-700 transition-colors"
          >
            Or talk to an engineer →
          </Link>
          <p className="text-xs text-gray-500 sm:ml-auto">
            {SUPPLY_POLICY.quote.full}
          </p>
        </div>
      </div>
    </section>
  );
}
