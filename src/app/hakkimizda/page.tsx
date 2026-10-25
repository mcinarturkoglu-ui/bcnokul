import React from "react";
import Image from "next/image";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import { FOUNDER_INFO, LEADERSHIP_TEAM, INSTITUTION_INFO } from "@/data/bcnData";
import { ArrowRight, Quote } from "lucide-react";

export const metadata = {
  title: "Hakkımızda & Kurucu Vizyonu | BCN Eğitim Kurumları",
  description: "BCN Eğitim Kurumları kurumsal kimliği, kurucumuz Adem Bican'ın eğitim vizyonu, lider ekibimiz ve kurumsal değerlerimiz.",
};

export default function AboutPage() {
  return (
    <>
      <SubpageHero
        badge="Kurumsal Kimlik"
        title="Hakkımızda & Kurucu Vizyonumuz"
        subtitle="Zihinsel disiplin, rasyonel düşünce ve uluslararası akademik mükemmeliyet üzerine kurulu çağdaş bir eğitim ekosistemi."
        bgImage="/images/bcn/campus-facade-2.jpg"
        breadcrumbs={[{ label: "Hakkımızda" }]}
      />

      {/* Institutional Story */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#1E3A8A] tracking-wider uppercase">
                KÖKLERDEN KÜRESELE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263D] leading-tight">
                Geleceğe Güvenle Bakan Uluslararası Bir Eğitim Kurumu
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  BCN Eğitim Kurumları (BCN College), İstanbul Çekmeköy-Ümraniye bölgesinde, erken çocukluktan lise mezuniyetine kadar dünya standartlarında eğitim sunan bağımsız bir uluslararası okuldur.
                </p>
                <p>
                  Kurumumuz, ezberci sınav yaklaşımlarını aşarak; öğrencilere sorgulama, kavramsal anlama ve bilimsel düşünme metodolojisini aşılar. Uluslararası Bakalorya (IB PYP), Ontario Kanada Çift Diploması (OSSD) ve College Board AP akreditasyonlarımızla mezunlarımız dünyanın önde gelen üniversitelerine ve Türkiye'nin en seçkin fakültelerine güçlü bir akademik omurgayla adım atarlar.
                </p>
              </div>

              {/* Stats Highlight Bar */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#17263D]">12.000m²</div>
                  <div className="text-xs text-slate-500">Madenler Kampüsü</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#17263D]">1 : 8</div>
                  <div className="text-xs text-slate-500">Öğretmen Oranı</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#17263D]">4 Dünya</div>
                  <div className="text-xs text-slate-500">Şampiyonluk Derecesi</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <Image
                  src="/images/bcn/campus-entrance.jpg"
                  alt="BCN Kampüs Girişi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 sm:py-24 bg-[#F7F8FA] border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white p-4 border border-slate-200">
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/bcn/founder-adem-bican.png"
                    alt={FOUNDER_INFO.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="pt-4 text-center">
                  <h3 className="text-xl font-extrabold text-[#17263D]">{FOUNDER_INFO.name}</h3>
                  <p className="text-xs font-semibold text-[#1E3A8A]">{FOUNDER_INFO.title}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative space-y-3">
                <Quote className="w-8 h-8 text-amber-400 absolute top-4 right-4 opacity-50" />
                <div className="text-xs font-mono uppercase tracking-widest text-amber-600 font-bold">
                  KURUCU MANİFESTOSU
                </div>
                <p className="text-base sm:text-lg text-slate-800 font-medium italic leading-relaxed">
                  "{FOUNDER_INFO.quote}"
                </p>
              </div>

              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>{FOUNDER_INFO.bio}</p>
              </div>

              {/* Founder Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {FOUNDER_INFO.principles.map((pr, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-1">
                    <h4 className="text-xs font-bold text-[#17263D]">{pr.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{pr.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Highlights */}
      <section id="liderlik" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-slate-100">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold text-[#1E3A8A] tracking-wider uppercase">
                YÖNETİM VE AKADEMİK REHBERLİK
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263D]">
                Lider Ekibimiz
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Akademik derinliği, uluslararası okul tecrübesi ve öğrenci odaklı yaklaşımıyla okulumuzu yöneten uzman kadromuz.
              </p>
            </div>
            <Link
              href="/lider-ekibimiz"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#17263D] hover:bg-[#1E3A8A] text-white text-xs font-bold transition-all shadow-md shrink-0"
            >
              <span>Tüm Yönetim Kadrosunu İnceleyin ({LEADERSHIP_TEAM.length} Kişi)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.slice(0, 4).map((leader, idx) => (
              <div
                key={idx}
                className="bg-[#F7F8FA] rounded-2xl p-5 border border-slate-200/80 hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 rounded-xl overflow-hidden mb-4 bg-slate-200">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-[#17263D] text-xs font-bold">
                        {leader.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-[#17263D]">{leader.name}</h3>
                    <div className="text-xs font-semibold text-[#1E3A8A]">{leader.role}</div>
                    <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                      {leader.focus}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-200/60">
                  <Link
                    href="/lider-ekibimiz"
                    className="text-xs font-bold text-[#1E3A8A] hover:underline flex items-center gap-1"
                  >
                    Detaylı Profil <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/lider-ekibimiz"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#17263D] font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>14 Kişilik Lider ve Koordinatör Kadromuzu Görün</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
