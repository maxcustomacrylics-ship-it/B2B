import { SUPPLY_POLICY } from "@/lib/supply-policy";

/**
 * Compliance block.
 *
 * ISO 9001 is a quality-management-system certificate — it does not test
 * chemical composition, so it does not cover RoHS or REACH. Saying that
 * plainly reads as competence; stacking unbacked badges reads as noise.
 *
 * The certificate number and validity date are only rendered when the site
 * has them configured. An empty field renders nothing rather than a blank
 * label, so we never publish a certificate we cannot substantiate.
 */
export default function ComplianceBlock({
  certNumber,
  certValidUntil,
}: {
  certNumber?: string;
  certValidUntil?: string;
}) {
  const hasCertDetails = Boolean(certNumber || certValidUntil);

  return (
    <section className="mt-16" aria-labelledby="compliance-heading">
      <h2 id="compliance-heading" className="text-2xl font-bold text-[#0F2744] mb-2">
        Quality &amp; Compliance
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        What our certifications cover — and what they don&apos;t.
      </p>

      <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
        <div className="border-b border-gray-100 p-5">
          <h3 className="text-sm font-semibold text-[#0F2744] mb-1.5">
            Quality management system
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {SUPPLY_POLICY.certification.full}
          </p>
          {hasCertDetails && (
            <dl className="mt-3 flex flex-wrap gap-x-8 gap-y-1 text-xs">
              {certNumber && (
                <div className="flex gap-2">
                  <dt className="text-gray-400">Certificate no.</dt>
                  <dd className="font-medium text-[#0F2744]">{certNumber}</dd>
                </div>
              )}
              {certValidUntil && (
                <div className="flex gap-2">
                  <dt className="text-gray-400">Valid until</dt>
                  <dd className="font-medium text-[#0F2744]">{certValidUntil}</dd>
                </div>
              )}
            </dl>
          )}
        </div>

        <div className="p-5">
          <h3 className="text-sm font-semibold text-[#0F2744] mb-1.5">
            Material compliance
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            ISO 9001 certifies the management system, not the chemical
            composition of a given sheet — it does not cover RoHS or REACH.
            Material declarations (RoHS, REACH SVHC screening, SDS and TDS) are
            issued per grade and are available on request. Tell us the
            destination market and we&apos;ll send the documents that apply.
          </p>
        </div>

        <div className="border-t border-gray-100 bg-gray-50 p-5">
          <h3 className="text-sm font-semibold text-[#0F2744] mb-1.5">
            Batch-level documentation
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Third-party test reports, certificates of conformity and inspection
            records can be arranged per batch for orders that require them.
            Mention the requirement in your enquiry and we&apos;ll quote for it.
          </p>
        </div>
      </div>
    </section>
  );
}
