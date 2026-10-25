import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lider Ekibimiz & Yönetim | BCN Eğitim Kurumları",
  description: "Kurucumuz Adem Bican ve BCN Eğitim Kurumları akademik ve idari liderlik kadrosu.",
  alternates: { canonical: "/lider-ekibimiz" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
