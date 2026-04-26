import Link from "next/link";
import { externalLinks } from "@/lib/ksol";
import { KsolLogo } from "./KsolLogo";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#050505]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <KsolLogo size={40} />
          <div>
            <p className="text-sm font-semibold text-white">KSOL</p>
            <p className="text-xs text-neutral-400">SOL-Pegged Storage Asset</p>
          </div>
        </Link>
        <nav className="flex items-center gap-2 text-sm text-neutral-300 sm:gap-5">
          <Link className="transition hover:text-white" href="/docs">
            Docs
          </Link>
          <a
            className="hidden transition hover:text-white sm:inline"
            href={externalLinks[0].href}
            target="_blank"
            rel="noreferrer"
          >
            Solscan
          </a>
        </nav>
      </div>
    </header>
  );
}
