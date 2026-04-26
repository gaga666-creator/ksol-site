import { CopyButton } from "@/components/CopyButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { externalLinks, tokenMintAddress } from "@/lib/ksol";

const docsSections = [
  {
    title: "What is KSOL",
    body: "KSOL is a SOL-pegged digital asset designed for storage and internal value transfer. Its intended reference relationship is 1 KSOL to approximately 1 SOL. KSOL is not positioned as a speculative trading asset and does not provide any income, reward, or appreciation guarantee.",
  },
  {
    title: "Token Information",
    body: "KSOL is issued on Solana. The official token mint address should be used when checking explorers, wallets, routing interfaces, or third-party data providers.",
    address: true,
  },
  {
    title: "Peg Mechanism",
    body: "KSOL aims to maintain a 1:1 relationship with SOL through reserve management, controlled issuance, and official redemption. Supply should be managed in relation to available reserves and authorized operational requirements.",
  },
  {
    title: "Redemption Process",
    body: "Official redemption is the primary reference process for converting KSOL in relation to SOL. Users should follow the official website or support channel for current redemption instructions, eligibility requirements, timing, and operational limits.",
  },
  {
    title: "Liquidity and Price Display",
    body: "Third-party wallets, DEX interfaces, and market data sites may display prices based on external liquidity, route depth, or available data sources. KSOL/USD reference display is expected to follow the SOL/USD reference price, subject to official implementation.",
  },
  {
    title: "Risk Notice",
    body: "KSOL may display third-party wallet or DEX risk warnings due to external liquidity, market depth, or data-source limitations. Users should confirm the token mint address and refer to the KSOL website and redemption process for official information.",
  },
  {
    title: "Contact / Support",
    body: "For support, redemption questions, or verification requests, use official KSOL communication channels. Do not rely on unofficial direct messages or unverified links when handling token transfers.",
  },
];

const docsCardClass =
  "system-float rounded-3xl bg-gradient-to-br from-white/[0.07] via-white/[0.035] to-white/[0.02] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_58px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.12)]";

const docsPillClass =
  "rounded-full bg-white/[0.055] px-4 py-2 text-sm font-medium text-neutral-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur transition duration-200 hover:bg-white/[0.09] hover:text-white hover:shadow-[0_12px_28px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.12)]";

const docsStatusItems = [
  { label: "Last updated", value: "April 26, 2026" },
  { label: "Reference model", value: "v1.0" },
  { label: "Document type", value: "Official reference" },
];

export default function DocsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#050505] text-neutral-100">
        <section className="border-b border-white/[0.06] bg-[radial-gradient(circle_at_12%_0%,rgba(245,245,245,0.1),transparent_28%),linear-gradient(180deg,#050505,#101010)]">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="text-xs font-semibold uppercase text-neutral-500">
              Official Reference
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              KSOL Documentation
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
              A conservative overview of KSOL token information, peg reference,
              redemption considerations, and third-party display risks.
            </p>
            <div className="mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
              {docsStatusItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-white/[0.035] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                >
                  <p className="text-[11px] uppercase text-neutral-500">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-neutral-200">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-5 px-6 py-14">
          {docsSections.map((section, index) => (
            <article
              key={section.title}
              className={`grid gap-5 md:grid-cols-[120px_1fr] ${docsCardClass}`}
            >
              <p className="font-mono text-sm text-neutral-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  {section.title}
                </h2>
                <p className="mt-4 leading-7 text-neutral-400">
                  {section.body}
                </p>
                {section.address ? (
                  <div className="mt-5 flex flex-col gap-3 rounded-3xl bg-black/35 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
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

        <section className="bg-black/55">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className={docsCardClass}>
              <h2 className="text-2xl font-semibold text-white">
                External References
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {externalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={docsPillClass}
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
