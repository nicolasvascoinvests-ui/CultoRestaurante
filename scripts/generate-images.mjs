// Generate brand-matched imagery for El Culto Cocina using Google's free
// Gemini image model. Free key (no card): https://aistudio.google.com/apikey
//
//   1. Put the key in .env  ->  GEMINI_API_KEY=...
//   2. node --env-file=.env scripts/generate-images.mjs
//
// Output: raw PNGs in public/images/ai/  (then run scripts/process-ai-images if needed)

import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "..", "public", "images", "ai");

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("\n✗ Missing GEMINI_API_KEY. Create .env from .env.example, then run:\n  node --env-file=.env scripts/generate-images.mjs\n");
  process.exit(1);
}

// Primary image model, with a fallback if the account/tier lacks it.
const MODELS = ["gemini-2.5-flash-image", "gemini-2.0-flash-preview-image-generation"];

// Shared style so everything matches the brand: warm, authentic, elegant, cream/terracotta.
const STYLE =
  "Authentic Mexican cuisine, professional editorial food photography, warm natural daylight, " +
  "shallow depth of field, rustic ceramic and warm wood, cream linen and terracotta tones, " +
  "appetizing, high detail, no text, no watermark, no people.";

// A small supporting set (2 food close-ups + 1 atmosphere + 1 texture) — these
// fill out the page around the restaurant's real dish photos, not replace them.
const PROMPTS = [
  { name: "guacamole", aspect: "1:1", prompt: "Overhead close-up of fresh guacamole in a black volcanic-stone molcajete with crisp tortilla chips, pico de gallo, lime wedges and cilantro." },
  { name: "tacos-al-pastor", aspect: "1:1", prompt: "Three tacos al pastor on small corn tortillas with marinated pork, charred pineapple, white onion and cilantro on a ceramic plate, close-up." },
  { name: "patio", aspect: "16:9", prompt: "A warm, inviting Mexican restaurant patio at golden hour: papel picado banners, string lights, potted plants and a colorful mural, empty rustic wooden tables." },
  { name: "ingredients", aspect: "16:9", prompt: "Top-down flat lay of fresh Mexican ingredients — red and green chiles, limes, cilantro, avocado, corn tortillas, dried guajillo chiles — on a cream linen surface." },
];

async function generateOne(model, item) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`;
  const body = {
    contents: [{ role: "user", parts: [{ text: `${item.prompt} ${STYLE} Aspect ratio ${item.aspect}.` }] }],
    generationConfig: { responseModalities: ["TEXT", "IMAGE"] },
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text.slice(0, 300)}`);
  }
  const json = await res.json();
  const parts = json?.candidates?.[0]?.content?.parts ?? [];
  const img = parts.find((p) => p.inlineData?.data);
  if (!img) {
    throw new Error(`no image in response: ${JSON.stringify(json).slice(0, 300)}`);
  }
  const ext = (img.inlineData.mimeType || "image/png").includes("jpeg") ? "jpg" : "png";
  const file = join(OUT_DIR, `${item.name}.${ext}`);
  await writeFile(file, Buffer.from(img.inlineData.data, "base64"));
  return file;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  await mkdir(OUT_DIR, { recursive: true });
  console.log(`\nGenerating ${PROMPTS.length} images into public/images/ai/ ...\n`);
  let ok = 0;
  for (const item of PROMPTS) {
    let done = false;
    for (const model of MODELS) {
      try {
        const file = await generateOne(model, item);
        console.log(`  ✓ ${item.name}  (${model})  -> ${file.split("public")[1]}`);
        ok++;
        done = true;
        break;
      } catch (err) {
        console.log(`  … ${item.name} via ${model} failed: ${err.message}`);
      }
    }
    if (!done) console.log(`  ✗ ${item.name}: all models failed`);
    await sleep(4000); // stay under the free-tier per-minute rate limit
  }
  console.log(`\nDone: ${ok}/${PROMPTS.length} generated.\n`);
})();
