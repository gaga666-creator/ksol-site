"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

type CopyButtonProps = {
  value: string;
  label?: string;
  copiedLabel?: string;
  variant?: "text" | "icon";
};

export function CopyButton({
  value,
  label = "Copy",
  copiedLabel = "Copied",
  variant = "text",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  async function copyValue() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={copyValue}
        aria-label={t(copied ? copiedLabel : label)}
        title={t(copied ? copiedLabel : label)}
        className="inline-grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.055] text-xs font-semibold text-neutral-300 transition duration-200 hover:border-white/20 hover:bg-white/[0.1] hover:text-white"
      >
        {copied ? "✓" : "⧉"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={copyValue}
      className="rounded-full bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-neutral-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur transition duration-200 hover:bg-white/[0.1] hover:text-white hover:shadow-[0_10px_24px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.12)]"
    >
      {copied ? t(copiedLabel) : t(label)}
    </button>
  );
}
