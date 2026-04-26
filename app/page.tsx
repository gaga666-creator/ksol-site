import Link from "next/link";
import { CopyButton } from "@/components/CopyButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { KsolLogo } from "@/components/KsolLogo";
import { LivePriceModule } from "@/components/LivePriceModule";
import { externalLinks, tokenMintAddress, transparencyItems } from "@/lib/ksol";

const sections = [
  {
    label: "Protocol Overview",
    title: "What is KSOL",
    body: "KSOL is not designed as a speculative trading asset. It is a SOL-pegged digital asset used for storage and internal value transfer.",
    micro: "Model-based representation",
  },
  {
    label: "Reserve Model",
    title: "Peg Mechanism",
    body: "KSOL aims to maintain a 1:1 relationship with SOL through reserve management, controlled issuance, and official redemption.",
    micro: "Internal reference mechanism",
  },
];

const securityItems = [
  {
    title: "Liquidity Status",
    body: "Liquidity is locked / not withdrawable",
  },
  {
    title: "Contract",
    body: "Verify the KSOL token mint and token account data on Solscan.",
    linkLabel: "View on Solscan",
    href: externalLinks[0].href,
  },
  {
    title: "Risk Notice",
    body: "KSOL is not official SOL. It is an independent SOL-pegged storage asset and should be verified by token mint address before use.",
  },
  {
    title: "Transparency",
    body: "LP control and mint authority status should be verified through official KSOL disclosures and Solscan token authority records.",
    details: [
      "LP control: official KSOL operations",
      "Mint authority: verify on Solscan",
    ],
  },
];

const cardClass =
  "system-float rounded-3xl bg-gradient-to-br from-white/[0.07] via-white/[0.035] to-white/[0.02] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_58px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.12)]";

const pillLinkClass =
  "inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-200";

const statusItems = [
  { label: "Last updated", value: "April 26, 2026" },
  { label: "Reference model", value: "v1.0" },
  { label: "Network", value: "Solana" },
];

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase text-neutral-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#050505] text-neutral-100">
        <section className="border-b border-white/[0.06] bg-[radial-gradient(circle_at_12%_0%,rgba(245,245,245,0.10),transparent_30%),linear-gradient(180deg,#050505,#101010)]">
          <div className="mx-auto grid min-h-[600px] max-w-6xl items-center gap-12 px-6 py-14 md:grid-cols-[1.08fr_0.92fr] md:py-20">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <KsolLogo size={64} />
                <p className="text-sm font-semibold uppercase text-neutral-400">
                  Solana Storage Asset
                </p>
              </div>
              <h1 className="text-6xl font-bold leading-none text-white sm:text-7xl">
                KSOL
              </h1>
              <p className="mt-4 text-2xl text-neutral-200">
                SOL-Pegged Storage Asset
              </p>
              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-400">
                KSOL is designed for storage and internal value transfer,
                aiming to maintain a 1:1 relationship with SOL.
              </p>
              <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
                {statusItems.map((item) => (
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
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/docs"
                  className={`${pillLinkClass} bg-neutral-100 text-black shadow-[0_14px_30px_rgba(0,0,0,0.22)] hover:bg-white hover:shadow-[0_18px_38px_rgba(0,0,0,0.28)]`}
                >
                  View Docs
                </Link>
                <a
                  href={externalLinks[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${pillLinkClass} bg-white/[0.055] text-neutral-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur hover:bg-white/[0.09] hover:shadow-[0_14px_30px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.12)]`}
                >
                  View on Solscan
                </a>
              </div>
            </div>

            <LivePriceModule />
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-5 px-6 py-20 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className={cardClass}>
              <p className="text-xs font-semibold uppercase text-neutral-500">
                {section.label}
              </p>
              <h2 className="text-xl font-semibold text-white">
                {section.title}
              </h2>
              <p className="mt-4 leading-7 text-neutral-400">{section.body}</p>
              <p className="mt-6 text-xs text-neutral-500">{section.micro}</p>
            </article>
          ))}
        </section>

        <section className="bg-black/55">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <SectionTitle eyebrow="Asset Structure" title="Transparency" />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {transparencyItems.map((item) => (
                <article key={item.label} className={cardClass}>
                  <p className="text-sm text-neutral-500">{item.label}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <p className="min-w-0 break-words font-mono text-sm text-neutral-100">
                      {item.value}
                    </p>
                    {item.isAddress ? (
                      <CopyButton value={tokenMintAddress} />
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <SectionTitle eyebrow="Control Framework" title="Security / Transparency" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {securityItems.map((item) => (
              <article key={item.title} className={cardClass}>
                <p className="text-sm text-neutral-500">{item.title}</p>
                <p className="mt-3 leading-7 text-neutral-300">{item.body}</p>
                {item.details ? (
                  <div className="mt-5 grid gap-2 text-sm text-neutral-400">
                    {item.details.map((detail) => (
                      <p
                        key={detail}
                        className="rounded-full bg-black/25 px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                ) : null}
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`${pillLinkClass} mt-5 min-h-10 bg-white/[0.055] px-5 text-neutral-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur hover:bg-white/[0.09] hover:shadow-[0_12px_28px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.12)]`}
                  >
                    {item.linkLabel}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <SectionTitle eyebrow="Reference Access" title="External Links" />
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {externalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`group ${cardClass} block`}
              >
                <p className="font-semibold text-white">{link.name}</p>
                <p className="mt-3 text-sm leading-6 text-neutral-500 group-hover:text-neutral-300">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className={cardClass}>
              <h2 className="text-xl font-semibold text-white">Risk Notice</h2>
              <p className="mt-4 max-w-4xl leading-7 text-neutral-400">
                KSOL may display third-party wallet or DEX risk warnings due to
                external liquidity, market depth, or data-source limitations.
                Official reference should be based on the KSOL website and
                redemption process.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
