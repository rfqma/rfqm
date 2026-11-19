import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://rfqm.me";
const TITLE = "Rifqi Maulana - Frontend Engineer";
const DESCRIPTION =
  "Frontend engineer at Techave, based in Jakarta. Building apps, exploring cloud & DevOps. Open for projects.";
const OG_IMAGE = {
  url: "/opengraph.jpg",
  width: 1200,
  height: 630,
  alt: TITLE,
};

export const viewport: Viewport = {
  themeColor: "#111111",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "rfqm.me",
  title: {
    default: TITLE,
    template: "%s | Rifqi Maulana",
  },
  description: DESCRIPTION,
  keywords: [
    "Rifqi Maulana",
    "rfqm",
    "rfqma",
    "frontend engineer",
    "frontend developer",
    "react developer",
    "next.js developer",
    "typescript",
    "freelance web developer",
    "cloud",
    "devops",
    "photography",
    "jakarta",
    "indonesia",
    "fullstack",
    "backend",
    "infra"
  ],
  authors: [{ name: "Rifqi Maulana", url: SITE_URL }],
  creator: "Rifqi Maulana",
  publisher: "Rifqi Maulana",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "rfqm.me",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  appleWebApp: {
    title: "rfqm.me",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Rifqi Maulana",
      url: SITE_URL,
      image: `${SITE_URL}/logo.png`,
      jobTitle: "Frontend Engineer",
      description: DESCRIPTION,
      worksFor: {
        "@type": "Organization",
        name: "Techave",
        url: "https://techave.dev",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta",
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
        "Cloud Computing",
        "DevOps",
        "Photography",
        "Fullstack",
        "Backend",
        "Infra"
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Rifqi Maulana",
      url: SITE_URL,
      description: DESCRIPTION,
      author: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={`${manrope.className} antialiased`} suppressHydrationWarning>
        <main className="max-w-2xl mx-auto px-6 py-12 sm:py-16">{children}</main>
      </body>
    </html>
  );
}
