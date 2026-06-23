"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

type InquiryFormProps = {
  productName?: string;
};

export default function InquiryForm({ productName }: InquiryFormProps) {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      productInterest: productName || formData.get("productInterest"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        setErrorMsg("");
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
      <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
        <div className="text-3xl mb-2">✓</div>
        <p className="text-green-800 font-medium">{t("success")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input label={t("name")} name="name" placeholder={t("namePlaceholder")} required />
      <Input label={t("email")} name="email" type="email" placeholder={t("emailPlaceholder")} required />
      <Input label={t("company")} name="company" placeholder={t("companyPlaceholder")} required />
      <Input label={t("phone")} name="phone" type="tel" placeholder={t("phonePlaceholder")} />
      {!productName && (
        <Input label={t("productInterest")} name="productInterest" placeholder={t("productInterestPlaceholder")} />
      )}
      <Textarea label={t("message")} name="message" placeholder={t("messagePlaceholder")} required />
      {status === "error" && (
        <p className="text-sm text-red-500">{errorMsg || t("error")}</p>
      )}
      <Button type="submit" variant="primary" disabled={loading} className="w-full">
        {loading ? t("submitting") : t("submit")}
      </Button>
    </form>
  );
}
