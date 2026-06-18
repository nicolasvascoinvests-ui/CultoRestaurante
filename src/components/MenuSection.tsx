import { menu, menuFlipbookNote, type MenuItem } from "@/lib/menu";
import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import SpiceLegend from "./SpiceLegend";
import Reveal from "./Reveal";
import MenuReveal from "./MenuReveal";
import PapelPicado from "./PapelPicado";
import WhatsappButton from "./WhatsappButton";
import { ArrowRightIcon } from "./icons";

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <li className="group py-4">
      <div className="flex items-baseline gap-3">
        <h4 className="font-display text-lg font-medium text-tinta">{item.name}</h4>
        <span
          className="mb-1 hidden flex-1 self-end border-b border-dotted border-tinta/25 sm:block"
          aria-hidden="true"
        />
        <span className="whitespace-nowrap font-body text-base font-semibold text-rojo">
          {item.price}
          {item.confirm ? <span className="ml-1 align-super text-[0.6rem] text-rojo">*</span> : null}
        </span>
      </div>
      <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-tinta/60">{item.description}</p>
    </li>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="relative scroll-mt-20 bg-lino py-24 sm:py-32">
      <PapelPicado count={16} className="absolute inset-x-0 top-0 z-10" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="menu-heading"
          eyebrow="Nuestra carta"
          title={<>El menú</>}
          intro="Cocina mexicana de autor: tacos, birria, quesadillas y antojos preparados con ingredientes frescos y recetas auténticas. Precios en pesos colombianos."
        />

        {/* Tap the drawn carta to drop the whole menu down */}
        <MenuReveal>
          {/* Spice legend */}
          <Reveal delay={0.05}>
            <SpiceLegend className="mx-auto max-w-3xl" />
          </Reveal>

          {/* Category quick-nav */}
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {menu.map((cat) => (
              <a
                key={cat.id}
                href={`#menu-${cat.id}`}
                className="inline-block rounded-full border border-tinta/15 bg-lino-soft/70 px-4 py-2 text-sm font-medium text-tinta/75 transition-colors hover:border-verde hover:text-verde"
              >
                {cat.title}
              </a>
            ))}
          </div>

          {/* Categories */}
          <div className="mt-16 space-y-20">
            {menu.map((cat) => (
              <Reveal key={cat.id}>
                <div id={`menu-${cat.id}`} className="scroll-mt-40">
                  <div className="text-center">
                    <p className="eyebrow text-rojo">{cat.kicker}</p>
                    <h3 className="mt-2 font-display text-3xl font-semibold text-tinta sm:text-4xl">
                      {cat.title}
                    </h3>
                    {cat.note ? (
                      <p className="mt-2 text-sm italic text-tinta/55">{cat.note}</p>
                    ) : null}
                    <span className="rule-mex mt-4 flex justify-center" aria-hidden="true">
                      <span className="inline-block h-1.5 w-1.5 rotate-45 bg-barro" />
                    </span>
                  </div>

                  <ul className="mt-8 grid gap-x-12 divide-y divide-tinta/10 sm:grid-cols-2 sm:divide-y-0 sm:[&>li]:border-b sm:[&>li]:border-tinta/10">
                    {cat.items.map((item) => (
                      <MenuRow key={item.name} item={item} />
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Order CTA — close the funnel right after browsing */}
          <Reveal className="mt-16 flex justify-center">
            <WhatsappButton size="lg" label="¿Listo para pedir? Escríbenos" />
          </Reveal>

          {/* Price disclaimer */}
          <p className="mt-10 text-center text-xs text-tinta/70">
            Precios en pesos colombianos (COP), sujetos a cambios. Confírmalos al hacer tu pedido.
          </p>

          {/* Flipbook link */}
          <Reveal className="mt-8 flex justify-center">
            <a
              href={site.menuFlipbook}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-tinta/20 px-7 py-3.5 text-sm font-semibold text-tinta transition-all duration-300 hover:-translate-y-0.5 hover:border-rojo hover:text-rojo"
            >
              {menuFlipbookNote}
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </MenuReveal>
      </div>
    </section>
  );
}
