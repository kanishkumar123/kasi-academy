"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import StampSeal from "@/components/ui/StampSeal";
import { images } from "@/lib/images";
import { ensureGsapRegistered, prefersReducedMotion } from "@/lib/motion";

// Five rotating frames. Each carries two words placed the way "Fashion / Forward"
// sits over a photo: first word pulled left on the upper row, second word pushed
// right on the lower row.
const slides = [
  { image: images.heroClassroom, top: "Every", bottom: "Grade" },
  { image: images.phonicsKids, top: "First", bottom: "Sounds" },
  { image: images.commerceStudy, top: "Board", bottom: "Ready" },
  { image: images.chessBoard, top: "Think", bottom: "Ahead" },
  { image: images.teacherTraining, top: "Trained", bottom: "Teachers" },
];

const INTERVAL = 4200;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0); // frame we're moving to
  const [words, setWords] = useState(slides[0]); // word pair painted right now
  const firstRun = useRef(true);
  const topRef = useRef<HTMLSpanElement>(null);
  const bottomRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, []);

  // Runs once per frame change. Outgoing words leave in one direction
  // (top → right, bottom → left); at the midpoint the pair is swapped and the
  // incoming words enter from the opposite side so the change reads continuous.
  // Depends only on `index` so React re-renders from `setWords` never restart
  // (and cancel) the timeline mid-flight.
  useEffect(() => {
    const top = topRef.current;
    const bottom = bottomRef.current;
    if (!top || !bottom) return;

    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    if (prefersReducedMotion()) {
      setWords(slides[index]);
      return;
    }

    const gsap = ensureGsapRegistered();
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power3.inOut" },
    });

    tl.to(top, { xPercent: 120, autoAlpha: 0 }, 0)
      .to(bottom, { xPercent: -120, autoAlpha: 0 }, 0)
      .add(() => setWords(slides[index]))
      .set(top, { xPercent: -120 })
      .set(bottom, { xPercent: 120 })
      .to(top, { xPercent: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out" })
      .to(
        bottom,
        { xPercent: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out" },
        "<0.1",
      );

    return () => {
      tl.kill();
    };
  }, [index]);

  const slide = words;

  return (
    <div
      data-hero-photo
      className="relative min-h-[46vh] overflow-hidden bg-navy-ink lg:min-h-0"
    >
      {slides.map((s, i) => (
        <div
          key={s.image.src}
          className="absolute inset-0 transition-opacity duration-700 ease-out"
          style={{ opacity: i === index ? 1 : 0 }}
        >
          <Image
            src={s.image.src}
            alt={s.image.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-navy-ink/45 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-ink/75 via-transparent to-transparent" />

      <div className="pointer-events-none absolute inset-0 flex flex-col justify-center overflow-hidden">
        <span
          ref={topRef}
          className="block w-full pl-[7%] pr-[26%] font-display text-[13vw] font-extrabold uppercase leading-[0.9] tracking-tight text-cream lg:text-[6.5rem]"
        >
          {slide.top}
        </span>
        <span
          ref={bottomRef}
          className="-mt-[0.1em] block w-full pl-[28%] pr-[7%] text-right font-hand text-[17vw] font-bold capitalize leading-[0.8] text-marigold lg:text-[8.5rem]"
        >
          {slide.bottom}
        </span>
      </div>

      <div className="absolute bottom-6 left-6 flex gap-2">
        {slides.map((s, i) => (
          <span
            key={s.image.src}
            aria-hidden="true"
            className={`h-1.5 w-6 border border-cream/70 transition-colors ${
              i === index ? "bg-cream" : "bg-transparent"
            }`}
          />
        ))}
      </div>

      <div data-hero-seal className="absolute bottom-6 right-6">
        <StampSeal line1="ADMISSIONS" line2="NOW OPEN" />
      </div>
    </div>
  );
}
