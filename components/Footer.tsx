import { externalLinks } from "@/lib/ksol";
import { KsolLogo } from "./KsolLogo";

const resourceLinks = [
  { label: "Token Info", href: "#token-info" },
  { label: "Risk Notice", href: "#risk-notice" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.15fr_1.6fr]">
        <div className="flex gap-3">
          <KsolLogo size={32} />
          <div>
            <p className="font-semibold text-white">KSOL</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-400">
              Official information and verification entry point for the KSOL
              token asset on Solana.
            </p>
          </div>
        </div>
        <div className="grid gap-8 text-sm text-neutral-400 sm:grid-cols-3">
          <div>
            <p className="font-medium text-neutral-200">Market References</p>
            <div className="mt-4 flex flex-col gap-3">
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
          <div>
            <p className="font-medium text-neutral-200">Resources</p>
            <div className="mt-4 flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <a
                  key={link.label}
                  className="transition hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-medium text-neutral-200">Legal</p>
            <p className="mt-4 leading-6">
              Disclaimer: Third-party platforms are independent references and
              do not imply endorsement.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
