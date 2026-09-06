"use client";

import { useEffect, useRef } from "react";
import { Award } from "lucide-react";
import { phonicsLevels } from "@/data/phonicsLevels";
import Accent from "@/components/ui/Accent";
import { ensureGsapRegistered, prefersReducedMotion } from "@/lib/motion";

export default function PhonicsLevelPath() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const path = pathRef.current;
    if (!root || !path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;

    if (prefersReducedMotion()) {
      path.style.strokeDashoffset = "0";
      return;
    }

    path.style.strokeDashoffset = `${length}`;
    const gsap = ensureGsapRegistered();

    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          end: "bottom 60%",
          scrub: 0.6,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="band border-y-2 border-navy-ink bg-navy py-20 text-cream">
      <div className="band-inner">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[13px] font-semibold text-marigold">Phonics, level by level</p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl">
              A path you can watch them <Accent className="text-marigold">climb</Accent>.
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-cream/65">
              Every level is a real, earned milestone — completed with a
              certificate, not just a badge.
            </p>
          </div>

          <div ref={rootRef} className="relative">
            <svg
              className="absolute left-0 top-0 hidden h-full w-3 sm:block"
              viewBox="0 0 12 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M6 0 L6 100" stroke="rgba(251,246,236,0.15)" strokeWidth="3" fill="none" />
              <path
                ref={pathRef}
                d="M6 0 L6 100"
                stroke="var(--color-marigold)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            <ol className="sm:pl-10">
              {phonicsLevels.map((lvl) => (
                <li
                  key={lvl.level}
                  className="flex items-start gap-5 border-b border-cream/15 py-6 first:pt-0 last:border-0"
                >
                  <span className="font-display text-3xl font-medium text-marigold shrink-0 w-10">
                    {lvl.level}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-lg font-medium">{lvl.name}</h3>
                      {lvl.level === phonicsLevels.length && (
                        <Award size={20} className="shrink-0 text-marigold" />
                      )}
                    </div>
                    <p className="mt-1.5 text-sm text-cream/65 leading-relaxed">
                      {lvl.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
