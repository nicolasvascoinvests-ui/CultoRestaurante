import { site } from "./site";
import { menu } from "./menu";

/** "$9.500" -> 9500 (COP, integer). Returns undefined for non-numeric prices. */
function priceToNumber(price: string): number | undefined {
  const n = Number(price.replace(/[^0-9]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : undefined;
}

const dayMap: Record<string, string> = {
  Sunday: "https://schema.org/Sunday",
  Monday: "https://schema.org/Monday",
  Tuesday: "https://schema.org/Tuesday",
  Wednesday: "https://schema.org/Wednesday",
  Thursday: "https://schema.org/Thursday",
  Friday: "https://schema.org/Friday",
  Saturday: "https://schema.org/Saturday",
};

/** Restaurant + Menu JSON-LD for local SEO and rich results. */
export function buildRestaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}/#restaurant`,
    name: site.name,
    alternateName: site.shortName,
    description:
      "Restaurante de cocina mexicana de autor en Envigado, Antioquia. Tacos, birria, quesadillas y cocina de autor con sabor a México. Pide a domicilio por WhatsApp.",
    url: site.url,
    telephone: site.phoneE164,
    image: [`${site.url}/og-image.jpg`, `${site.url}/images/tacos-birrieros.jpg`],
    logo: `${site.url}/brand/culto-logo-ink.png`,
    servesCuisine: ["Mexican", "Mexicana", "Cocina de autor"],
    priceRange: site.priceRange,
    currenciesAccepted: "COP",
    foundingDate: String(site.founded),
    acceptsReservations: "True",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${site.geo.latitude},${site.geo.longitude}`,
    openingHoursSpecification: site.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map((d) => dayMap[d]),
      opens: h.opens,
      closes: h.closes,
    })),
    menu: `${site.url}/#menu`,
    sameAs: [site.instagram.url, site.chef.url],
    hasMenu: {
      "@type": "Menu",
      name: "Menú El Culto Cocina",
      inLanguage: "es",
      hasMenuSection: menu.map((cat) => ({
        "@type": "MenuSection",
        name: cat.title,
        hasMenuItem: cat.items.map((item) => {
          const price = priceToNumber(item.price);
          return {
            "@type": "MenuItem",
            name: item.name,
            description: item.description,
            ...(price !== undefined
              ? {
                  offers: {
                    "@type": "Offer",
                    price,
                    priceCurrency: "COP",
                    availability: "https://schema.org/InStock",
                  },
                }
              : {}),
          };
        }),
      })),
    },
  };
}
