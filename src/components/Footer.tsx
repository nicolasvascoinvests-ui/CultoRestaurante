import { site, navLinks, whatsappLink, whatsappDefaultMessage } from "@/lib/site";
import Logo from "./Logo";
import PapelPicado from "./PapelPicado";
import { InstagramIcon, WhatsappIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-tinta text-lino">
      <div className="px-4 pt-6">
        <PapelPicado count={18} still />
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-10 pt-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo tone="cream" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-lino/65">
              Cocina de autor con sabor a México. Sabores que despiertan memorias, en el corazón de
              Envigado, Antioquia.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={whatsappLink(whatsappDefaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pedir por WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-lino/10 text-lino transition-colors hover:bg-rojo"
              >
                <WhatsappIcon className="h-5 w-5" />
              </a>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de El Culto Cocina"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-lino/10 text-lino transition-colors hover:bg-barro"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Pie de página">
            <h2 className="eyebrow text-maiz">Explora</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="link-underline text-sm text-lino/75 hover:text-lino">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="eyebrow text-maiz">Contacto</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-lino/75">
              <li>{site.address.full}</li>
              <li>
                <a href={`tel:${site.phoneE164}`} className="link-underline hover:text-lino">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="pt-1 text-lino/55">Dom–Jue · 2:00–10:00 p. m.</li>
              <li className="text-lino/55">Vie–Sáb · 2:00–10:45 p. m.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-lino/10 pt-6 text-xs text-lino/45 sm:flex-row">
          <p>© {site.founded}–{new Date().getFullYear()} {site.name}. Hecho con cariño en Envigado.</p>
          <p>
            Cocina de autor con sabor a México ·{" "}
            <a
              href={site.chef.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-lino/60"
            >
              {site.chef.handle}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
