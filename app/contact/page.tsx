import type { Metadata } from "next";
import ContactButtons from "@/components/sections/ContactButtons";
import MapEmbed from "@/components/sections/MapEmbed";
import Accent from "@/components/ui/Accent";
import ContactConversion from "@/components/analytics/ContactConversion";
import { branches } from "@/data/branches";

export const metadata: Metadata = {
  title: "Contact & Locations",
  description:
    "Call or WhatsApp Kasi Tuition Centre at 63811 90825, or visit our Choolaimedu and Arumbakkam branches in Chennai. Now open for registration.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Kasi Tuition Centre — Choolaimedu & Arumbakkam, Chennai",
    description:
      "Call, WhatsApp, or visit either of our two branches in Chennai — now open for registration.",
    images: [{ url: "/poster.jpeg", alt: "Kasi Tuition Centre — now open for registration" }],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactConversion />
      <section className="band border-b-2 border-navy-ink pb-12 pt-14">
        <div className="band-inner max-w-xl">
          <p className="text-[13px] font-semibold text-marigold-deep">Get in touch</p>
          <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-navy-ink sm:text-5xl">
            Let&apos;s talk about <Accent>your child</Accent>.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-muted">
            Call, message, or come by — we&apos;re happy to talk through which
            batch fits best before you enroll.
          </p>
        </div>
      </section>

      <section className="band py-4">
        <div className="band-inner grid gap-12 lg:grid-cols-[1fr_1fr]">
          <ContactButtons />
          <div className="grid gap-6">
            {branches.map((b) => (
              <div key={b.name}>
                <p className="mb-2 font-display text-lg font-medium text-navy-ink">
                  {b.name} branch
                </p>
                <MapEmbed branch={b} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pb-16" />
    </>
  );
}
