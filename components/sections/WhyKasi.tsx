const points = [
  {
    title: "Small batches, kept small on purpose",
    body: "Grouped by grade, never padded out — so a teacher notices when a child is struggling long before a test does.",
  },
  {
    title: "Progress you can see, not just hear about",
    body: "Regular class tests, with results and notes sent home — not only at report-card time.",
  },
  {
    title: "Certificates that are actually earned",
    body: "Phonics levels and teacher training both end in an issued certificate, not a participation sticker.",
  },
  {
    title: "Timings built around the school day",
    body: "Morning and evening batches, so tuition fits around school — not the other way around.",
  },
];

import Accent from "@/components/ui/Accent";

export default function WhyKasi() {
  return (
    <section className="band py-20">
      <div className="band-inner grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-[13px] font-semibold text-marigold-deep">Why parents choose Kasi</p>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-navy-ink sm:text-4xl">
            Run the way we&apos;d want <Accent>our own children</Accent> taught.
          </h2>
        </div>

        <dl>
          {points.map((point) => (
            <div
              key={point.title}
              className="ledger-row grid grid-cols-[2.5rem_1fr] gap-5 py-6 sm:grid-cols-[3rem_1fr]"
            >
              <dt aria-hidden="true" className="font-display text-3xl text-marigold-deep">
                ✓
              </dt>
              <dd>
                <p className="font-display text-lg font-medium text-navy-ink">{point.title}</p>
                <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-ink-muted">
                  {point.body}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
