import { CopyButton } from "@/components/CopyButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { KsolLogo } from "@/components/KsolLogo";
import { externalLinks, tokenMintAddress } from "@/lib/ksol";

const docsSections = [
  {
    title: "Overview",
    body: "KSOL is a SOL-referenced digital unit for internal transfer and storage representation.",
  },
  {
    title: "Token Structure",
    body: "KSOL is issued on Solana as an SPL token. Public explorer data should be used to verify token metadata, decimals, and supply.",
    address: true,
  },
  {
    title: "On-Chain Verification",
    body: "The token mint address is the primary identifier for wallet, explorer, route, and market display checks.",
  },
  {
    title: "Market Context",
    body: "KSOL does not define its own market price. Pricing emerges from external trading environments, where market depth and liquidity can affect price stability.",
  },
  {
    title: "Risk Considerations",
    body: "KSOL is a reference-based digital unit and does not guarantee price stability or asset backing. Market pricing may vary.",
  },
  {
    title: "Official Links",
    body: "Use official links to review explorer data, route availability, and market display information.",
  },
];

const docsSurface =
  "rounded-[32px] bg-gradient-to-br from-white/[0.055] via-white/[0.026] to-white/[0.012] shadow-[0_22px_64px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl";

export default function DocsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#050505] text-neutral-100">
        <section className="bg-[radial-gradient(circle_at_18%_8%,rgba(245,245,245,0.1),transparent_26%),linear-gradient(180deg,#050505,#101010_72%,#050505)]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <KsolLogo size={64} />
            <p className="mt-8 text-sm text-neutral-500">
              Official Documentation
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
              KSOL Documentation
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-400">
              Verification notes for KSOL token structure, on-chain references,
              market context, and official access points.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-4 px-6 py-16">
          {docsSections.map((section, index) => (
            <article
              key={section.title}
              className="grid gap-6 border-t border-white/[0.06] py-8 md:grid-cols-[84px_1fr]"
            >
              <p className="font-mono text-sm text-neutral-600">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  {section.title}
                </h2>
                <p className="mt-4 max-w-3xl leading-7 text-neutral-400">
                  {section.body}
                </p>
                {section.address ? (
                  <div className={`${docsSurface} mt-5 flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between`}>
                    <p className="break-words font-mono text-sm text-neutral-200">
                      {tokenMintAddress}
                    </p>
                    <CopyButton value={tokenMintAddress} />
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </section>

        <section className="bg-black/35">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className={`${docsSurface} p-6`}>
              <h2 className="text-2xl font-semibold text-white">
                Official Links
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {externalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white/[0.055] px-4 py-2 text-sm font-medium text-neutral-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-200 hover:bg-white/[0.09] hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
