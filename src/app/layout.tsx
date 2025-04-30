import type { Metadata } from "next";
import { Chivo_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Link from "next/link";

const chivoMono = Chivo_Mono({
  variable: "--font-chivo-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rfqma/maruarchive",
  description: "software engineer, photographer, and video editor",
  authors: [{ name: "Rifqi Maulana", url: "https://github.com/rfqma" }],
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="rfqm.xyz" />
      </head>
      <body className={`${chivoMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
