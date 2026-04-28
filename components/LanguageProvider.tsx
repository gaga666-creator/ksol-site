"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Language = "EN" | "ZH";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations: Record<string, string> = {
  Copy: "複製",
  Copied: "已複製",
  "Verify Mint": "驗證 Mint",
  "Mint copied": "Mint 已複製",
  "MARKET DISPLAY": "市場顯示",
  "Pricing derived from external market activity.": "價格來自外部市場活動。",
  "Market Context": "市場背景",
  "View on Solscan": "在 Solscan 查看",
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key) => (language === "ZH" ? translations[key] ?? key : key),
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
