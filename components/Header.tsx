"use client";

import Link from "next/link";
import { okxDexHref } from "@/lib/ksol";
import { KsolLogo } from "./KsolLogo";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Market", href: "#market" },
  { label: "Token", href: "#token" },
  { label: "Notice", href: "#notice" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#050505]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <KsolLogo size={32} />
          <div>
            <p className="text-sm font-semibold text-white">KSOL</p>
            <p className="text-xs text-neutral-400">
              {t("Official asset info")}
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-10 text-sm text-neutral-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="transition hover:text-white"
              href={item.href}
            >
              {t(item.label)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={okxDexHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-neutral-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur transition duration-200 hover:bg-white/[0.1] hover:text-white"
          >
            {t("Market")}
          </a>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
