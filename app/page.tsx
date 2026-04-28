"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { KsolLogo } from "@/components/KsolLogo";
import { PriceReferencePanel } from "@/components/PriceReferencePanel";
import { useLanguage } from "@/components/LanguageProvider";
import { externalLinks } from "@/lib/ksol";

const marketReferences = [
  {
    label: "OKX DEX",
    description: "Third-party DEX interface for swap routing.",
  },
  {
    label: "CoinMarketCap",
    description: "External market reference and token display.",
  },
  {
    label: "Birdeye",
    description: "Market analytics and token activity reference.",
  },
  {
    label: "Dexscreener",
    description: "DEX pair display and trading surface.",
  },
];

const aboutBlocks = [
  {
    title: "What is KSOL",
    body: "KSOL is an independent SPL token on Solana. It is designed as a reference-based unit for storage representation and internal transfer. It does not represent native SOL and should not be treated as SOL itself.",
  },
  {
    title: "How to verify",
    body: "Use the mint address published on this site and verify through Solscan and other trusted explorers.",
  },
  {
    title: "Why warnings appear",
    body: "Some platforms may show caution labels based on token name similarity, liquidity, trading history, metadata, or their own risk models. Always verify the mint address before interacting.",
  },
  {
    title: "Price and liquidity",
    body: "KSOL market price is determined by external liquidity and trading activity. This website does not provide assurance for price, liquidity, or third-party platform display status.",
  },
];

const surfaceClass =
  "rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.025] to-white/[0.012] shadow-[0_24px_70px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl";

export default function Home() {
  const { t } = useLanguage();
  const marketLinkByLabel = new Map(
    externalLinks.map((link) => [link.label, link.href]),
  );

  return (
    <>
      <Header />

      <main className="bg-[#050505] text-neutral-100">
        <section
          id="overview"
          className="bg-[radial-gradient(circle_at_18%_8%,rgba(255,255,255,0.14),transparent_24%),radial-gradient(circle_at_74%_20%,rgba(255,255,255,0.07),transparent_26%),linear-gradient(180deg,#050505,#101010_70%,#050505)]"
        >
          <div className="mx-auto grid min-h-[680px] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[56fr_44fr]">
            <div className="max-w-2xl">
              <KsolLogo size={80} />
              <h1 className="mt-8 text-7xl font-bold leading-none tracking-tight text-white drop-shadow-[0_18px_44px_rgba(0,0,0,0.34)] sm:text-8xl">
                KSOL
              </h1>
              <p className="mt-5 text-2xl font-light text-neutral-200">
                {t("An independent token asset on Solana.")}
              </p>
              <p className="mt-7 max-w-xl text-base leading-8 text-neutral-400">
                {t(
                  "KSOL is designed as a transparent, verifiable on-chain asset with public explorer access and third-party market displays. Market data may vary depending on liquidity, trading activity, and external indexers.",
                )}
              </p>
            </div>

            <PriceReferencePanel />
          </div>
        </section>

        <section
          id="market"
          className="mx-auto max-w-6xl border-b border-white/[0.06] px-6 py-16"
        >
          <div className="mb-8 flex flex-col gap-3">
            <h2 className="text-4xl font-semibold text-white">
              {t("Market")}
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-neutral-500">
              {t(
                "Use external tools to verify KSOL's on-chain data and market activity. These platforms provide independent market displays and do not imply endorsement.",
              )}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {marketReferences.map((item) => (
              <article
                key={item.label}
                className={`${surfaceClass} group min-h-44 p-6`}
              >
                <div className="flex h-full min-h-32 flex-col">
                  <h3 className="text-xl font-semibold text-white">
                    {item.label}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-neutral-400">
                    {t(item.description)}
                  </p>
                  <a
                    href={marketLinkByLabel.get(item.label) ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${item.label} ${t("Open")}`}
                    className="ml-auto mt-auto inline-flex text-2xl leading-none text-neutral-300 opacity-70 transition duration-200 hover:translate-x-0.5 hover:-translate-y-0.5 hover:opacity-100"
                  >
                    →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
          <div className={`${surfaceClass} p-6 sm:p-8`}>
            <div className="mb-8 flex flex-col gap-3">
              <p className="text-sm font-medium tracking-[0.18em] text-neutral-500">
                {t("ABOUT KSOL")}
              </p>
              <h2 className="text-4xl font-semibold text-white">
                {t("ABOUT KSOL")}
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {aboutBlocks.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl bg-black/25 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {t(item.title)}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-400">
                    {t(item.body)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
