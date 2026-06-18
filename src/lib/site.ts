/**
 * Central source of truth for restaurant facts used across the site,
 * metadata, and JSON-LD. Verify ⚠️-flagged values before publishing.
 */

export const site = {
  name: "El Culto Cocina",
  shortName: "Culto Cocina",
  tagline: "Sabores que despiertan memorias",
  bioLine: "Cocina de autor con sabor a México",
  founded: 2021,
  cuisine: "Mexicana",
  priceRange: "$$",

  // Confirmed by owner (2026-06).
  address: {
    street: "Calle 46 Sur #46A-1, Zona 8",
    locality: "Envigado",
    region: "Antioquia",
    country: "Colombia",
    postalCode: "055421",
    full: "Calle 46 Sur #46A-1, Zona 8, Envigado, Antioquia",
  },

  // Approximate (geocoded to Calle 46 Sur, Envigado). Replace with the exact
  // lat/long from the Google Business Profile pin when available.
  geo: { latitude: 6.1657182, longitude: -75.5985178 },

  // Confirmed WhatsApp / orders line.
  phoneDisplay: "+57 323 319 6133",
  phoneE164: "+573233196133",
  whatsapp: "573233196133",

  instagram: {
    handle: "@culto_cocina",
    url: "https://instagram.com/culto_cocina",
  },
  chef: {
    handle: "@zuluaga_chef",
    url: "https://instagram.com/zuluaga_chef",
    title: "Chef y Fundador",
  },

  menuFlipbook: "https://heyzine.com/flip-book/a399c34ab4.html",

  // Sun–Thu 2:00 PM–10:00 PM · Fri–Sat 2:00 PM–10:45 PM
  hours: [
    { label: "Domingo a Jueves", value: "2:00 p. m. – 10:00 p. m." },
    { label: "Viernes y Sábado", value: "2:00 p. m. – 10:45 p. m." },
  ],

  // Used for openingHoursSpecification in JSON-LD
  openingHours: [
    { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], opens: "14:00", closes: "22:00" },
    { days: ["Friday", "Saturday"], opens: "14:00", closes: "22:45" },
  ],

  // Google Maps embed query — confirmed address.
  mapQuery: "El Culto Cocina, Calle 46 Sur #46A-1, Zona 8, Envigado, Antioquia",

  url: "https://elcultococina.com",
} as const;

/** Build a WhatsApp deep link with an optional prefilled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const whatsappDefaultMessage =
  "¡Hola, El Culto Cocina! 🌮 Quisiera hacer un pedido / reservar una mesa.";

export const googleMapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  site.mapQuery,
)}&output=embed`;

export const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.mapQuery,
)}`;

export const navLinks = [
  { href: "#menu", label: "Menú" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#visitanos", label: "Visítanos" },
] as const;
