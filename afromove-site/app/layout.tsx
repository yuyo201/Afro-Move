import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afromove | SNSマーケティング・ショート動画制作",
  description:
    "集客・求人につながるSNS運用支援。戦略設計、ショート動画制作、投稿、分析改善まで一括対応。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-white text-slate-950 antialiased">
        {children}
      </body>
    </html>
  );
}