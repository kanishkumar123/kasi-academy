import { GOOGLE_ADS_ID } from "@/lib/analytics";

// Google Ads global site tag. Rendered once from the root layout so every
// route gets exactly one tag, per Google's own instructions. Gated to
// production builds so `npm run dev` never reports fake traffic/conversions
// into the real Ads account.
//
// Uses plain <script> tags (not next/script) rendered straight into the
// server-generated HTML: under `output: "export"` the next/script runtime
// creates the DOM node from the client bundle but never actually executes
// its inline content, so window.dataLayer/gtag never appeared and no
// conversions were ever recorded. Literal script tags are part of the
// initial HTML parse and always execute.
export default function GoogleAdsTag() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `,
        }}
      />
    </>
  );
}
