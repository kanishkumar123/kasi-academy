import { CONTACT_CONVERSION_SEND_TO } from "@/lib/analytics";

// Reports the "Contact" Google Ads conversion when this page loads. A plain
// literal <script> (not next/script, not a client-effect) so it executes
// during the initial HTML parse, right after <GoogleAdsTag />'s init script
// in document order — gtag() is already defined by then. Gated to
// production, matching GoogleAdsTag.
export default function ContactConversion() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `gtag('event', 'conversion', {'send_to': '${CONTACT_CONVERSION_SEND_TO}'});`,
      }}
    />
  );
}
