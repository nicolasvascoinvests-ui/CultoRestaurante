import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// CSP tuned for a static marketing site: Next/Motion need inline scripts+styles,
// next/font self-hosts (font-src 'self'), the grain texture is a data: SVG,
// and the only third-party frame is the Google Maps embed.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "frame-src https://www.google.com https://maps.google.com",
  "connect-src 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 828, 1080, 1280, 1920],
    imageSizes: [180, 260, 280, 320, 420, 560],
  },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      {
        // /_next/static is already immutable-cached by the host (e.g. Vercel);
        // we only need a sensible TTL for the public food images.
        source: "/images/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000" }],
      },
    ];
  },
};

export default nextConfig;

// Enables getCloudflareContext() during `next dev`; no-op in production builds.
initOpenNextCloudflareForDev();
