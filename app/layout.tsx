import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KSOL | SOL-Pegged Storage Asset",
  description:
    "KSOL is a SOL-pegged storage asset designed for storage and internal value transfer.",
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
