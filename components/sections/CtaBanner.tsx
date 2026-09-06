import Button from "@/components/ui/Button";
import Accent from "@/components/ui/Accent";

export default function CtaBanner() {
  return (
    <section className="band border-y-2 border-navy-ink bg-navy py-16 text-cream">
      <div className="band-inner flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <h2 className="font-display text-3xl font-medium sm:text-4xl">
            Now <Accent className="text-marigold">open</Accent> for registration
          </h2>
          <p className="mt-2 max-w-md text-cream/70">
            Call or message us today to find the right batch for your child.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <Button href="tel:6381190825">Call 63811 90825</Button>
          <Button href="/contact" variant="link" className="text-cream! border-cream!">
            Visit us
          </Button>
        </div>
      </div>
    </section>
  );
}
