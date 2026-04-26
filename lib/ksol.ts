export const tokenMintAddress =
  "CJWDVgXoVrXKCpLM64pkqLjozyoqKedEJqZ5kSStsd95";

export const externalLinks = [
  {
    name: "Solscan",
    href: `https://solscan.io/token/${tokenMintAddress}`,
    description: "View token details on Solana explorer.",
  },
  {
    name: "Birdeye",
    href: `https://birdeye.so/token/${tokenMintAddress}?chain=solana`,
    description: "View third-party market reference data.",
  },
  {
    name: "Dexscreener",
    href: `https://dexscreener.com/solana/${tokenMintAddress}`,
    description: "View external liquidity and pair information.",
  },
  {
    name: "Jupiter",
    href: `https://jup.ag/swap/SOL-${tokenMintAddress}`,
    description: "Open the SOL to KSOL swap route.",
  },
];

export const transparencyItems = [
  { label: "Chain", value: "Solana" },
  { label: "Token Mint Address", value: tokenMintAddress, isAddress: true },
  { label: "Reference Asset", value: "SOL" },
  { label: "Usage", value: "Storage and internal transfer" },
];
