"use client";

import { CopyButton } from "@/components/CopyButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { KsolLogo } from "@/components/KsolLogo";
import { PriceReferencePanel } from "@/components/PriceReferencePanel";
import { externalLinks, tokenMintAddress } from "@/lib/ksol";

const overviewCards = [
  { title: "Network", value: "Solana" },
  { title: "Asset Type", value: "Independent SPL Token" },
  { title: "Market Data", value: "Third-party indexed" },
  { title: "Verification", value: "Mint address first" },
];

const marketReferences = [
  {
    label: "Solscan",
    description: "Verify token mint, holders, transfers, and on-chain metadata.",
    button: "Open Solscan",
  },
  {
    label: "Birdeye",
    description: "View third-party market analytics and token activity.",
    button: "Open Birdeye",
  },
  {
    label: "Dexscreener",
    description: "Check DEX pair data, liquidity, and trading activity.",
    button: "Open Dexscreener",
  },
  {
    label: "OKX DEX",
    description:
      "Third-party DEX interface reference. Warning labels may appear depending on OKX's internal risk and token similarity rules.",
    button: "Open OKX DEX",
  },
];

const tokenInfo = [
  { label: "Token Name", value: "KSOL" },
  { label: "Network", value: "Solana" },
  { label: "Token Standard", value: "SPL Token" },
  { label: "Mint Address", value: tokenMintAddress, isAddress: true },
  { label: "Decimals", value: "-" },
  { label: "Supply", value: "-" },
  { label: "Primary Verification", value: "Solscan" },
];

const verificationChecks = [
  "Mint address",
  "On-chain transfers",
  "Liquidity pair data",
  "Holder distribution",
  "Third-party market activity",
];

const faqs = [
  {
    question: "Is KSOL the same as SOL?",
    answer:
      "No. KSOL is an independent SPL token on Solana. It does not represent native SOL and should not be treated as SOL itself.",
    zh: "不是。KSOL 是 Solana 上的獨立 SPL Token，並不代表原生 SOL，也不應被視為 SOL 本身。",
  },
  {
    question: "Why do some platforms show a warning?",
    answer:
      "Third-party platforms may display caution labels based on token name similarity, liquidity, trading history, metadata, or their own risk models. Always verify the mint address before interacting.",
    zh: "第三方平台可能根據名稱相似度、流動性、交易紀錄、metadata 或內部風控模型顯示提示。互動前請務必確認 Mint Address。",
  },
  {
    question: "Where should I verify KSOL?",
    answer:
      "Use the mint address published on this site and verify through Solscan and other external market display tools.",
    zh: "請以本網站公布的 Mint Address 為主，並透過 Solscan 與其他外部市場查詢工具交叉驗證。",
  },
  {
    question: "Is the price assured?",
    answer:
      "No. KSOL market price is determined by external liquidity and trading activity. This website does not provide assurances for price, liquidity, or third-party platform display status.",
    zh: "不是。KSOL 的市場價格由外部流動性與交易活動決定，本網站不承諾價格、流動性或第三方平台顯示狀態。",
  },
];

const surfaceClass =
  "rounded-2xl border border-white/10 bg-[#101010] shadow-sm transition duration-200";

const pillClass =
  "inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-200";

