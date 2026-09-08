import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { branches } from "@/data/branches";

export default function Footer() {
  return (
    <footer className="mt-28 border-t-2 border-navy-ink bg-navy text-cream">
      <div className="band">
        <div className="band-inner grid gap-10 py-14 sm:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cream/30 font-display text-base font-semibold text-marigold">
                K
              </span>
              <span className="font-display text-lg font-medium">Kasi Academy</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">
              All subjects, Std 1 to 12 — plus Hindi, level-based Phonics, Commerce,
              teacher training and Chess, taught in one neighbourhood classroom.
            </p>
          </div>

          <div>
            <p className="border-b border-cream/20 pb-2 text-sm font-semibold text-marigold">
              Quick links
            </p>
            <ul className="mt-3 space-y-2.5 text-sm text-cream/80">
              <li><Link href="/programs" className="hover:text-marigold">Programs</Link></li>
              <li><Link href="/about" className="hover:text-marigold">About</Link></li>
              <li><Link href="/contact" className="hover:text-marigold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="border-b border-cream/20 pb-2 text-sm font-semibold text-marigold">
              Visit us
            </p>
            <ul className="mt-3 space-y-4 text-sm text-cream/80">
              {branches.map((b) => (
                <li key={b.name} className="space-y-1.5">
                  <p className="font-semibold text-cream/90">{b.name} branch</p>
                  <p className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-marigold" />
                    {b.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={16} className="shrink-0 text-marigold" />
                    <a href={b.phoneHref} className="hover:text-marigold">
                      {b.phone}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/15 py-5 text-center text-xs text-cream/45">
        © {new Date().getFullYear()} Kasi Academy. All rights reserved.
      </div>
    </footer>
  );
}
