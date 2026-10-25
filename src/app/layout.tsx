import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdmissionModal from "@/components/AdmissionModal";
import QuickContactFloating from "@/components/QuickContactFloating";
import SmartWebAssistant from "@/components/SmartWebAssistant";
import MotionProvider from "@/components/MotionProvider";
import { ModalProvider } from "@/context/ModalContext";
import { INSTITUTION_INFO } from "@/data/bcnData";
import { SITE_URL } from "@/lib/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin", "latin-ext"],
  variable: "--font-cinzel",
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "BCN Koleji | Çekmeköy Anaokulu, İlkokul, Ortaokul ve Lise",
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
    title: "BCN Koleji | Çekmeköy Anaokulu, İlkokul, Ortaokul ve Lise",
    description:
      "Akademik başarıyı, uluslararası bakış açısını ve zihinsel disiplini bir araya getiren çağdaş eğitim ekosistemi.",
    url: "/",
    siteName: "BCN Eğitim Kurumları",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/bcn/campus-facade-1.jpg",
        width: 2560,
        height: 1440,
        alt: "BCN Eğitim Kurumları Madenler / Çekmeköy Kampüsü",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/bcn/campus-facade-1.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: INSTITUTION_INFO.name,
  alternateName: [INSTITUTION_INFO.englishName, INSTITUTION_INFO.shortName],
  url: SITE_URL,
  logo: `${SITE_URL}/images/bcn/logo-crest-192.png`,
  image: `${SITE_URL}/images/bcn/campus-facade-1.jpg`,
  telephone: INSTITUTION_INFO.phoneFormatted,
  email: INSTITUTION_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Madenler Mahallesi, İdealist Kent Caddesi No:5/A",
    postalCode: "34776",
    addressLocality: "Çekmeköy",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: INSTITUTION_INFO.coordinates.lat,
    longitude: INSTITUTION_INFO.coordinates.lng,
  },
  sameAs: Object.values(INSTITUTION_INFO.socials),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${plusJakartaSans.variable} ${cinzel.variable} font-sans`}>
      <body className="min-h-screen flex flex-col bg-white text-[#17263D] antialiased selection:bg-[#17263D] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:px-4 focus:py-3 focus:rounded-xl focus:bg-white focus:text-[#17263D] focus:font-bold focus:shadow-xl"
        >
          İçeriğe geç
        </a>
        <MotionProvider>
          <ModalProvider>
            <Header />
            <main id="icerik" tabIndex={-1} className="flex-grow pt-[58px] md:pt-[89px] focus:outline-none">{children}</main>
            <Footer />
            <AdmissionModal />
            <QuickContactFloating />
            <SmartWebAssistant />
          </ModalProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
