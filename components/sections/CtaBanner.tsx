import Button from "@/components/ui/Button";
import Accent from "@/components/ui/Accent";
import MapEmbed from "@/components/sections/MapEmbed";
import { branches } from "@/data/branches";

export default function CtaBanner() {
  return (
    <section className="band border-y-2 border-navy-ink bg-navy py-16 text-cream">
      <div className="band-inner">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
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

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {branches.map((b) => (
            <div key={b.name}>
              <p className="font-display text-lg font-medium text-marigold">
                {b.name} branch
              </p>
              <p className="mt-1 text-sm text-cream/70">{b.address}</p>
              <p className="mt-1 text-sm">
                <a href={b.phoneHref} className="hover:text-marigold">
                  {b.phone}
                </a>
              </p>
              <div className="mt-4">
                <MapEmbed branch={b} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
