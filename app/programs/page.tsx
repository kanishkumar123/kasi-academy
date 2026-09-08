import type { Metadata } from "next";
import ProgramLedger from "@/components/sections/ProgramLedger";
import PhonicsLevelPath from "@/components/sections/PhonicsLevelPath";
import CtaBanner from "@/components/sections/CtaBanner";
import Accent from "@/components/ui/Accent";

export const metadata: Metadata = {
  title: "Programs — Kasi Academy",
  description:
    "All subjects for Std 1–12, Hindi, level-based Phonics with certification, Commerce for Std 11–12, Phonics Teacher Training, and Chess.",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="band border-b-2 border-navy-ink pb-12 pt-14">
        <div className="band-inner max-w-2xl">
          <p className="text-[13px] font-semibold text-marigold-deep">The full register</p>
          <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-navy-ink sm:text-5xl">
            Every program, in <Accent>one place</Accent>.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-muted">
            From a child&apos;s first sight-words to a 12th-standard board exam —
            tap a row to see how it runs, or bring your child for more than one.
          </p>
        </div>
      </section>

      <section className="band py-14">
        <div className="band-inner">
          <ProgramLedger expandable />
        </div>
      </section>

      <PhonicsLevelPath />
      <CtaBanner />
    </>
  );
}
