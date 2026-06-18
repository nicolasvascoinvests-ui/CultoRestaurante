import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins, Cinzel } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { buildRestaurantJsonLd } from "@/lib/structured-data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-cinzel",
  display: "swap",
});

const description =
  "Cocina mexicana de autor en Envigado, Antioquia. Tacos, birria, quesadillas y sabores que despiertan memorias. Pide a domicilio por WhatsApp o visítanos.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "El Culto Cocina — Restaurante Mexicano de Autor en Envigado",
    template: "%s · El Culto Cocina",
  },
  description,
  applicationName: site.name,
  keywords: [
    "restaurante mexicano Envigado",
    "comida mexicana Envigado",
    "comida mexicana Medellín",
    "tacos en Envigado",
    "cocina de autor mexicana Medellín",
    "domicilios comida mexicana Envigado",
    "birria Envigado",
    "El Culto Cocina",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: site.url,
    siteName: site.name,
    title: "El Culto Cocina — Restaurante Mexicano de Autor en Envigado",
    description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tacos y platos de El Culto Cocina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Culto Cocina — Restaurante Mexicano de Autor en Envigado",
    description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "restaurant",
};

export const viewport: Viewport = {
  themeColor: "#f0e6dc",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = buildRestaurantJsonLd();

  return (
    <html
      lang="es"
      className={`${playfair.variable} ${poppins.variable} ${cinzel.variable}`}
    >
      <body className="min-h-dvh bg-lino text-tinta">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
