import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "KSOL | Official Token Information",
  description:
    "Official information and verification entry point for the KSOL token asset on Solana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
