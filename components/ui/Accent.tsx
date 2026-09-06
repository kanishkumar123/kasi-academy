import type { ReactNode } from "react";

// The one word in a heading that carries its meaning, set in handwriting.
// Sized up slightly and nudged onto the baseline so it reads as a natural
// part of the sentence rather than a different typesetting.
export default function Accent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-hand inline-block align-baseline text-[1.18em] leading-[0.8] tracking-tight text-marigold-deep ${className}`}
    >
      {children}
    </span>
  );
}
