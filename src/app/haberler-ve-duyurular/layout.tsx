import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haberler ve Duyurular | BCN Eğitim Kurumları",
  description: "BCN Eğitim Kurumları'ndan akademik başarılar, etkinlikler, öğrenci projeleri ve güncel duyurular.",
  alternates: { canonical: "/haberler-ve-duyurular" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
