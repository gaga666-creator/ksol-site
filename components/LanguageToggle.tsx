"use client";

import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex rounded-full bg-white/[0.055] p-1 text-xs text-neutral-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      {(["EN", "ZH"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          className={`rounded-full px-3 py-1 transition duration-200 ${
            language === item
              ? "bg-neutral-100 text-black"
              : "hover:text-neutral-100"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
