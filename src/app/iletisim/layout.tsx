import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim & Ulaşım | BCN Eğitim Kurumları",
  description: "Madenler / Çekmeköy kampüsümüzün adresi, telefon ve e-posta bilgileri, ulaşım rehberi ve iletişim formu.",
  alternates: { canonical: "/iletisim" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
