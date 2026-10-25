import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kayıt ve Kabul | BCN Eğitim Kurumları",
  description: "2026 - 2027 eğitim yılı ön kayıt, kampüs ziyaret randevusu, kayıt adımları ve sıkça sorulan sorular.",
  alternates: { canonical: "/kayit-ve-kabul" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
