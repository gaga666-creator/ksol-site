"use client";

import { KsolLogo } from "./KsolLogo";
import { externalLinks } from "@/lib/ksol";
import { useLanguage } from "./LanguageProvider";

export function PriceReferencePanel() {
  const { t } = useLanguage();
  const solscanLink =
    externalLinks.find((link) => link.label === "Solscan")?.href ?? "#";

  return (
    <div className="rounded-[34px] bg-gradient-to-br from-white/[0.095] via-white/[0.042] to-white/[0.018] p-7 shadow-[0_32px_98px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <KsolLogo size={40} />
        <div>
          <p className="text-sm font-medium text-neutral-300">
            {t("PRICE REFERENCE")}
          </p>
        </div>
      </div>
      <p className="mt-10 text-4xl font-semibold text-white sm:text-5xl">
        KSOL / SOL
      </p>
      <p className="mt-4 max-w-sm text-xs leading-5 text-neutral-500">
        {t("Pricing derived from external market activity.")}
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-black/25 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <p className="text-xs text-neutral-500">{t("Reference Pair")}</p>
          <p className="mt-1 font-mono text-sm text-neutral-200">SOL/USD</p>
        </div>
        <div className="rounded-2xl bg-black/25 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <p className="text-xs text-neutral-500">{t("Reference Target")}</p>
          <p className="mt-1 font-mono text-sm text-neutral-200">1.00</p>
        </div>
      </div>
      <a
        href={solscanLink}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex text-xs font-medium text-neutral-400 transition hover:text-white"
      >
        {`${t("View on Solscan")} \u2192`}
      </a>
    </div>
  );
}
