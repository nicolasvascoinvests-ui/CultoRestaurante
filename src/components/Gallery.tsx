import Image from "next/image";
import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import PapelPicado from "./PapelPicado";
import { InstagramIcon, ArrowRightIcon } from "./icons";

interface Shot {
  src: string;
  alt: string;
  caption: string;
  className: string;
  sizes: string;
}

const shots: Shot[] = [
  {
    src: "/images/tacos-birrieros.jpg",
    alt: "Trío de tacos birrieros dorados con consomé de birria y limón",
    caption: "Trío de Tacos Birrieros",
    className: "sm:col-span-2 sm:row-span-2",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 700px",
  },
  {
    src: "/images/bowl-mexicano.jpg",
    alt: "Bowl mexicano con aguacate, arroz, pico de gallo, pollo y nachos",
    caption: "Bowl Mexicano",
    className: "",
    sizes: "(max-width: 640px) 100vw, 33vw",
  },
  {
    src: "/images/tacos-surtido.jpg",
    alt: "Surtido de tacos coloridos sobre una mesa festiva con papel picado",
    caption: "Tacos de la casa",
    className: "",
    sizes: "(max-width: 640px) 100vw, 33vw",
  },
  {
    src: "/images/stock-tacos.jpg",
    alt: "Tacos mexicanos con limón y cilantro servidos en platos de barro",
    caption: "Tradición en cada bocado",
    className: "",
    sizes: "(max-width: 640px) 100vw, 33vw",
  },
  {
    src: "/images/stock-salsa.jpg",
    alt: "Salsa roja con chile, aguacate y limón, recién hecha",
    caption: "Chiles y frescura",
    className: "",
    sizes: "(max-width: 640px) 100vw, 33vw",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="relative scroll-mt-20 bg-lino-deep py-24 sm:py-32">
      <PapelPicado count={16} className="absolute inset-x-0 top-0 z-10" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Galería"
          title={<>Del fogón a tu mesa</>}
          intro="Color, técnica y producto fresco en cada plato. Una probadita de lo que te espera en El Culto Cocina."
        />

        <Reveal className="mt-14">
          <div className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:auto-rows-[220px] sm:grid-cols-3">
            {shots.map((shot) => (
              <figure
                key={shot.src}
                className={`group relative overflow-hidden rounded-2xl shadow-card ${shot.className}`}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes={shot.sizes}
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-tinta/70 via-tinta/0 to-transparent opacity-80" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <span className="font-display text-lg text-lino drop-shadow">{shot.caption}</span>
                </figcaption>
              </figure>
            ))}

            {/* Instagram CTA tile */}
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-verde p-5 text-lino shadow-card transition-colors hover:bg-verde-deep"
            >
              <InstagramIcon className="h-8 w-8" />
              <div>
                <p className="font-display text-xl leading-tight">Síguenos en Instagram</p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-lino/80">
                  {site.instagram.handle}
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </p>
              </div>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
