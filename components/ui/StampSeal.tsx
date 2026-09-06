export default function StampSeal({
  className = "",
  line1 = "TRUSTED SINCE",
  line2 = "DAY ONE",
}: {
  className?: string;
  line1?: string;
  line2?: string;
}) {
  return (
    <div
      className={`flex h-28 w-28 shrink-0 -rotate-6 items-center justify-center rounded-full border-2 border-dashed border-marigold bg-navy-ink/95 text-center ${className}`}
      aria-hidden="true"
    >
      <p className="px-3 font-display text-[11px] font-semibold leading-tight tracking-[0.14em] text-cream">
        {line1}
        <br />
        <span className="text-marigold">★</span>
        <br />
        {line2}
      </p>
    </div>
  );
}
