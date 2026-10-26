import React from "react";
import Image from "next/image";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import { FOUNDER_INFO, LEADERSHIP_TEAM } from "@/data/bcnData";
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
              <p className="text-sm font-semibold text-[var(--bcn-gold-ink)]">Köklerden küresele</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263D] leading-tight">
                Geleceğe Güvenle Bakan Uluslararası Bir Eğitim Kurumu
              </h2>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  BCN Eğitim Kurumları (BCN College), İstanbul Çekmeköy-Ümraniye bölgesinde, erken çocukluktan lise mezuniyetine kadar dünya standartlarında eğitim sunan bağımsız bir uluslararası okuldur.
                </p>
                <p>
                  Kurumumuz, ezberci sınav yaklaşımlarını aşarak; öğrencilere sorgulama, kavramsal anlama ve bilimsel düşünme metodolojisini aşılar. Uluslararası Bakalorya (IB PYP), Ontario Kanada Çift Diploması (OSSD) ve College Board AP akreditasyonlarımızla mezunlarımız dünyanın önde gelen üniversitelerine ve Türkiye&apos;nin en seçkin fakültelerine güçlü bir akademik omurgayla adım atarlar.
                </p>
              </div>

              {/* Stats Highlight Bar */}
              <div className="grid grid-cols-3 gap-4 pt-5 border-t border-slate-200">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#17263D] tabular-nums">12.000m²</div>
                  <div className="text-sm text-slate-600">Madenler Kampüsü</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#17263D] tabular-nums">1 : 8</div>
                  <div className="text-sm text-slate-600">Öğretmen Oranı</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#17263D] tabular-nums">4 Dünya</div>
                  <div className="text-sm text-slate-600">Şampiyonluk Derecesi</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden bg-slate-200">
                <Image
                  src="/images/bcn/campus-gate-exterior.jpg"
                  alt="BCN Koleji Madenler kampüsü ana giriş kapısı"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-right"
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
              <div className="relative rounded-3xl overflow-hidden bg-white p-4 border border-slate-200">
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
                  <p className="text-sm text-slate-600">{FOUNDER_INFO.title}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm font-semibold text-[var(--bcn-gold-ink)]">Kurucu manifestosu</p>
              <blockquote className="relative border-l-2 border-[#0B1524] pl-6">
                <Quote className="w-8 h-8 text-slate-200 absolute -top-2 right-0" aria-hidden="true" />
                <p className="text-lg sm:text-xl text-slate-800 font-medium italic leading-relaxed pr-8">
                  &ldquo;{FOUNDER_INFO.quote}&rdquo;
                </p>
              </blockquote>

              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>{FOUNDER_INFO.bio}</p>
              </div>

              {/* Founder Principles */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-2">
                {FOUNDER_INFO.principles.map((pr, i) => (
                  <li key={i} className="border-t border-slate-300 pt-3 space-y-1">
                    <h3 className="text-sm font-bold text-[#17263D]">{pr.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{pr.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership team highlights */}
      <section id="liderlik" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold text-[var(--bcn-gold-ink)]">Yönetim ve akademik rehberlik</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263D]">Lider Ekibimiz</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Akademik derinliği, uluslararası okul tecrübesi ve öğrenci odaklı yaklaşımıyla okulumuzu yöneten uzman kadromuz.
              </p>
            </div>
            <Link
              href="/lider-ekibimiz"
              className="inline-flex items-center gap-2 min-h-11 text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors group shrink-0"
            >
              <span>Tüm yönetim kadrosu ({LEADERSHIP_TEAM.length} kişi)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </Link>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.slice(0, 4).map((leader) => (
              <li key={leader.id}>
                <Link
                  href="/lider-ekibimiz"
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] rounded-2xl"
                >
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200">
                    <Image
                      src={leader.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover object-top group-hover:scale-103 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#17263D] group-hover:text-[#1E3A8A] transition-colors">{leader.name}</h3>
                  <p className="text-sm text-slate-600">{leader.role}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
