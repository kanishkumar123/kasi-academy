"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";
import ChalkUnderline from "@/components/ui/ChalkUnderline";
import Accent from "@/components/ui/Accent";
import HeroCarousel from "@/components/ui/HeroCarousel";
import { ensureGsapRegistered, prefersReducedMotion } from "@/lib/motion";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const gsap = ensureGsapRegistered();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-hero-line]", {
        opacity: 0,
        y: "100%",
        duration: 0.7,
        stagger: 0.09,
      })
        .from("[data-hero-kicker]", { opacity: 0, x: -16, duration: 0.4 }, 0)
        .from(
          "[data-hero-copy]",
          { opacity: 0, y: 12, duration: 0.5 },
          "-=0.25"
        )
        .from(
          "[data-hero-cta] > *",
          { opacity: 0, y: 10, duration: 0.4, stagger: 0.08 },
          "-=0.3"
        )
        .from(
          "[data-hero-photo]",
          { clipPath: "inset(0 0 100% 0)", duration: 0.9, ease: "power4.inOut" },
          0.1
        )
        .from(
          "[data-hero-seal]",
          { opacity: 0, scale: 0.5, rotate: 20, duration: 0.5, ease: "back.out(2)" },
          "-=0.3"
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative grid lg:min-h-[88vh] lg:grid-cols-[1.15fr_1fr]"
    >
      <div className="band flex flex-col justify-center border-b-2 border-navy-ink bg-cream py-14 lg:border-b-0 lg:border-r-2 lg:py-0">
        <div className="band-inner max-w-2xl lg:pr-10">
          <p
            data-hero-kicker
            className="text-[13px] font-semibold tracking-[0.06em] text-marigold-deep"
          >
            Kamaraj Nagar · Choolaimedu · Chennai
          </p>

          <h1 className="mt-5 font-display text-[13vw] leading-[0.94] font-medium text-navy-ink sm:text-6xl lg:text-[4.4rem]">
            <span className="block overflow-hidden">
              <span data-hero-line className="block">One classroom,</span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero-line className="block">
                <Accent>every grade</Accent>,
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero-line className="relative inline-block">
                real progress.
                <ChalkUnderline className="absolute left-0 -bottom-2 h-3 w-full" />
              </span>
            </span>
          </h1>

          <p
            data-hero-copy
            className="mt-8 max-w-md text-[17px] leading-relaxed text-ink-muted"
          >
            From a first-grader&apos;s earliest phonics sounds to a 12th-standard
            commerce board exam — every subject, taught under one roof, in
            batches small enough that no child is just a name on a register.
          </p>

          <div data-hero-cta className="mt-9 flex flex-wrap items-center gap-6">
            <Button href="/contact">Enroll your child</Button>
            <Button href="/programs" variant="link">
              See the full register
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t-2 border-navy-ink pt-5 text-sm text-navy-ink">
            <span><strong className="font-display text-base">Std 1–12</strong> taught</span>
            <span className="text-navy-ink/25">·</span>
            <span><strong className="font-display text-base">6</strong> programs on offer</span>
            <span className="text-navy-ink/25">·</span>
            <span><strong className="font-display text-base">Certified</strong> phonics &amp; training</span>
          </div>
        </div>
      </div>

      <HeroCarousel />
    </section>
  );
}
