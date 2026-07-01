"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";

type InquiryFormProps = {
  productName?: string;
};

type FieldErrors = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

function validate(data: Record<string, string>, t: (k: string) => string): FieldErrors {
  const errors: FieldErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters)";
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!data.company || data.company.trim().length < 1) {
    errors.company = "Please enter your company name";
  }
  if (!data.message || data.message.trim().length < 5) {
    errors.message = `Message must be at least 5 characters (${data.message?.length || 0}/5)`;
  }

  return errors;
}

export default function InquiryForm({ productName }: InquiryFormProps) {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [charCount, setCharCount] = useState(0);

  function handleBlur(field: string) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function handleChange(field: string, value: string) {
    if (field === "message") setCharCount(value.length);
    // Clear field error on typing
    if (fieldErrors[field as keyof FieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    setErrorMsg("");
    if (status === "error") setStatus("idle");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((v, k) => { data[k] = v.toString(); });

    // Client-side validation
    const errors = validate(data, t);
    setFieldErrors(errors);
    setTouched({ name: true, email: true, company: true, message: true });

    if (Object.keys(errors).length > 0) return;

    setLoading(true);
    setStatus("idle");
    setErrorMsg("");

    // Build FormData for file upload support
    const payload = new FormData();
    payload.append("name", data.name);
    payload.append("email", data.email);
    payload.append("company", data.company);
    payload.append("phone", data.phone || "");
    payload.append("productInterest", productName || data.productInterest || "");
    payload.append("message", data.message);

    const fileInput = (e.target as HTMLFormElement).querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput?.files?.[0]) {
      payload.append("drawing", fileInput.files[0]);
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      if (res.ok) {
        setStatus("success");
        setErrorMsg("");
        setFieldErrors({});
        setCharCount(0);
        (e.target as HTMLFormElement).reset();
      } else {
        const errData = await res.json().catch(() => ({}));
        const detail = errData?.error || errData?.details?.[0]?.message || t("error");
        setErrorMsg(detail);
        setStatus("error");
      }
    } catch {
      setStatus("error");
      setErrorMsg(t("error"));
    }

    setLoading(false);
  };

  if (status === "success") {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
        <div className="text-4xl mb-3">✓</div>
        <h3 className="text-lg font-semibold text-green-800">Message Sent!</h3>
        <p className="mt-2 text-sm text-green-700">{t("success")}</p>
      </div>
    );
  }

  const inputClass = (field: keyof FieldErrors) =>
    `block w-full rounded-lg border px-4 py-2.5 text-sm text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
      touched[field] && fieldErrors[field]
        ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
        : "border-gray-300 focus:border-primary-500 focus:ring-primary-500/20"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          {t("name")} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder={t("namePlaceholder")}
          className={inputClass("name")}
          onBlur={() => handleBlur("name")}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        {touched.name && fieldErrors.name && (
          <p className="mt-1 text-xs text-red-500">{fieldErrors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          {t("email")} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder={t("emailPlaceholder")}
          className={inputClass("email")}
          onBlur={() => handleBlur("email")}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        {touched.email && fieldErrors.email && (
          <p className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          {t("company")} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="company"
          placeholder={t("companyPlaceholder")}
          className={inputClass("company")}
          onBlur={() => handleBlur("company")}
          onChange={(e) => handleChange("company", e.target.value)}
        />
        {touched.company && fieldErrors.company && (
          <p className="mt-1 text-xs text-red-500">{fieldErrors.company}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          {t("phone")}
        </label>
        <input
          type="tel"
          name="phone"
          placeholder={t("phonePlaceholder")}
          className={inputClass("name")}
          onBlur={() => handleBlur("phone")}
        />
      </div>

      {/* Product Interest (only on contact page, not product page) */}
      {!productName && (
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            {t("productInterest")}
          </label>
          <input
            type="text"
            name="productInterest"
            placeholder={t("productInterestPlaceholder")}
            className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
        </div>
      )}

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          Project Description <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Describe your project requirements, quantities, timeline, material preferences..."
          className={`${inputClass("message")} resize-y`}
          onBlur={() => handleBlur("message")}
          onChange={(e) => handleChange("message", e.target.value)}
        />
        <div className="flex justify-between mt-1">
          {touched.message && fieldErrors.message ? (
            <p className="text-xs text-red-500">{fieldErrors.message}</p>
          ) : (
            <span />
          )}
          <span className={`text-xs ${charCount < 5 ? "text-gray-400" : "text-green-600"}`}>
            {charCount}/5 min
          </span>
        </div>
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          Upload Drawing / Design File
        </label>
        <div className="mt-1 flex items-center gap-3">
          <label className="inline-flex items-center gap-2 rounded-lg border-2 border-dashed border-gray-300 px-4 py-3 text-sm text-gray-500 hover:border-blue-400 hover:text-blue-600 cursor-pointer transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>
            Choose File
            <input type="file" name="drawing" accept=".pdf,.dwg,.dxf,.ai,.eps,.step,.iges,.stl,.jpg,.jpeg,.png,.webp" className="hidden" />
          </label>
          <span className="text-xs text-gray-400">PDF, DWG, DXF, AI, STEP, JPG, PNG (max 10MB)</span>
        </div>
      </div>

      {/* Global error */}
      {status === "error" && errorMsg && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-3">
          <p className="text-sm text-red-600">{errorMsg}</p>
        </div>
      )}

      <Button type="submit" variant="primary" disabled={loading} className="w-full">
        {loading ? t("submitting") : t("submit")}
      </Button>
    </form>
  );
}
