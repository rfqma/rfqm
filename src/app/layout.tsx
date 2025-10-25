import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const chivoMono = Geist_Mono({
  variable: "--font-chivo-mono",
  subsets: ["latin"],
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "rfqma/maruarchive",
  description: "software engineer and photographer",
  keywords: [
    "Rifqi Maulana",
    "rfqma",
    "maruarchive",
    "Software",
    "Engineer",
    "Software Engineer",
    "Photographer",
    "Developer",
  ],
  authors: [{ name: "Rifqi Maulana", url: "https://github.com/rfqma" }],
  creator: "Rifqi Maulana",
  publisher: "Rifqi Maulana",
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
  manifest: "/manifest.json",
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
    type: "website",
    locale: "en_US",
    url: "https://rfqm.xyz",
    title: "rfqma/maruarchive",
    description: "software engineer and photographer",
    siteName: "rfqma/maruarchive",
    images: [
      {
        url: "https://rfqm.xyz/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "rfqma/maruarchive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "rfqma/maruarchive",
    description: "software engineer and photographer",
    images: [
      {
        url: "https://rfqm.xyz/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "rfqma/maruarchive",
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
      <body className={`${chivoMono.className} antialiased`}>{children}</body>
    </html>
  );
}
