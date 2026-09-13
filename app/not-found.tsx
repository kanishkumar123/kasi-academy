import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Accent from "@/components/ui/Accent";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="band flex min-h-[60vh] flex-col items-start justify-center py-20">
      <div className="band-inner max-w-lg">
        <p className="text-[13px] font-semibold text-marigold-deep">404</p>
        <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-navy-ink sm:text-5xl">
          That page isn&apos;t on <Accent>our register</Accent>.
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-ink-muted">
          The page you&apos;re looking for may have moved. Try the homepage, or
          get in touch if you were expecting to find something here.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-6">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="link">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
