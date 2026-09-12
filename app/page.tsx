import Hero from "@/components/sections/Hero";
import SubjectsMarquee from "@/components/sections/SubjectsMarquee";
import ProgramLedger from "@/components/sections/ProgramLedger";
import PhonicsLevelPath from "@/components/sections/PhonicsLevelPath";
import WhyKasi from "@/components/sections/WhyKasi";
import Highlights from "@/components/sections/Highlights";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import Button from "@/components/ui/Button";
import Accent from "@/components/ui/Accent";

export default function Home() {
  return (
    <>
      <Hero />
      <SubjectsMarquee />

      <section className="band py-20">
        <div className="band-inner">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[13px] font-semibold text-marigold-deep">The register</p>
              <h2 className="mt-3 font-display text-3xl font-medium text-navy-ink sm:text-4xl">
                What we <Accent>teach</Accent>
              </h2>
            </div>
            <Button href="/programs" variant="link">
              See the full register
            </Button>
          </div>

          <div className="mt-10">
            <ProgramLedger limit={4} />
          </div>
        </div>
      </section>

      <PhonicsLevelPath />
      <WhyKasi />
      <Highlights />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
