import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KSOL | SOL-Referenced Digital Asset",
  description:
    "KSOL is a SOL-referenced digital unit designed for internal transfer and storage representation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
