# Kasi Tuition Centre

Marketing site for Kasi Tuition Centre — Choolaimedu & Arumbakkam, Chennai. Built with Next.js (App Router), Tailwind CSS v4, and GSAP.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build` (production build), `npm run start` (serve the build), `npm run lint`, `npm run typecheck`.

## Before deploying to production

1. **Set the real domain.** Copy `.env.example` to `.env.local` (or set it in your host's dashboard) and point `NEXT_PUBLIC_SITE_URL` at the live domain, e.g. `https://www.kasituitioncentre.com`. This drives canonical links, `sitemap.xml`, `robots.txt`, and Open Graph/structured data (`lib/seo.ts`).
2. **Verify contact details.** Branch addresses and phone numbers live in one place: `data/branches.ts`.
3. **Submit to search engines.** Add the site to [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters), and submit `/sitemap.xml`.
4. **Claim/optimize a Google Business Profile per branch.** For a local query like "tuition centre in Chennai", the Google Maps 3-pack usually outranks organic results — a complete, review-backed Business Profile for each branch is the single highest-leverage thing outside this codebase.
5. Run `npm run lint && npm run typecheck && npm run build` and fix anything that fails.

## SEO & structured data

- Per-page metadata (title/description/canonical/Open Graph) lives in each `app/**/page.tsx`; shared defaults are in `app/layout.tsx`.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
- `components/seo/StructuredData.tsx` emits JSON-LD (`EducationalOrganization` + one `LocalBusiness` per branch) built from `data/branches.ts`.

## Security

`next.config.ts` sets security headers (CSP, HSTS, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`) for every route — see the comment above `contentSecurityPolicy` there for the one known trade-off (`'unsafe-inline'` on script/style, needed because the app doesn't wire up CSP nonces).
