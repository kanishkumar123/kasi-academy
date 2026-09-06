export default function MapEmbed() {
  return (
    <div className="border-2 border-navy-ink">
      <iframe
        title="Kasi Tuition Centre location — Kamaraj Nagar, Choolaimedu, Chennai"
        src="https://www.google.com/maps?q=Choolaimedu,Chennai&output=embed"
        width="100%"
        height="420"
        style={{ border: 0, display: "block" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
