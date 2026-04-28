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
    description: "View third-party market display data.",
  },
  {
    label: "Dexscreener",
    name: "Dexscreener",
    category: "DEX Market",
    href: `https://dexscreener.com/solana/${tokenMintAddress}`,
    description: "View external liquidity and pair information.",
  },
  {
    label: "OKX DEX",
    name: "OKX DEX",
    category: "External DEX Interface",
    href: `https://www.okx.com/web3/dex-swap#inputChain=501&inputCurrency=So11111111111111111111111111111111111111112&outputChain=501&outputCurrency=${tokenMintAddress}`,
    description: "Third-party DEX interface reference.",
  },
];

export const transparencyItems = [
  { label: "Chain", value: "Solana" },
  { label: "Token Mint Address", value: tokenMintAddress, isAddress: true },
  { label: "Token Type", value: "Independent SPL Token" },
  { label: "Verification", value: "Public on-chain verification" },
];
