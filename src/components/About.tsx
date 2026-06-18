import Image from "next/image";
import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import TomatoMark from "./TomatoMark";
import PapelPicado from "./PapelPicado";

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative scroll-mt-20 overflow-hidden bg-tinta py-24 text-lino sm:py-32"
    >
      <PapelPicado dark count={16} className="absolute inset-x-0 top-0 z-10" />

      {/* ambient warmth */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 opacity-70">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-rojo/25 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-barro/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Story */}
          <div>
            <SectionHeading
              align="left"
              tone="light"
              eyebrow="Nosotros"
              title={
                <>
                  Un culto a la comida,
                  <br />
                  <span className="italic text-maiz">con origen mexicano</span>
                </>
              }
            />
            <Reveal delay={0.1}>
              <p className="mt-7 text-lg leading-relaxed text-lino/80">
                Nacimos en 2021 y, como su nombre lo indica, somos un culto a la comida con
                origen mexicano: una experiencia de sabores con ingredientes frescos, recetas
                auténticas, productos de alta calidad y servicio a la mesa.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 text-lg leading-relaxed text-lino/80">
                Transmitimos una emoción sensorial en cada bocado, a través de nuestras técnicas
                culinarias y los colores y sabores vibrantes de México. Disfruta de una fiesta de
                sabores que deleitarán todos tus sentidos.
              </p>
            </Reveal>
          </div>

          {/* Framed image */}
          <Reveal delay={0.1}>
            <figure className="relative mx-auto max-w-sm">
              <div className="overflow-hidden rounded-[1.6rem] border-[7px] border-lino/95 shadow-plate">
                <Image
                  src="/images/bowl-mexicano.jpg"
                  alt="Bowl mexicano fresco con aguacate, arroz, pico de gallo y nachos"
                  width={560}
                  height={560}
                  sizes="(max-width: 1024px) 80vw, 400px"
                  className="h-full w-full object-cover"
                />
              </div>
              <span
                aria-hidden="true"
                className="absolute -right-4 -top-4 hidden h-16 w-16 text-maiz/70 sm:block"
              >
                <TomatoMark draw={false} strokeWidth={3} className="h-full w-full" />
              </span>
            </figure>
          </Reveal>
        </div>

        {/* Manifesto */}
        <Reveal className="mt-20">
          <blockquote className="mx-auto max-w-3xl text-center">
            <span aria-hidden="true" className="font-display text-6xl leading-none text-maiz">
              “
            </span>
            <p className="mt-2 font-display text-2xl font-medium italic leading-snug text-lino sm:text-[1.7rem]">
              El restaurante Culto Cocina viene del acto de restaurar: regresar a lo esencial,
              recomponer el alma y honrar el momento presente. Aquí no solo se viene a comer; se
              viene a detener el tiempo, a sentarse con uno mismo y a elegir el amor propio como
              ingrediente principal.
            </p>
            <p className="mt-6 text-base leading-relaxed text-lino/70">
              Nuestro compromiso no se centra en lo llamativo, sino en el trabajo cuidadoso que
              garantiza calidad en cada preparación. Porque a veces, lo único que necesitamos es una
              mesa, un buen plato… y un lugar que nos recuerde que también merecemos ser cuidados.
            </p>
            <footer className="mt-8">
              <span className="rule-mex flex justify-center text-maiz" aria-hidden="true">
                <span className="inline-block h-1.5 w-1.5 rotate-45 bg-maiz" />
              </span>
              <p className="mt-4 font-display text-lg text-lino">{site.chef.title}</p>
              <a
                href={site.chef.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm tracking-wide text-maiz"
              >
                {site.chef.handle}
              </a>
            </footer>
          </blockquote>
        </Reveal>

        {/* English disclosure — light bilingual touch */}
        <Reveal className="mt-12 flex justify-center">
          <details className="group w-full max-w-2xl rounded-2xl border border-lino/15 bg-lino/5 px-6 py-4">
            <summary className="cursor-pointer list-none rounded text-sm font-medium tracking-wide text-lino/70 transition-colors hover:text-maiz focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-maiz">
              <span className="inline-flex items-center gap-2">
                Read our story in English
                <span className="transition-transform duration-300 group-open:rotate-90">→</span>
              </span>
            </summary>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-lino/65">
              <p>
                We were born in 2021 and, as the name suggests, we are a cult to food of Mexican
                origin — an experience of flavors built on fresh ingredients and authentic recipes,
                high-quality products and true table service. We convey a sensory emotion in every
                bite, through our culinary techniques and the vibrant colors and flavors of Mexico.
              </p>
              <p>
                Culto Cocina comes from the act of restoring: returning to the essential and honoring
                the present moment. Because sometimes, all we need is a table, a good plate… and a
                place that reminds us that we, too, deserve to be cared for.
              </p>
            </div>
          </details>
        </Reveal>
      </div>
    </section>
  );
}