export default function Home() {
  const solscanLink =
    externalLinks.find((link) => link.label === "Solscan")?.href ?? "#";
  const marketLinkByLabel = new Map(
    externalLinks.map((link) => [link.label, link.href]),
  );

  return (
    <>
      <div className="border-b border-white/10 bg-[#080808] text-neutral-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3 text-xs sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p>
              KSOL is an independent Solana token. Always verify the mint
              address before interacting.
            </p>
            <p className="mt-1 text-neutral-500">
              KSOL 是 Solana 上的獨立代幣資產，互動前請務必確認 Mint Address。
            </p>
          </div>
          <a
            href="#token-info"
            className="w-fit rounded-full border border-white/15 px-4 py-2 text-neutral-100 transition hover:bg-white/10"
          >
            View Token Info
          </a>
        </div>
      </div>

      <Header />

      <main className="bg-[#050505] text-neutral-100">
        <section
          id="overview"
          className="bg-[radial-gradient(circle_at_22%_8%,rgba(245,245,245,0.11),transparent_24%),linear-gradient(180deg,#050505,#101010_72%,#050505)]"
        >
          <div className="mx-auto grid min-h-[650px] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[56fr_44fr]">
            <div className="max-w-2xl">
              <KsolLogo size={104} />
              <h1 className="mt-8 text-7xl font-bold leading-none tracking-tight text-white drop-shadow-[0_18px_44px_rgba(0,0,0,0.34)] sm:text-8xl">
                KSOL
              </h1>
              <p className="mt-5 text-2xl font-light text-neutral-200">
                An independent token asset on Solana.
              </p>
              <p className="mt-7 max-w-xl text-base leading-8 text-neutral-400">
                KSOL is designed as a transparent, verifiable on-chain asset
                with public explorer access and third-party market displays.
                Market data may vary depending on liquidity, trading activity,
                and external indexers.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-500">
                KSOL 是 Solana
                上的獨立代幣資產，提供公開鏈上資訊與第三方市場查詢入口。市場資料可能因流動性、交易活躍度與外部索引器狀態而有所不同。
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={solscanLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`${pillClass} bg-neutral-100 text-black shadow-[0_14px_30px_rgba(0,0,0,0.22)] hover:bg-white hover:shadow-[0_18px_38px_rgba(0,0,0,0.28)]`}
                >
                  View on Solscan
                </a>
                <a
                  href="#market-references"
                  className={`${pillClass} bg-white/[0.055] text-neutral-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur hover:bg-white/[0.09] hover:shadow-[0_14px_30px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.12)]`}
                >
                  View Market References
                </a>
                <CopyButton value={tokenMintAddress} />
              </div>
            </div>

            <PriceReferencePanel />
          </div>
        </section>

        <section className="mx-auto max-w-6xl border-b border-white/[0.06] px-6 py-12">
          <div className="grid gap-4 md:grid-cols-4">
            {overviewCards.map((item) => (
              <article
                key={item.title}
                className={`${surfaceClass} p-6 hover:border-white/20`}
              >
                <p className="text-sm text-neutral-500">{item.title}</p>
                <p className="mt-4 text-lg font-semibold text-white">
                  {item.value}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="token-info"
          className="mx-auto max-w-6xl border-b border-white/[0.06] px-6 py-16"
        >
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-semibold text-white">
                Token Information
              </h2>
              <p className="mt-3 text-sm text-neutral-500">
                Primary verification should start with the mint address.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={solscanLink}
                target="_blank"
                rel="noreferrer"
                className={`${pillClass} border border-white/15 text-white hover:bg-white/10`}
              >
                View on Solscan
              </a>
              <CopyButton value={tokenMintAddress} />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#101010] shadow-sm">
            {tokenInfo.map((item) => (
              <div
                key={item.label}
                className="grid gap-3 border-b border-white/10 px-5 py-5 last:border-b-0 md:grid-cols-[210px_1fr] md:items-center"
              >
                <p className="text-sm text-neutral-500">{item.label}</p>
                <p
                  className={
                    item.isAddress
                      ? "break-all font-mono text-sm text-neutral-100"
                      : "text-sm font-medium text-neutral-100"
                  }
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="risk-notice"
          className="mx-auto max-w-6xl border-b border-white/[0.06] px-6 py-16"
        >
          <div className="rounded-2xl border border-amber-400/20 bg-amber-500/5 p-7 text-amber-100 shadow-sm">
            <h2 className="text-3xl font-semibold text-white">
              Market Data & Warning Notice
            </h2>
            <p className="mt-5 max-w-4xl leading-7 text-amber-100/80">
              KSOL may appear with caution or similarity warnings on some
              third-party wallets, DEX interfaces, or analytics platforms.
              These notices are generated by external systems and may be based
              on token name similarity, liquidity depth, trading history,
              metadata availability, or internal risk models.
            </p>
            <p className="mt-4 max-w-4xl leading-7 text-amber-100/80">
              KSOL does not claim to be SOL, does not represent native SOL, and
              should always be verified by its official mint address before any
              interaction.
            </p>
            <p className="mt-4 max-w-4xl leading-7 text-amber-100/80">
              The official mint address should be treated as the primary
              identifier for KSOL. Token name, logo, or ticker alone should not
              be used for verification.
            </p>
            <p className="mt-5 max-w-4xl leading-7 text-amber-100/70">
              部分第三方錢包、DEX
              或分析平台可能會顯示風險或相似名稱提示。這類提示通常由外部平台根據代幣名稱相似度、流動性深度、交易紀錄、metadata
              狀態或內部風控模型產生。
            </p>
            <p className="mt-4 max-w-4xl leading-7 text-amber-100/70">
              KSOL 並不宣稱等同於原生 SOL，也不代表 Solana
              的原生資產。使用前請以官方 Mint Address 作為主要驗證依據。
            </p>
            <p className="mt-4 max-w-4xl leading-7 text-amber-100/70">
              官方 Mint Address 應作為識別 KSOL
              的主要依據，不應只依靠名稱、Logo 或代號判斷。
            </p>
          </div>
        </section>

        <section
          id="market-references"
          className="mx-auto max-w-6xl border-b border-white/[0.06] px-6 py-16"
        >
          <div className="mb-8">
            <h2 className="mt-3 text-4xl font-semibold text-white">
              Verification & Market References
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-400">
              Use external tools to verify KSOL&apos;s on-chain data and market
              activity. These platforms provide independent market displays and
              do not imply endorsement.
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-neutral-500">
              使用外部工具查詢 KSOL
              的鏈上資料與市場活動。這些平台僅提供第三方市場顯示，不代表背書或保證。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {marketReferences.map((item) => (
              <article key={item.label} className={`${surfaceClass} p-6`}>
                <div className="flex min-h-40 flex-col justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.label}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                  <a
                    href={marketLinkByLabel.get(item.label) ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    {item.button}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl border-b border-white/[0.06] px-6 py-16">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-4xl font-semibold text-white">
                Liquidity Context
              </h2>
              <p className="mt-5 text-sm leading-7 text-neutral-400">
                KSOL market pricing is determined by external DEX liquidity
                pools, trading activity, and third-party data indexers.
                Displayed price, market cap, volume, and warnings may vary
                across platforms.
              </p>
              <p className="mt-4 text-sm leading-7 text-neutral-500">
                KSOL 的市場價格由外部 DEX
                流動性池、交易活動與第三方資料索引器決定。不同平台顯示的價格、市值、成交量與風險提示可能不同。
              </p>
            </div>
            <div className={`${surfaceClass} p-6`}>
              <p className="text-sm font-medium text-neutral-200">
                For long-term reliability, users should verify:
              </p>
              <ul className="mt-5 space-y-3 text-sm text-neutral-400">
                {verificationChecks.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-7 text-neutral-500">
                長期驗證時，建議使用者確認 Mint
                Address、鏈上轉帳紀錄、流動性池資料、持有人分布與第三方市場活動。
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8">
            <h2 className="text-4xl font-semibold text-white">FAQ</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <article key={item.question} className={`${surfaceClass} p-6`}>
                <h3 className="text-lg font-semibold text-white">
                  {item.question}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-400">
                  {item.answer}
                </p>
                <p className="mt-4 text-sm leading-7 text-neutral-500">
                  {item.zh}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
