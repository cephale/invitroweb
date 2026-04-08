import type { Metadata } from "next";
import { Lato, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "INVITRO LLC.",
  description: "Create New Nodes - INVITRO LLC. Design Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${lato.variable} ${notoSansJP.variable}`}>
      <body>{children}</body>
    </html>
  );
}
