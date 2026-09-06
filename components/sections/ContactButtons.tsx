import { Phone, MessageCircle, MapPin, Clock3 } from "lucide-react";

const rows = [
  {
    icon: Phone,
    label: "Call us",
    value: "63811 90825",
    href: "tel:6381190825",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp us",
    value: "Message directly",
    href: "https://wa.me/916381190825",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Kasi Tuition Centre, Kamaraj Nagar, Choolaimedu, Chennai",
  },
  {
    icon: Clock3,
    label: "Batch timings",
    value: "Monday – Saturday, morning & evening batches",
  },
];

export default function ContactButtons() {
  return (
    <div>
      {rows.map((row) => {
        const Icon = row.icon;
        const inner = (
          <div className="ledger-row grid grid-cols-[2.5rem_1fr] items-center gap-5 py-6">
            <Icon size={22} className="text-marigold-deep" />
            <div>
              <p className="text-sm text-ink-muted">{row.label}</p>
              <p className="font-display text-lg font-medium text-navy-ink">{row.value}</p>
            </div>
          </div>
        );

        if (!row.href) {
          return <div key={row.label}>{inner}</div>;
        }

        return (
          <a
            key={row.label}
            href={row.href}
            target={row.href.startsWith("http") ? "_blank" : undefined}
            rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="block transition-colors hover:bg-marigold-pale/40"
          >
            {inner}
          </a>
        );
      })}
    </div>
  );
}
