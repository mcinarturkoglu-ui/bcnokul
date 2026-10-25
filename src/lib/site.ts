// Canonical public origin used for metadata, sitemap and structured data.
// Override with NEXT_PUBLIC_SITE_URL when the site is served from another domain.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://bcnegitimkurumlari.k12.tr").replace(/\/$/, "");
