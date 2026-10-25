import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SubpageHero from "@/components/SubpageHero";
import { LEVELS } from "@/data/bcnData";
import { Check } from "lucide-react";

export function generateStaticParams() {
  return LEVELS.map((lvl) => ({
    slug: lvl.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const level = LEVELS.find((l) => l.slug === slug);
  if (!level) return {};

  return {
    title: `${level.name} | BCN Eğitim Kurumları`,
    description: level.description,
    alternates: { canonical: `/kademeler/${level.slug}` },
  };
}

export default async function LevelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const level = LEVELS.find((l) => l.slug === slug);

  if (!level) {
    notFound();
  }

  return (
    <>
      <SubpageHero
        badge={level.badge}
        title={level.name}
        subtitle={level.subtitle}
        bgImage={level.image}
        breadcrumbs={[
          { label: "Kademeler", href: "/kademeler" },
          { label: level.name },
        ]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Main Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#1E3A8A] tracking-wider uppercase">
                {level.ageGroup} PEDAGOJİK YAKLAŞIMI
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263D] leading-tight">
                {level.tagline}
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                {level.fullContent.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <Image
                  src={level.image}
                  alt={level.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs font-mono uppercase text-amber-300 mb-1">{level.ageGroup}</div>
                  <div className="text-xl font-bold">{level.name}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F7F8FA] border border-slate-200/80 space-y-8">
            <div className="max-w-2xl space-y-2">
              <h3 className="text-2xl font-extrabold text-[#17263D]">
                Öne Çıkan Pedagojik İlkeler
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                Bu kademede uygulanan bilimsel temelli yaklaşımlar ve kazanım hedefleri.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {level.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1E3A8A] flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-[#17263D]">{feat.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum Tags */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Entegre Müfredat ve Sertifikasyonlar
            </h4>
            <div className="flex flex-wrap gap-3">
              {level.curriculum.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-[#17263D]"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Admission Prompt */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#17263D] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold">
                {level.name} İçin Kayıt Bilgisi Alın
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                Sınırlı kontenjanlarımız ve bursluluk imkanlarımız hakkında bilgi almak için tanışma randevusu oluşturun.
              </p>
            </div>
            <Link
              href="/kayit-ve-kabul"
              className="px-6 py-3.5 rounded-xl bg-white text-[#17263D] font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors shrink-0"
            >
              Randevu & Ön Kayıt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
