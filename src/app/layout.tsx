import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ConditionalFooter from "@/components/ConditionalFooter";
import AdmissionModal from "@/components/AdmissionModal";
import QuickContactFloating from "@/components/QuickContactFloating";
import SmartWebAssistant from "@/components/SmartWebAssistant";
import { ModalProvider } from "@/context/ModalContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BCN Eğitim Kurumları | Modern International School & College",
  description:
    "BCN Eğitim Kurumları; Çekmeköy-Ümraniye kampüsünde anaokulu, ilkokul, ortaokul, Anadolu ve Fen Lisesi kademelerinde IB PYP, OSSD Kanada Çift Diploması, AP ve yapay zekâ destekli uluslararası eğitim modeli sunar.",
  keywords: [
    "BCN Eğitim Kurumları",
    "BCN College",
    "Çekmeköy özel okul",
    "Ümraniye özel okul",
    "IB PYP aday okul",
    "Kanada çift diploma OSSD",
    "Advanced Placement lise",
    "Aurelia Preschool",
    "STEM olimpiyat dünya şampiyonu",
    "LGS hazırlık koleji",
  ],
  authors: [{ name: "BCN Eğitim Kurumları" }],
  openGraph: {
    title: "BCN Eğitim Kurumları | Modern International School",
    description:
      "Akademik başarıyı, uluslararası bakış açısını ve zihinsel disiplini bir araya getiren çağdaş eğitim ekosistemi.",
    url: "https://bcnegitimkurumlari.k12.tr",
    siteName: "BCN Eğitim Kurumları",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${plusJakartaSans.variable} font-sans`}>
      <head>
        <link rel="icon" href="/images/bcn/logo-icon.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#17263D] antialiased selection:bg-[#17263D] selection:text-white">
        <ModalProvider>
          <Header />
          <main className="flex-grow pt-[58px] md:pt-[89px]">{children}</main>
          <ConditionalFooter />
          <AdmissionModal />
          <QuickContactFloating />
          <SmartWebAssistant />
        </ModalProvider>
      </body>
    </html>
  );
}
