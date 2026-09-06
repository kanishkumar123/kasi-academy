"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, CheckCircle2 } from "lucide-react";
import { programs, type Program } from "@/data/programs";

const accentText: Record<Program["accent"], string> = {
  navy: "text-navy",
  marigold: "text-marigold-deep",
  "chalk-green": "text-ledger-green",
};

function LedgerRow({
  program,
  index,
  expandable,
}: {
  program: Program;
  index: number;
  expandable: boolean;
}) {
  const [open, setOpen] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  const header = (
    <div className="grid grid-cols-[3rem_1fr_auto] items-center gap-4 py-5 sm:grid-cols-[3.5rem_1.4fr_1fr_auto] sm:gap-6">
      <span className="font-display text-lg text-ink-muted">{num}</span>
      <div>
        <h3 className="font-display text-xl font-medium text-navy-ink sm:text-2xl">
          {program.name}
        </h3>
        <p className={`text-sm font-semibold ${accentText[program.accent]}`}>
          {program.tagline}
        </p>
      </div>
      <p className="hidden text-sm text-ink-muted sm:block">{program.gradeRange}</p>
      {expandable ? (
        <Plus
          size={20}
          className={`justify-self-end text-navy-ink transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
      ) : (
        <span className="justify-self-end text-sm font-semibold text-navy-ink underline decoration-marigold decoration-2 underline-offset-4">
          View
        </span>
      )}
    </div>
  );

  if (!expandable) {
    return (
      <Link
        href={`/programs#${program.slug}`}
        id={program.slug}
        className="ledger-row block scroll-mt-24 px-1 transition-colors hover:bg-marigold-pale/40"
      >
        {header}
      </Link>
    );
  }

  return (
    <div id={program.slug} className="ledger-row scroll-mt-24 px-1">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full cursor-pointer text-left"
      >
        {header}
      </button>
      {open && (
        <div className="grid grid-cols-[3rem_1fr] gap-4 pb-6 sm:grid-cols-[3.5rem_1fr] sm:gap-6">
          <span />
          <div>
            <p className="max-w-2xl text-[15px] leading-relaxed text-ink-muted">
              {program.description}
            </p>
            <ul className="mt-4 space-y-2">
              {program.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-navy-ink">
                  <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${accentText[program.accent]}`} />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProgramLedger({
  limit,
  expandable = false,
}: {
  limit?: number;
  expandable?: boolean;
}) {
  const list = limit ? programs.slice(0, limit) : programs;

  return (
    <div>
      <div className="hidden grid-cols-[3.5rem_1.4fr_1fr_auto] gap-6 border-b-2 border-navy-ink px-1 pb-3 text-sm font-semibold text-ink-muted sm:grid">
        <span>No.</span>
        <span>Program</span>
        <span>For</span>
        <span />
      </div>
      {list.map((program, i) => (
        <LedgerRow key={program.slug} program={program} index={i} expandable={expandable} />
      ))}
    </div>
  );
}
