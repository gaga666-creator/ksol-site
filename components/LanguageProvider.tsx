"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Language = "EN" | "中文";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations: Record<string, string> = {
  Docs: "文件",
  Copy: "複製",
  Copied: "已複製",
  "SOL-referenced digital asset": "SOL 參考型數位資產",
  "KSOL is a SOL-referenced unit designed for internal transfer and storage representation.":
    "KSOL 是一種以 SOL 為參考的數位單位，用於內部轉移與價值儲存表示。",
  "View Docs": "查看文件",
  "View on Solscan": "在 Solscan 查看",
  "PRICE REFERENCE": "價格參考",
  "Pricing derived from external market activity.":
    "價格來自外部市場活動。",
  "Reference Pair": "參考交易對",
  "Peg Target": "目標參考值",
  Chain: "鏈",
  "Reference Asset": "參考資產",
  "Mint Address": "代幣地址",
  "Liquidity Pair": "流動性交易對",
  Storage: "儲存",
  "Reference-based unit": "參考型單位",
  Transfer: "轉移",
  "Internal movement": "內部流通",
  "SOL Reference": "SOL 參考",
  "1:1 target model": "1:1 目標模型",
  "Available on": "可查看平台",
  "Market Presence": "市場可見度",
  "Pricing and liquidity are determined by external markets.":
    "價格與流動性由外部市場決定。",
  Explorer: "區塊瀏覽器",
  Analytics: "分析平台",
  "DEX Market": "DEX 市場",
  Aggregator: "聚合器",
  "Aggregator availability dependent on routing":
    "聚合器可用性取決於路由",
  "Token Information": "代幣資訊",
  "On-chain reference": "鏈上參考資料",
  "All token data is verifiable via public Solana explorers.":
    "所有代幣資料可透過公開 Solana 區塊瀏覽器驗證。",
  "Token Standard": "代幣標準",
  Decimals: "小數位",
  "Explorer verified": "區塊瀏覽器驗證",
  Supply: "供應量",
  "Public explorer reference": "公開瀏覽器參考",
  "Liquidity Context": "流動性背景",
  "External market depth": "外部市場深度",
  "Primary Pair": "主要交易對",
  "Market Source": "市場來源",
  "DEX-based pricing": "DEX 市場定價",
  "Liquidity and price are dependent on external pool depth and trading activity.":
    "流動性與價格取決於外部池深度與市場交易活動。",
  "Risk Notice": "風險提示",
  "KSOL is a reference-based digital unit and does not guarantee price stability or asset backing. Market pricing may vary.":
    "KSOL 是參考型數位單位，不保證價格穩定或資產背書，市場價格可能產生波動。",
  "Official Resources": "官方資源",
  Website: "網站",
  "Verification Checklist": "驗證清單",
  "Verify mint address": "驗證代幣地址",
  "Check token holders": "查看持有人",
  "Review liquidity pair": "檢查流動性交易對",
  "Confirm market route availability": "確認市場路由可用性",
  "Market Context": "市場背景",
  "KSOL market pricing depends on external liquidity pools, routing availability, and trading activity. Users should verify market conditions before interacting.":
    "KSOL 市場價格取決於外部流動性池、路由可用性與市場交易活動。使用者互動前應自行確認市場狀況。",
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key) => (language === "中文" ? translations[key] ?? key : key),
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
