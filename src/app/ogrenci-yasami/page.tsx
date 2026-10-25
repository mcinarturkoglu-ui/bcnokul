import React from "react";
import Image from "next/image";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import { Palette, Activity, Globe, Leaf, BookOpen, Music, Code2, Users2 } from "lucide-react";

export const metadata = {
  title: "Öğrenci Yaşamı & Kulüpler | BCN Eğitim Kurumları",
  description: "Sanat, spor, robotik, MUN, sosyal sorumluluk ve kültür gezileriyle zenginleşen BCN öğrenci deneyimi.",
};

const CLUBS = [
  { name: "BCN Robotics & STEM Kulübü", desc: "First Lego League şampiyonlukları, otonom kodlama ve 3D tasarım.", icon: Code2 },
  { name: "Model United Nations (MUN)", desc: "İngilizce diplomasi simülasyonları, hitabet ve dünya sorunlarına çözümler.", icon: Globe },
  { name: "Müzik, Orkestra & Sahne Sanatları", desc: "Koro, bireysel enstrüman eğitimleri ve müzikal prodüksiyonlar.", icon: Music },
  { name: "Görsel Sanatlar & Seramik", desc: "Resim sergileri, heykel, seramik fırını ve yaratıcı tasarım atölyeleri.", icon: Palette },
  { name: "Basketbol, Voleybol & Yüzme", desc: "Lisanslı okul takımları, kondisyon ve turnuva hazırlık kampları.", icon: Activity },
  { name: "Felsefe & Münazara Topluluğu", desc: "Eleştirel düşünme, kanıt temelli tartışma ve kitap inceleme kulübü.", icon: BookOpen },
  { name: "Ekoloji & Sürdürülebilirlik", desc: "Sıfır atık, kompost üretimi ve okul bahçesinde permakültür tarım.", icon: Leaf },
  { name: "Sosyal Sorumluluk & Genç Liderler", desc: "Toplumsal fayda projeleri, kardeş okul destekleri ve yardım kampanyaları.", icon: Users2 }
];

export default function StudentLifePage() {
  return (
    <>
      <SubpageHero
        badge="Kampüs Deneyimi"
        title="Öğrenci Yaşamı & Kulüpler"
        subtitle="Zihinsel, bedensel ve sanatsal potansiyeli harekete geçiren 24'ten fazla aktif öğrenci kulübü ve zengin etkinlik takvimi."
        bgImage="/images/bcn/music-art-studio.jpg"
        breadcrumbs={[{ label: "Öğrenci Yaşamı" }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Top Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#1E3A8A] tracking-wider uppercase">
                ÇOK YÖNLÜ GELİŞİM
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263D] leading-tight">
                Sınıfın Ötesine Taşan İlham Verici Okul Hayatı
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  BCN Eğitim Kurumları'nda öğrenci yaşamı; her çocuğun kendi özgün tutkusunu keşfetmesi ve liderlik becerilerini geliştirmesi için tasarlanmıştır. Kulüp çalışmalarımız ders dışı bir hobi değil; sorumluluk alma, ekip olma ve problem çözme laboratuvarıdır.
                </p>
                <p>
                  Yıl boyunca düzenlenen kültür gezileri, yurt dışı yaz okulları, bilim şenlikleri ve tiyatro festivalleriyle öğrencilerimiz kampüsü yaşayan ve üreten bir alana dönüştürür.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <Image
                  src="/images/bcn/fll-robotics-team.jpg"
                  alt="Öğrenci Yaşamı ve Robotik"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Clubs Grid */}
          <div className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17263D]">
                Öğrenci Kulüplerimiz
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                Her ilgi alanına hitap eden, öğretmen mentorluğunda ve öğrenci başkanlığında yürütülen zengin kulüp portföyümüz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CLUBS.map((club, idx) => {
                const IconComponent = club.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200/80 hover:shadow-md transition-all space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white text-[#1E3A8A] flex items-center justify-center shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-[#17263D]">{club.name}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{club.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
