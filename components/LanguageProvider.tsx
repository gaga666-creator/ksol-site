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
  "Reference Target": "目標參考值",
  Chain: "鏈",
  "Reference Asset": "參考資產",
  "Mint Address": "代幣地址",
  "Liquidity Pair": "流動性交易對",
  "Core Utility": "核心用途",
  Storage: "儲存",
  "Reference-based unit for storage representation.":
    "用於價值儲存表示的參考型單位。",
  Transfer: "轉移",
  "Designed for internal movement between wallets or accounts.":
    "設計用於錢包或帳戶之間的內部流通。",
  "SOL Reference": "SOL 參考",
  "Structured around SOL-based reference logic.":
    "以 SOL 參考邏輯作為結構基礎。",
  "Available on": "可查看平台",
  "Market Presence": "市場可見度",
  "View KSOL across public market and explorer surfaces.":
    "透過公開市場與區塊瀏覽器介面查看 KSOL。",
  "Token Information": "代幣資訊",
  "Token Standard": "代幣標準",
  Decimals: "小數位",
  "Explorer verified": "區塊瀏覽器驗證",
  "Risk Notice": "風險提示",
  "KSOL is a SOL-referenced digital unit. Market pricing, liquidity, and transfer conditions depend on external market activity and on-chain conditions.":
    "KSOL 是 SOL 參考型數位單位。市場價格、流動性與轉移條件取決於外部市場活動與鏈上狀況。",
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
