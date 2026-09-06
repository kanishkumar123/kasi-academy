import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "stamp" | "link";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "stamp",
  className = "",
}: ButtonProps) {
  const isExternal =
    href.startsWith("http") || href.startsWith("tel:") || href.startsWith("https://wa.me");

  const content =
    variant === "stamp" ? (
      <span
        className={`stamp-btn inline-flex items-center gap-2 border-2 border-navy-ink bg-marigold px-6 py-3 text-[15px] font-semibold text-navy-ink cursor-pointer ${className}`}
      >
        {children}
      </span>
    ) : (
      <span
        className={`group inline-flex items-center gap-1.5 border-b-2 border-navy-ink pb-0.5 text-[15px] font-semibold text-navy-ink cursor-pointer ${className}`}
      >
        {children}
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    );

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
