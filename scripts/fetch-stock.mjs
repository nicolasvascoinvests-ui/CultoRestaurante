// Fetch free, commercially-licensed supporting photos from Pexels.
// Free key (no card): https://www.pexels.com/api/
//
//   1. Put the key in .env  ->  PEXELS_API_KEY=...
//   2. node --env-file=.env scripts/fetch-stock.mjs
//
// Downloads a few candidates per slot into _stock_review/ so we can pick the
// best, plus credits.json (Pexels needs no attribution, but it's nice to keep).

import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "_stock_review");

const KEY = process.env.PEXELS_API_KEY;
if (!KEY) {
  console.error("\n✗ Missing PEXELS_API_KEY. Add it to .env, then:\n  node --env-file=.env scripts/fetch-stock.mjs\n");
  process.exit(1);
}

// slot = what we want; query = Pexels search; we grab the top few candidates.
const SLOTS = [
  { slot: "guacamole", query: "guacamole molcajete", orientation: "square", n: 3 },
  { slot: "tacos", query: "tacos al pastor", orientation: "square", n: 3 },
  { slot: "spread", query: "mexican food table", orientation: "landscape", n: 3 },
  { slot: "ingredients", query: "chili peppers lime cilantro", orientation: "landscape", n: 3 },
  { slot: "ambiente", query: "mexican restaurant interior", orientation: "landscape", n: 3 },
];

async function search(query, orientation, n) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&orientation=${orientation}&per_page=${n}&size=large`;
  const res = await fetch(url, { headers: { Authorization: KEY } });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const json = await res.json();
  return json.photos ?? [];
}

async function download(url, file) {
  const res = await fetch(url);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(file, buf);
}

(async () => {
  await mkdir(OUT, { recursive: true });
  const credits = [];
  console.log(`\nFetching Pexels candidates into _stock_review/ ...\n`);
  for (const s of SLOTS) {
    try {
      const photos = await search(s.query, s.orientation, s.n);
      for (let i = 0; i < photos.length; i++) {
        const p = photos[i];
        const src = p.src.large2x || p.src.large || p.src.original;
        const file = join(OUT, `${s.slot}-${i + 1}.jpg`);
        await download(src, file);
        credits.push({ slot: s.slot, candidate: i + 1, photographer: p.photographer, url: p.url, alt: p.alt });
        console.log(`  ✓ ${s.slot}-${i + 1}  (by ${p.photographer})`);
      }
    } catch (err) {
      console.log(`  ✗ ${s.slot}: ${err.message}`);
    }
  }
  await writeFile(join(OUT, "credits.json"), JSON.stringify(credits, null, 2));
  console.log(`\nDone. Review images in _stock_review/, credits in _stock_review/credits.json\n`);
})();
