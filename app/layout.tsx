import type { Metadata } from "next";
import { Bricolage_Grotesque, Caveat, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/lib/smooth-scroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
  title: "Kasi Academy — Choolaimedu, Chennai",
  description:
    "Kasi Academy teaches all subjects for Std 1 to 12, plus Hindi, level-based Phonics with certification, Commerce for Std 11–12, Phonics Teacher Training, and Chess — in Kamaraj Nagar, Choolaimedu, Chennai.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${caveat.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-navy-ink">
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
