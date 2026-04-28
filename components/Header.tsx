"use client";

import Link from "next/link";
import { tokenMintAddress } from "@/lib/ksol";
import { CopyButton } from "./CopyButton";
import { KsolLogo } from "./KsolLogo";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#050505]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <KsolLogo size={32} />
          <div>
            <p className="text-sm font-semibold text-white">KSOL</p>
            <p className="text-xs text-neutral-400">Official asset info</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-neutral-300 md:flex">
          <a className="transition hover:text-white" href="#overview">
            Overview
          </a>
          <a className="transition hover:text-white" href="#market-references">
            Market References
          </a>
          <a className="transition hover:text-white" href="#token-info">
            Token Info
          </a>
          <a className="transition hover:text-white" href="#risk-notice">
            Risk Notice
          </a>
          <a className="transition hover:text-white" href="#faq">
            FAQ
          </a>
        </nav>
        <CopyButton
          value={tokenMintAddress}
          label="Verify Mint"
          copiedLabel="Mint copied"
        />
      </div>
    </header>
  );
}
