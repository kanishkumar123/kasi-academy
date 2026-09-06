"use client";

import { useEffect, useRef } from "react";
import { ensureGsapRegistered, prefersReducedMotion } from "@/lib/motion";

// A hand-drawn-style underline that draws itself in — used sparingly as the
// site's signature accent (nods to the red-pen mark on a report card).
export default function ChalkUnderline({
  className = "",
  color = "var(--color-marigold)",
  delay = 0,
}: {
  className?: string;
  color?: string;
  delay?: number;
}) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;

    if (prefersReducedMotion()) {
      path.style.strokeDashoffset = "0";
      return;
    }

    path.style.strokeDashoffset = `${length}`;
    const gsap = ensureGsapRegistered();
    const tween = gsap.to(path, {
      strokeDashoffset: 0,
      duration: 0.7,
      delay,
      ease: "power2.out",
    });

    return () => {
      tween.kill();
    };
  }, [delay]);

  return (
    <svg
      viewBox="0 0 300 16"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        ref={pathRef}
        d="M2 9.5C60 3, 120 13, 150 8S 240 3, 298 10"
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
