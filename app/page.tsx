import Link from "next/link";
import { CopyButton } from "@/components/CopyButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { KsolLogo } from "@/components/KsolLogo";
import { PriceReferencePanel } from "@/components/PriceReferencePanel";
import { externalLinks, tokenMintAddress } from "@/lib/ksol";

const trustItems = [
  { label: "Chain", value: "Solana" },
  { label: "Reference Asset", value: "SOL" },
  {
    label: "Mint Address",
    value: `${tokenMintAddress.slice(0, 4)}...${tokenMintAddress.slice(-4)}`,
    copy: true,
  },
  { label: "Liquidity Pair", value: "SOL/KSOL" },
];

const summaryItems = [
  { title: "Storage", body: "Reference-based unit" },
  { title: "Transfer", body: "Internal movement" },
  { title: "SOL Reference", body: "1:1 target model" },
];

const tokenInfo = [
  { label: "Chain", value: "Solana" },
  { label: "Mint Address", value: tokenMintAddress, copy: true, solscan: true },
  { label: "Token Standard", value: "SPL" },
  { label: "Decimals", value: "Explorer verified" },
  { label: "Supply", value: "Public explorer reference" },
  { label: "Liquidity Pair", value: "SOL/KSOL" },
];

const liquidityContext = [
  { label: "Primary Pair", value: "SOL / KSOL" },
  { label: "Market Source", value: "DEX-based pricing" },
];

const surfaceClass =
  "rounded-[34px] bg-gradient-to-br from-white/[0.06] via-white/[0.028] to-white/[0.012] shadow-[0_26px_80px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl";

const pillClass =
  "inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-200";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#050505] text-neutral-100">
        <section className="bg-[radial-gradient(circle_at_18%_8%,rgba(245,245,245,0.12),transparent_26%),linear-gradient(180deg,#050505,#101010_70%,#050505)]">
          <div className="mx-auto grid min-h-[720px] max-w-6xl items-center gap-16 px-6 py-16 md:grid-cols-[1.08fr_0.92fr]">
            <div>
              <KsolLogo size={104} />
              <h1 className="mt-9 text-7xl font-bold leading-none text-white drop-shadow-[0_18px_44px_rgba(0,0,0,0.34)] sm:text-8xl">
                KSOL
              </h1>
              <p className="mt-5 text-2xl font-light text-neutral-300">
                SOL-referenced digital asset
              </p>
              <p className="mt-7 max-w-md text-lg leading-8 text-neutral-400">
                KSOL is a SOL-referenced unit designed for internal transfer
                and storage representation.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/docs"
                  className={`${pillClass} bg-neutral-100 text-black shadow-[0_14px_30px_rgba(0,0,0,0.22)] hover:bg-white hover:shadow-[0_18px_38px_rgba(0,0,0,0.28)]`}
                >
                  View Docs
                </Link>
                <a
                  href={externalLinks[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${pillClass} bg-white/[0.055] text-neutral-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur hover:bg-white/[0.09] hover:shadow-[0_14px_30px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.12)]`}
                >
                  View on Solscan
                </a>
              </div>
            </div>

            <PriceReferencePanel />
          </div>
        </section>

        <section className="mx-auto max-w-6xl border-b border-white/[0.05] px-6 pb-14">
          <div className={`${surfaceClass} grid gap-0 p-4 md:grid-cols-4`}>
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl p-5 md:border-l md:border-white/[0.06] md:first:border-l-0"
              >
                <p className="text-xs text-neutral-500">{item.label}</p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <p className="font-medium text-neutral-100">{item.value}</p>
                  {item.copy ? <CopyButton value={tokenMintAddress} /> : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl border-b border-white/[0.05] px-6 py-14">
          <div className={`${surfaceClass} grid gap-3 p-4 md:grid-cols-3`}>
            {summaryItems.map((item) => (
              <div key={item.title} className="rounded-3xl bg-black/18 p-6">
                <h2 className="text-2xl font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-neutral-500">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl border-b border-white/[0.05] px-6 py-14">
          <div className="mb-8">
            <p className="text-sm text-neutral-500">Available on</p>
            <h2 className="mt-3 text-4xl font-semibold text-white">
              Market Presence
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-500">
              Pricing and liquidity are determined by external markets.
            </p>
          </div>
          <div className={`${surfaceClass} grid gap-3 p-4 md:grid-cols-4`}>
            {externalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-20 flex-col items-center justify-center rounded-3xl bg-black/24 px-5 text-center transition duration-200 hover:-translate-y-0.5 hover:bg-white/[0.07]"
              >
                <span className="text-sm font-semibold text-neutral-100">
                  {link.name}
                </span>
                <span className="mt-1 text-xs text-neutral-500">
                  {link.category}
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl border-b border-white/[0.05] px-6 py-14">
          <div className="mb-8">
            <p className="text-sm text-neutral-500">Token Information</p>
            <h2 className="mt-3 text-4xl font-semibold text-white">
              On-chain reference
            </h2>
            <p className="mt-4 text-sm text-neutral-500">
              All token data is verifiable via public Solana explorers.
            </p>
          </div>
          <div className={`${surfaceClass} divide-y divide-white/[0.06] p-2`}>
            {tokenInfo.map((item) => (
              <div
                key={item.label}
                className="grid gap-3 px-5 py-5 md:grid-cols-[180px_1fr_auto] md:items-center"
              >
                <p className="text-sm text-neutral-500">{item.label}</p>
                <p className="break-words font-mono text-sm text-neutral-100">
                  {item.value}
                </p>
                <div className="flex flex-wrap gap-3">
                  {item.solscan ? (
                    <a
                      href={externalLinks[0].href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white/[0.055] px-4 py-1.5 text-xs font-medium text-neutral-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-200 hover:bg-white/[0.09] hover:text-white"
                    >
                      View on Solscan
                    </a>
                  ) : null}
                  {item.copy ? <CopyButton value={tokenMintAddress} /> : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl border-b border-white/[0.05] px-6 py-14">
          <div className="mb-8">
            <p className="text-sm text-neutral-500">Liquidity Context</p>
            <h2 className="mt-3 text-4xl font-semibold text-white">
              External market depth
            </h2>
          </div>
          <div className={`${surfaceClass} p-7`}>
            <div className="grid gap-4 md:grid-cols-2">
              {liquidityContext.map((item) => (
                <div key={item.label} className="rounded-3xl bg-black/20 p-5">
                  <p className="text-xs text-neutral-500">{item.label}</p>
                  <p className="mt-2 font-medium text-neutral-100">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-6 text-neutral-500">
              Liquidity and price are dependent on external pool depth and
              trading activity.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-14">
          <div className={`${surfaceClass} p-7`}>
            <h2 className="text-xl font-semibold text-white">Risk Notice</h2>
            <p className="mt-4 max-w-3xl leading-7 text-neutral-400">
              KSOL is a reference-based digital unit and does not guarantee
              price stability or asset backing. Market pricing may vary.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
