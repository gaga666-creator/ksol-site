import Link from "next/link";
import { externalLinks } from "@/lib/ksol";
import { KsolLogo } from "./KsolLogo";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1fr_auto]">
        <div className="flex gap-3">
          <KsolLogo size={32} />
          <div>
            <p className="font-semibold text-white">KSOL</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-400">
              KSOL is a SOL-pegged storage asset for storage and internal value
              transfer. It does not represent an income, reward, or appreciation
              guarantee.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-neutral-400 md:justify-end">
          <Link className="transition hover:text-white" href="/docs">
            Docs
          </Link>
          {externalLinks.map((link) => (
            <a
              key={link.name}
              className="transition hover:text-white"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
