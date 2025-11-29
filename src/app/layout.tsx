import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SmoothCursor } from "@/components/magicui/smooth-cursor";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rfqm.xyz"),
  applicationName: "rfqm.xyz",
  title: "Rifqi Maulana",
  description: "fullstack developer and photographer",
  keywords: [
    "rifqi maulana",
    "rfqm",
    "rfqma",
    "maruarchive",
    "photographer",
    "fullstack developer",
    "frontend developer",
    "backend developer",
    "software engineer",
    "indonesia",
    "web developer",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "icon",
        url: "/icon1.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  },
  manifest: "./manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    sitemap: "https://rfqm.xyz/sitemap.xml",
  },
  openGraph: {
    title: "Rifqi Maulana",
    type: "website",
    locale: "en_US",
    url: "https://rfqm.xyz",
    description: "fullstack developer and photographer",
    siteName: "rfqm.xyz",
    images: [
      {
        url: "https://rfqm.xyz/opengraph.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rifqi Maulana",
    images: [
      {
        url: "https://rfqm.xyz/opengraph.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <meta name="apple-mobile-web-app-title" content="rfqm.xyz" />
      </head>
      <body className={`${manrope.className} antialiased cursor-none`}>
        <main className="max-w-2xl mx-auto px-6 py-12 sm:py-16">
          {children}
        </main>
        <SmoothCursor />
      </body>
    </html>
  );
}
