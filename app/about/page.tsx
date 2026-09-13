import type { Metadata } from "next";
import Image from "next/image";
import CtaBanner from "@/components/sections/CtaBanner";
import Accent from "@/components/ui/Accent";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Kasi Tuition Centre is a neighbourhood tuition centre with branches in Choolaimedu and Arumbakkam, Chennai — teaching Std 1–12 with small batches and certified milestones since 2017.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Kasi Tuition Centre",
    description:
      "A neighbourhood tuition centre in Chennai, built like a second classroom — small batches, certified milestones, 100% pass percentage since 2017.",
    images: [{ url: "/best-outgoing-student.jpeg", alt: "Kasi Tuition Centre's Best Outgoing Student plaque" }],
  },
};

const howItRuns = [
  "Regular class tests, with results and notes sent home — not just at report-card time.",
  "Morning and evening batch timings, scheduled around the school day.",
  "Phonics learners move level to level at their own pace, each level marked with a certificate.",
  "Std 11–12 Commerce students get board-focused practice papers and doubt-clearing sessions before exams.",
];

export default function AboutPage() {
  return (
    <>
      <section className="grid border-b-2 border-navy-ink lg:grid-cols-[1fr_1fr]">
        <div className="band flex flex-col justify-center border-b-2 border-navy-ink py-14 lg:border-b-0 lg:border-r-2">
          <div className="band-inner max-w-lg lg:pr-6">
            <p className="text-[13px] font-semibold text-marigold-deep">About Kasi</p>
            <h1 className="mt-3 font-display text-4xl font-medium leading-[1.05] text-navy-ink sm:text-5xl">
              A tuition centre built like a <Accent>second classroom</Accent>.
            </h1>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-muted">
              Kasi Tuition Centre started in Kamaraj Nagar, Choolaimedu, with a
              simple idea: children learn best when the person teaching them
              actually knows them.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              Today we teach every subject from Std 1 through Std 12, run a
              level-based Phonics programme with certification, prepare Std
              11–12 students for Commerce boards, train teachers in phonics
              methodology, and coach Chess — all from the same neighbourhood
              classroom.
            </p>
          </div>
        </div>

        <div className="relative min-h-[320px]">
          <Image
            src={images.aboutStory.src}
            alt={images.aboutStory.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="grid lg:grid-cols-[1fr_1fr]">
        <div className="relative min-h-[320px]">
          <Image
            src={images.aboutClassroom.src}
            alt={images.aboutClassroom.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="band flex flex-col justify-center py-14">
          <div className="band-inner max-w-lg lg:pl-6">
            <p className="text-[13px] font-semibold text-marigold-deep">The day to day</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-navy-ink sm:text-4xl">
              How a class <Accent>actually runs</Accent> here.
            </h2>
            <ul className="mt-6">
              {howItRuns.map((item) => (
                <li key={item} className="ledger-row py-4 text-[15px] leading-relaxed text-ink-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
