import type { Branch } from "@/data/branches";

export default function MapEmbed({ branch }: { branch: Branch }) {
  return (
    <div className="border-2 border-navy-ink">
      <iframe
        title={`Kasi Tuition Centre — ${branch.name} branch (${branch.address})`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(
          branch.mapQuery,
        )}&output=embed`}
        width="100%"
        height="420"
        style={{ border: 0, display: "block" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
