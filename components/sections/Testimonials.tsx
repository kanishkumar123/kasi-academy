import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="band border-y-2 border-navy-ink bg-marigold-pale/50 py-20">
      <div className="band-inner">
        <p className="font-display text-[13px] font-semibold text-marigold-deep">
          What parents say
        </p>

        <div className="mt-10 grid gap-6 sm:gap-8 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col border-2 border-navy-ink bg-cream p-7"
            >
              <blockquote className="font-display text-lg font-medium leading-snug text-navy-ink sm:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-[15px]">
                <span className="font-semibold text-navy-ink">{t.name}</span>
                <span className="text-ink-muted"> — {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
