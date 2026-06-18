import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Full-bleed atmospheric quote band. The photo sits behind a heavy ink scrim,
 * functioning as warm mood texture for the brand line — not a claim about the venue.
 */
export default function QuoteBand() {
  return (
    <section className="relative isolate overflow-hidden" aria-label="Una fiesta de sabores">
      <Image
        src="/images/ambiente.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-tinta/75" />
      <div className="absolute inset-0 bg-linear-to-t from-tinta/80 via-transparent to-tinta/40" />

      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center sm:py-36">
        <Reveal>
          <span className="rule-mex flex justify-center text-maiz" aria-hidden="true">
            <span className="inline-block h-1.5 w-1.5 rotate-45 bg-maiz" />
          </span>
          <p className="mt-6 font-display text-3xl italic leading-snug text-lino sm:text-[2.5rem]">
            Una fiesta de sabores que deleitan todos tus sentidos.
          </p>
          <p className="eyebrow mt-6 text-maiz">El Culto Cocina · Envigado</p>
        </Reveal>
      </div>
    </section>
  );
}
