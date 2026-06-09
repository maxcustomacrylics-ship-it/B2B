"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/components/admin/Toast";
import { MessageSquare, Save } from "lucide-react";

export default function AdminMessagesPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<Record<string, unknown>>({});
  const [jsonText, setJsonText] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    try {
      const res = await fetch("/api/admin/messages");
      const data = await res.json();
      setMessages(data);
      setJsonText(JSON.stringify(data, null, 2));
    } catch {
      showToast("Failed to load site messages", "error");
    } finally {
      setLoading(false);
    }
  }

  function handleJsonChange(value: string) {
    setJsonText(value);
    setError(null);
    try {
      const parsed = JSON.parse(value);
      setMessages(parsed);
    } catch {
      setError("Invalid JSON");
    }
  }

  async function handleSave() {
    if (error) {
      showToast("Fix JSON errors before saving", "error");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/admin/messages", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: jsonText,
      });
      if (res.ok) {
        showToast("Site messages saved");
      } else {
        showToast("Failed to save site messages", "error");
      }
    } catch {
      showToast("Failed to save site messages", "error");
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
          <h1 className="text-2xl font-bold text-gray-900">Site Copy</h1>
          <p className="mt-1 text-sm text-gray-500">
            Edit the site copy as raw JSON. Be careful with the structure.
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save className="h-4 w-4" />
          {saving ? "Saving..." : "Save"}
        </button>
      </div>

      {Object.keys(messages).length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
          <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-3 text-sm font-semibold text-gray-900">No site messages</h3>
          <p className="mt-1 text-sm text-gray-500">No localized messages have been added yet.</p>
        </div>
      ) : (
        <div className="mt-8 rounded-xl bg-white shadow-sm border border-gray-200 p-6">
          <textarea
            value={jsonText}
            onChange={(e) => handleJsonChange(e.target.value)}
            rows={30}
            className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm font-mono text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            spellCheck={false}
          />
          {error && (
            <p className="mt-2 text-sm text-red-600">{error}</p>
          )}
        </div>
      )}
    </div>
  );
}
