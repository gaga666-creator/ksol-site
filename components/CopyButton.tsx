"use client";

import { useState } from "react";

type CopyButtonProps = {
  value: string;
};

export function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copyValue() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={copyValue}
      className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-neutral-200 backdrop-blur transition hover:border-white/30 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_10px_24px_rgba(0,0,0,0.22)]"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
