export const tokenMintAddress =
  "CJWDVgXoVrXKCpLM64pkqLjozyoqKedEJqZ5kSStsd95";

export const externalLinks = [
  {
    label: "Solscan",
    name: "Solscan",
    category: "Explorer",
    href: `https://solscan.io/token/${tokenMintAddress}`,
    description: "View token details on Solana explorer.",
  },
  {
    label: "Birdeye",
    name: "Birdeye",
    category: "Analytics",
    href: `https://birdeye.so/token/${tokenMintAddress}?chain=solana`,
    description: "View third-party market reference data.",
  },
  {
    label: "Dexscreener",
    name: "Dexscreener",
    category: "DEX Market",
    href: `https://dexscreener.com/solana/${tokenMintAddress}`,
    description: "View external liquidity and pair information.",
  },
  {
    label: "Jupiter",
    name: "Jupiter",
    category: "Aggregator availability dependent on routing",
    href: `https://jup.ag/swap?inputMint=So11111111111111111111111111111111111111112&outputMint=${tokenMintAddress}`,
    description: "Routing availability depends on Jupiter market routing.",
  },
];

export const transparencyItems = [
  { label: "Chain", value: "Solana" },
  { label: "Token Mint Address", value: tokenMintAddress, isAddress: true },
  { label: "Reference Asset", value: "SOL" },
  { label: "Usage", value: "Storage and internal transfer" },
];
