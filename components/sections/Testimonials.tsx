"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  const go = (dir: 1 | -1) =>
    setI((v) => (v + dir + testimonials.length) % testimonials.length);

  return (
    <section className="band border-y-2 border-navy-ink bg-marigold-pale/50 py-20">
      <div className="band-inner grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start">
        <p className="font-display text-[13px] font-semibold text-marigold-deep lg:w-32">
          What parents say
        </p>

        <div>
          <blockquote
            key={i}
            className="max-w-3xl font-display text-2xl font-medium leading-snug text-navy-ink sm:text-3xl"
          >
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-[15px]">
              <span className="font-semibold text-navy-ink">{t.name}</span>
              <span className="text-ink-muted"> — {t.role}</span>
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 cursor-pointer items-center justify-center border-2 border-navy-ink text-navy-ink hover:bg-navy-ink hover:text-cream"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex h-10 w-10 cursor-pointer items-center justify-center border-2 border-navy-ink text-navy-ink hover:bg-navy-ink hover:text-cream"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
