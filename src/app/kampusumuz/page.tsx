import React from "react";
import Image from "next/image";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import { FACILITIES, INSTITUTION_INFO } from "@/data/bcnData";
import { MapPin, Navigation, Phone, CheckCircle2, Building2, Shield, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Kampüsümüz & Fiziki Olanaklar | BCN Eğitim Kurumları",
  description: "12.000m² modern Madenler Çekmeköy kampüsü, STEM laboratuvarları, kütüphane, spor kompleksi ve yemekhane.",
};

export default function CampusPage() {
  return (
    <>
      <SubpageHero
        badge="Fiziki Olanaklar"
        title="Madenler / Çekmeköy Kampüsümüz"
        subtitle="12.000m² modern kapalı ve açık alana sahip, akıllı mimariyle tasarlanmış entegre eğitim yerleşkesi."
        bgImage="/images/bcn/campus-building-wide.jpg"
        breadcrumbs={[{ label: "Kampüsümüz" }]}
      />

      {/* Campus Introduction */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#1E3A8A] tracking-wider uppercase">
                GÜVENLİ & AKILLI MİMARİ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263D] leading-tight">
                Öğrenmeyi ve Sağlıklı Gelişimi Teşvik Eden Bir Yaşam Alanı
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  BCN Eğitim Kurumları Madenler Kampüsü; Ümraniye ve Çekmeköy'ün kesişim noktasında, İdealist Kent Caddesi üzerinde yer almaktadır. Depreme tam dayanıklı özel mühendislikle inşa edilen kampüsümüz, doğal gün ışığı alan ferah sınıfları ve akıllı havalandırma sistemleriyle öğrencilere sağlıklı bir nefes alanı sunar.
                </p>
                <p>
                  12.000 metrekarelik yerleşkemiz; anaokulu, ilkokul, ortaokul ve lise kademelerine ayrılmış özel katlar ve ortak sosyal alanlardan oluşmaktadır.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-slate-200/80 space-y-2 text-xs sm:text-sm">
                <div className="font-bold text-[#17263D] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>Açık Adres:</span>
                </div>
                <p className="text-slate-600">{INSTITUTION_INFO.address}</p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#1E3A8A]">
                  <a href={INSTITUTION_INFO.googleMapsUrl} target="_blank" rel="noreferrer" className="hover:underline">
                    Google Maps'te Aç →
                  </a>
                  <span>•</span>
                  <span>Çekmeköy Metro İstasyonu Yakını</span>
                  <span>•</span>
                  <span>Anadolu Yakası Servis Ağı</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <Image
                  src="/images/bcn/campus-facade-1.jpg"
                  alt="Kampüs Dış Görünüm"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* All Facilities Grid */}
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17263D]">
                Kampüs Birimlerimiz ve Olanaklarımız
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                Öğrencilerimizin akademik, sanatsal ve sportif potansiyelini besleyen zengin altyapımız.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FACILITIES.map((fac) => (
                <div
                  key={fac.id}
                  className="bg-[#F7F8FA] rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group flex flex-col justify-between"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={fac.image}
                      alt={fac.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-white/90 text-[#17263D] text-[11px] font-bold">
                        {fac.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h4 className="text-lg font-bold">{fac.name}</h4>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {fac.description}
                    </p>

                    <div className="pt-3 border-t border-slate-200 space-y-1.5">
                      {fac.highlights.map((h, i) => (
                        <div key={i} className="text-[11px] text-slate-500 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
