import { branches } from "@/data/branches";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

// tel: hrefs are stored as plain Indian mobile numbers (e.g. "tel:6381190825");
// schema.org / Google prefer full E.164 form for telephone properties.
function toE164(phoneHref: string) {
  return `+91${phoneHref.replace("tel:", "")}`;
}

// Branch addresses are stored as one display line ending in "…, Chennai" or
// "…, Chennai 600 106" — split that back into street/locality/postal parts
// for PostalAddress rather than duplicating "Chennai" in both fields.
function splitAddress(address: string) {
  const pinMatch = address.match(/\d{6}/);
  const streetAddress = address
    .replace(/,\s*Chennai\s*\d{0,6}\s*$/i, "")
    .trim();
  return { streetAddress, postalCode: pinMatch?.[0] };
}

export default function StructuredData() {
  const organizationId = `${SITE_URL}/#organization`;

  const organization = {
    "@type": "EducationalOrganization",
    "@id": organizationId,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    foundingDate: "2017",
    description:
      "Kasi Tuition Centre teaches all subjects for Std 1 to 12, plus Hindi, level-based Phonics with certification, Commerce for Std 11–12, Phonics Teacher Training, and Chess, across our Choolaimedu and Arumbakkam branches in Chennai.",
  };

  const branchListings = branches.map((branch) => {
    const { streetAddress, postalCode } = splitAddress(branch.address);
    return {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": `${SITE_URL}/#${branch.name.toLowerCase()}`,
      name: `${SITE_NAME} — ${branch.name}`,
      parentOrganization: { "@id": organizationId },
      branchOf: { "@id": organizationId },
      url: `${SITE_URL}/contact`,
      image: `${SITE_URL}/poster.jpeg`,
      telephone: toE164(branch.phoneHref),
      priceRange: "₹₹",
      areaServed: "Chennai",
      address: {
        "@type": "PostalAddress",
        streetAddress,
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode,
        addressCountry: "IN",
      },
      hasMap: `https://www.google.com/maps?q=${encodeURIComponent(branch.mapQuery)}`,
    };
  });

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, ...branchListings],
  };

  return (
    <script
      type="application/ld+json"
      // Safe: `graph` is built entirely from our own static site/branch
      // constants above, never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
