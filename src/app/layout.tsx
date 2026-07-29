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
  metadataBase: new URL("https://rfqm.me"),
  applicationName: "rfqm.me",
  title: {
    default: "Rifqi Maulana - Frontend Developer & Photographer",
    template: "%s | Rifqi Maulana",
  },
  description:
    "Rifqi Maulana is a frontend developer and photographer based in Yogyakarta, Indonesia. Specializing in building modern, responsive web applications with React, Next.js, and TypeScript.",
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
    "yogyakarta",
    "react developer",
    "nextjs developer",
    "typescript developer",
    "web development",
    "portfolio",
  ],
  authors: [{ name: "Rifqi Maulana", url: "https://rfqm.me" }],
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
    sitemap: "https://rfqm.me/sitemap.xml",
  },
  alternates: {
    canonical: "https://rfqm.me",
  },
  openGraph: {
    title: "Rifqi Maulana - Frontend Developer & Photographer",
    type: "website",
    locale: "en_US",
    url: "https://rfqm.me",
    description:
      "Rifqi Maulana is a frontend developer and photographer based in Yogyakarta, Indonesia. Specializing in building modern, responsive web applications.",
    siteName: "rfqm.me",
    images: [
      {
        url: "https://rfqm.me/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Rifqi Maulana - Frontend Developer and Photographer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rifqi Maulana - Frontend Developer & Photographer",
    description:
      "Rifqi Maulana is a frontend developer and photographer based in Yogyakarta, Indonesia. Specializing in building modern, responsive web applications.",
    images: [
      {
        url: "https://rfqm.me/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Rifqi Maulana - Frontend Developer and Photographer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Rifqi Maulana",
      url: "https://rfqm.me",
      image: "https://rfqm.me/opengraph.jpg",
      jobTitle: "Frontend Developer",
      description:
        "Frontend developer and photographer based in Yogyakarta, Indonesia",
      worksFor: {
        "@type": "Organization",
        name: "Techave",
        url: "https://techave.dev",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Yogyakarta",
        addressRegion: "DI Yogyakarta",
        addressCountry: "ID",
      },
      sameAs: [
        "https://github.com/rfqma",
        "https://www.linkedin.com/in/rfqma",
        "https://instagram.com/maruarchive",
        "https://www.youtube.com/@maruarchive",
        "https://www.pexels.com/@rifqi-maulana-286675026/",
      ],
      knowsAbout: [
        "Frontend Development",
        "React",
        "Next.js",
        "TypeScript",
        "Web Development",
        "Photography",
      ],
      email: "hello@rfqm.me",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Rifqi Maulana",
      url: "https://rfqm.me",
      description:
        "Personal portfolio of Rifqi Maulana - Frontend Developer and Photographer",
      author: {
        "@type": "Person",
        name: "Rifqi Maulana",
      },
    },
  ];

  return (
    <html lang="en" className="bg-background">
      <head>
        <meta name="apple-mobile-web-app-title" content="rfqm.me" />
        <link rel="canonical" href="https://rfqm.me" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
