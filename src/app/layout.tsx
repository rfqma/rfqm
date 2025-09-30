import type { Metadata } from "next";
import { Chivo_Mono } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className="bg-custom-background">
      <head>
        <meta name="apple-mobile-web-app-title" content="rfqm.xyz" />
      </head>
      <body className={`${chivoMono.className} antialiased`}>{children}</body>
    </html>
  );
}
