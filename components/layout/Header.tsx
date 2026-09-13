"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-navy-ink bg-cream">
      <div className="band">
        <div className="band-inner flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-navy-ink bg-cream">
              <Image
                src="/logo.png"
                alt="Kasi Tuition Centre logo"
                width={40}
                height={40}
                className="h-8 w-8 object-contain"
              />
            </span>
            <span className="font-display text-lg font-medium leading-tight text-navy-ink">
              Kasi
              <br className="hidden sm:block" /> Tuition Centre
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`pb-1 text-[15px] font-semibold border-b-2 transition-colors ${
                    active
                      ? "border-marigold-deep text-navy-ink"
                      : "border-transparent text-ink-muted hover:text-navy-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button href="/contact" className="py-2.5! px-5! text-sm!">
              Enroll now
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex h-10 w-10 items-center justify-center border-2 border-navy-ink text-navy-ink cursor-pointer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t-2 border-navy-ink bg-paper">
          <div className="band py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`ledger-row flex items-center py-3.5 text-[15px] font-semibold ${
                  pathname === link.href ? "text-marigold-deep" : "text-navy-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="py-4">
              <Button
                href="/contact"
                className="w-full justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Enroll now
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
