import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Caveat, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/lib/smooth-scroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/seo/StructuredData";
import GoogleAdsTag from "@/components/analytics/GoogleAdsTag";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";

// Display face for every heading/title — a bold, characterful grotesque.
const bricolage = Bricolage_Grotesque({
  variable: "--font-display-src",
  subsets: ["latin"],
  display: "swap",
});

// Handwriting accent for the single most important word inside a heading.
// Caveat stays highly legible while reading as real handwriting.
const caveat = Caveat({
  variable: "--font-hand-src",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kasi Tuition Centre — Tuition Centre in Chennai (Choolaimedu & Arumbakkam)",
    template: "%s | Kasi Tuition Centre",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "tuition centre in Chennai",
    "tuition centre Choolaimedu",
    "tuition centre Arumbakkam",
    "Kasi Tuition Centre",
    "Std 1 to 12 tuition Chennai",
    "phonics classes Chennai",
    "commerce tuition Chennai",
    "Hindi tuition Chennai",
    "chess coaching Chennai",
    "best tuition centre Chennai",
  ],
  category: "education",
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Kasi Tuition Centre — Tuition Centre in Chennai (Choolaimedu & Arumbakkam)",
    description: SITE_DESCRIPTION,
    images: [{ url: "/poster.jpeg", alt: "Kasi Tuition Centre — the best place for your kids" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kasi Tuition Centre — Tuition Centre in Chennai",
    description: SITE_DESCRIPTION,
    images: ["/poster.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0b2440",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${caveat.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-navy-ink">
        <GoogleAdsTag />
        <StructuredData />
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
