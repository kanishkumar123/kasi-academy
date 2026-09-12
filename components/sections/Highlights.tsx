import Image from "next/image";

const highlights = [
  {
    src: "/poster.jpeg",
    alt: "Poster reading 'Kasi Tuition Centre is like another home', listing our primary functions, benefits, learning formats and our promise to parents",
    caption: "A warmer way to learn",
  },
  {
    src: "/phonics.jpeg",
    alt: "Phonics programme poster — enrollment now open at Kasi Tuition Centre, Kamaraj Nagar, Choolaimedu, Chennai",
    caption: "Phonics enrollment is open",
  },
  {
    src: "/best-outgoing-student.jpeg",
    alt: "Plaque celebrating Kasi Tuition Centre's Best Outgoing Student for Std 10 (2023–2024), Kaviya K., 463/500",
    caption: "Proud of our achievers",
  },
];

export default function Highlights() {
  return (
    <section className="band border-y-2 border-navy-ink py-20">
      <div className="band-inner">
        <p className="text-[13px] font-semibold text-marigold-deep">From our noticeboard</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-medium text-navy-ink sm:text-4xl">
          A few things worth putting up on the wall.
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {highlights.map((h) => (
            <figure key={h.src} className="border-2 border-navy-ink bg-cream">
              <div className="relative aspect-3/4">
                <Image
                  src={h.src}
                  alt={h.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="border-t-2 border-navy-ink px-4 py-3 text-sm font-medium text-navy-ink">
                {h.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
