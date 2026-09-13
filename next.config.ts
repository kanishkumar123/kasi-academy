import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// Next.js hydration/bootstrap scripts and a handful of inline `style={{...}}`
// usages in this app aren't wired up with CSP nonces, so script-src/style-src
// need 'unsafe-inline'. That's a real trade-off (it weakens the XSS
// protection a strict CSP would otherwise give), but every other directive
// below still meaningfully locks the app down — no remote script sources, no
// plugins/objects, no framing by other sites, no mixed content. Revisit with
// a nonce-based CSP (via proxy/middleware) if this ever needs to be stricter.
// Note: this whole headers() block is currently inert — next.config's
// headers() is not applied under `output: "export"` (Next.js warns about
// this at build time). Keeping the CSP accurate anyway so it's correct if
// headers are ever served at the host/CDN level instead.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://www.googletagmanager.com${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://images.unsplash.com https://www.googletagmanager.com https://www.google-analytics.com",
  "font-src 'self' data:",
  "frame-src https://www.google.com",
  `connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.googleadservices.com${isDev ? " ws:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // Only takes effect when actually served over HTTPS (as it will be in
  // production) — harmless over plain http in local dev.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
];

const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
