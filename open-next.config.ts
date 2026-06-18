import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Static-first marketing site: default in-memory cache is fine (no ISR/R2 needed yet).
// To add on-demand revalidation later, wire an R2 incremental cache here.
export default defineCloudflareConfig();
