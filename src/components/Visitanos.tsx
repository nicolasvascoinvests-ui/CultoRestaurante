import {
  site,
  googleMapsEmbed,
  googleMapsLink,
  whatsappLink,
  whatsappDefaultMessage,
} from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import WhatsappButton from "./WhatsappButton";
import PapelPicado from "./PapelPicado";
import { MapPinIcon, ClockIcon, PhoneIcon, InstagramIcon } from "./icons";

export default function Visitanos() {
  return (
    <section id="visitanos" className="relative scroll-mt-20 bg-lino py-24 sm:py-32">
      <PapelPicado count={16} className="absolute inset-x-0 top-0 z-10" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Visítanos"
          title={<>Te esperamos en Envigado</>}
          intro="Ven a vivir la experiencia a la mesa, o pide a domicilio y llévate la fiesta a casa."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Info */}
          <Reveal className="flex flex-col gap-6">
            {/* Address */}
            <div className="flex gap-4 rounded-2xl border border-tinta/10 bg-lino-soft/60 p-6">
              <MapPinIcon className="mt-0.5 h-6 w-6 shrink-0 text-rojo" />
              <div>
                <h3 className="font-display text-xl text-tinta">Dirección</h3>
                <p className="mt-1.5 text-tinta/70">{site.address.full}</p>
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-2 inline-block text-sm font-medium text-verde"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 rounded-2xl border border-tinta/10 bg-lino-soft/60 p-6">
              <ClockIcon className="mt-0.5 h-6 w-6 shrink-0 text-rojo" />
              <div className="w-full">
                <h3 className="font-display text-xl text-tinta">Horario</h3>
                <ul className="mt-2 space-y-1.5">
                  {site.hours.map((h) => (
                    <li key={h.label} className="flex flex-wrap justify-between gap-x-4 text-tinta/70">
                      <span>{h.label}</span>
                      <span className="font-medium text-tinta">{h.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact row */}
            <div className="flex gap-4 rounded-2xl border border-tinta/10 bg-lino-soft/60 p-6">
              <PhoneIcon className="mt-0.5 h-6 w-6 shrink-0 text-rojo" />
              <div>
                <h3 className="font-display text-xl text-tinta">Contacto</h3>
                <a
                  href={`tel:${site.phoneE164}`}
                  className="link-underline mt-1.5 block text-tinta/70 hover:text-verde"
                >
                  {site.phoneDisplay}
                </a>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-verde"
                >
                  <InstagramIcon className="h-4 w-4" />
                  {site.instagram.handle}
                </a>
              </div>
            </div>

            {/* Delivery CTA */}
            <div className="rounded-2xl bg-tinta p-6 text-lino">
              <h3 className="font-display text-xl">¿Prefieres domicilio?</h3>
              <p className="mt-1.5 text-sm text-lino/70">
                Haz tu pedido por WhatsApp y te lo llevamos a casa.
              </p>
              <WhatsappButton
                variant="cream"
                className="mt-4"
                message={whatsappDefaultMessage}
              />
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.1} className="min-h-[320px]">
            <div className="h-full overflow-hidden rounded-2xl border border-tinta/10 shadow-card">
              <iframe
                title="Ubicación de El Culto Cocina en Envigado"
                src={googleMapsEmbed}
                className="h-full min-h-[360px] w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>

        <p className="mt-6 text-center text-sm text-tinta/70">
          ¿Tienes dudas o quieres reservar? Escríbenos por WhatsApp y con gusto te ayudamos.
        </p>

        <noscript>
          <p className="mt-4 text-center text-sm text-tinta/60">
            Escríbenos por WhatsApp al {site.phoneDisplay} ·{" "}
            <a className="underline" href={whatsappLink()}>
              wa.me/{site.whatsapp}
            </a>
          </p>
        </noscript>
      </div>
    </section>
  );
}
