export const tokenMintAddress =
  "CJWDVgXoVrXKCpLM64pkqLjozyoqKedEJqZ5kSStsd95";

export const okxDexHref = `https://web3.okx.com/zh-hant/dex-swap?inputChain=501&outputChain=501&inputCurrency=11111111111111111111111111111111&outputCurrency=${tokenMintAddress}`;

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
    href: okxDexHref,
    description: "Third-party DEX interface reference.",
  },
  {
    label: "CoinMarketCap",
    name: "CoinMarketCap",
    category: "Market Display",
    href: `https://dex.coinmarketcap.com/zh-tw/token/solana/${tokenMintAddress}/`,
    description: "External market reference and token display.",
  },
];

export const transparencyItems = [
  { label: "Chain", value: "Solana" },
  { label: "Token Mint Address", value: tokenMintAddress, isAddress: true },
  { label: "Token Type", value: "Independent SPL Token" },
  { label: "Verification", value: "Public on-chain verification" },
];
