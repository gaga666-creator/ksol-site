import Link from "next/link";
import { CopyButton } from "@/components/CopyButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { KsolLogo } from "@/components/KsolLogo";
import { externalLinks, tokenMintAddress, transparencyItems } from "@/lib/ksol";

const sections = [
  {
    title: "What is KSOL",
    body: "KSOL is not designed as a speculative trading asset. It is a SOL-pegged digital asset used for storage and internal value transfer.",
  },
  {
    title: "Peg Mechanism",
    body: "KSOL aims to maintain a 1:1 relationship with SOL through reserve management, controlled issuance, and official redemption.",
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
        <section className="border-b border-white/10 bg-[radial-gradient(circle_at_12%_0%,rgba(245,245,245,0.14),transparent_28%),linear-gradient(180deg,#050505,#111111)]">
          <div className="mx-auto grid min-h-[620px] max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-16">
            <div>
              <div className="mb-8 flex items-center gap-5">
                <KsolLogo size={80} />
                <p className="text-sm font-semibold uppercase text-neutral-400">
                  Solana Storage Asset
                </p>
              </div>
              <h1 className="text-6xl font-semibold text-white sm:text-7xl">
                KSOL
              </h1>
              <p className="mt-4 text-2xl text-neutral-200">
                SOL-Pegged Storage Asset
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
                KSOL is designed for storage and internal value transfer,
                aiming to maintain a 1:1 relationship with SOL.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/docs"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/80 bg-neutral-100 px-6 text-sm font-semibold text-black transition hover:bg-white hover:shadow-[0_14px_32px_rgba(0,0,0,0.24)]"
                >
                  View Docs
                </Link>
                <a
                  href={externalLinks[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 text-sm font-semibold text-neutral-100 backdrop-blur transition hover:border-white/30 hover:bg-white/[0.07] hover:shadow-[0_14px_32px_rgba(0,0,0,0.24)]"
                >
                  View on Solscan
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/[0.055] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl">
              <p className="text-sm font-medium uppercase text-neutral-500">
                Price Reference
              </p>
              <div className="mt-8 border-y border-white/10 py-8">
                <p className="text-4xl font-semibold text-white">
                  1 KSOL ≈ 1 SOL
                </p>
                <p className="mt-4 text-sm leading-6 text-neutral-400">
                  KSOL/USD follows SOL/USD reference price.
                </p>
              </div>
              <p className="mt-5 text-xs leading-5 text-neutral-500">
                Static placeholder. Future versions may connect to an official
                reference API.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-5 px-5 py-16 md:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.20)] backdrop-blur-xl transition hover:border-white/20 hover:shadow-[0_22px_54px_rgba(0,0,0,0.26)]"
            >
              <h2 className="text-xl font-semibold text-white">
                {section.title}
              </h2>
              <p className="mt-4 leading-7 text-neutral-400">{section.body}</p>
            </article>
          ))}
        </section>

        <section className="border-y border-white/10 bg-black/80">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <SectionTitle eyebrow="Public Information" title="Transparency" />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {transparencyItems.map((item) => (
                <article
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-xl transition hover:border-white/20 hover:shadow-[0_22px_54px_rgba(0,0,0,0.24)]"
                >
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

        <section className="mx-auto max-w-6xl px-5 py-16">
          <SectionTitle eyebrow="Security" title="Security / Transparency" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {securityItems.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-xl transition hover:border-white/20 hover:shadow-[0_22px_54px_rgba(0,0,0,0.24)]"
              >
                <p className="text-sm text-neutral-500">{item.title}</p>
                <p className="mt-3 leading-7 text-neutral-300">{item.body}</p>
                {item.details ? (
                  <div className="mt-5 grid gap-2 text-sm text-neutral-400">
                    {item.details.map((detail) => (
                      <p
                        key={detail}
                        className="rounded-full border border-white/10 bg-black/25 px-4 py-2"
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
                    className="mt-5 inline-flex min-h-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-5 text-sm font-semibold text-neutral-100 backdrop-blur transition hover:border-white/30 hover:bg-white/[0.07] hover:shadow-[0_12px_28px_rgba(0,0,0,0.24)]"
                  >
                    {item.linkLabel}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <SectionTitle eyebrow="Reference Access" title="External Links" />
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {externalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.065] hover:shadow-[0_22px_54px_rgba(0,0,0,0.24)]"
              >
                <p className="font-semibold text-white">{link.name}</p>
                <p className="mt-3 text-sm leading-6 text-neutral-500 group-hover:text-neutral-300">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-6xl px-5 py-12">
            <div className="rounded-3xl border border-white/10 bg-black/35 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-xl">
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
