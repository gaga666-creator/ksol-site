"use client";

import Link from "next/link";
import { externalLinks } from "@/lib/ksol";
import { KsolLogo } from "./KsolLogo";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#050505]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <KsolLogo size={32} />
          <div>
            <p className="text-sm font-semibold text-white">KSOL</p>
            <p className="text-xs text-neutral-400">
              {t("SOL-referenced digital asset")}
            </p>
          </div>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-neutral-300 sm:gap-6">
          <Link className="transition hover:text-white" href="/docs">
            {t("Docs")}
          </Link>
          <a
            className="hidden transition hover:text-white sm:inline"
            href={externalLinks[0].href}
            target="_blank"
            rel="noreferrer"
          >
            Solscan
          </a>
          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
}
