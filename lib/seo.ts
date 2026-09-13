// Central SEO constants. Every canonical/OG/JSON-LD URL in the app is built
// from SITE_URL, so the whole site can be re-pointed at the real production
// domain by changing NEXT_PUBLIC_SITE_URL alone.
//
// IMPORTANT: replace the fallback below (or set NEXT_PUBLIC_SITE_URL in your
// hosting provider's env vars) with the real domain before going live —
// canonical links, the sitemap, robots.txt and structured data all depend on
// it being correct.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://kasituitioncentre.com"
).replace(/\/$/, "");

export const SITE_NAME = "Kasi Tuition Centre";

export const SITE_DESCRIPTION =
  "Kasi Tuition Centre is a trusted tuition centre in Chennai, with branches in Choolaimedu and Arumbakkam. All subjects for Std 1 to 12, Hindi, level-based Phonics with certification, Commerce for Std 11–12, Phonics Teacher Training, and Chess — established 2017, 100% pass percentage.";
