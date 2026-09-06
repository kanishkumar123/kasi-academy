const subjects = [
  "All Subjects · Std 1–12",
  "Hindi",
  "Phonics · Level-based",
  "Commerce · Std 11–12",
  "Phonics Teacher Training",
  "Chess",
];

export default function SubjectsMarquee() {
  const doubled = [...subjects, ...subjects];

  return (
    <div className="border-y-2 border-navy-ink bg-navy py-4 overflow-hidden">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {doubled.map((subject, i) => (
          <span
            key={`${subject}-${i}`}
            className="text-cream/90 font-display text-lg font-medium tracking-wide"
          >
            {subject}
            <span className="ml-10 text-marigold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
