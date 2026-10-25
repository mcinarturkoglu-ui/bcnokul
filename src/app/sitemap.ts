import type { MetadataRoute } from "next";
import { LEVELS } from "@/data/bcnData";
import { SITE_URL } from "@/lib/site";

const STATIC_ROUTES = [
  "",
  "/hakkimizda",
  "/misyon-ve-vizyon",
  "/lider-ekibimiz",
  "/kademeler",
  "/uluslararasi-programlar",
  "/egitim-modelimiz",
  "/kampusumuz",
  "/ogrenci-yasami",
  "/basarilarimiz",
  "/haberler-ve-duyurular",
  "/kayit-ve-kabul",
  "/iletisim",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...STATIC_ROUTES.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified,
      changeFrequency: route === "" || route === "/haberler-ve-duyurular" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route === "/kayit-ve-kabul" || route === "/kademeler" ? 0.9 : 0.7,
    })),
    ...LEVELS.map((lvl) => ({
      url: `${SITE_URL}/kademeler/${lvl.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
