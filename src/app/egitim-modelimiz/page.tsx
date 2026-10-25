import React from "react";
import Image from "next/image";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import { PARENTS_ACADEMY } from "@/data/bcnData";
import { Brain, Cpu, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Eğitim Modelimiz & BCN Yaklaşımı | BCN Eğitim Kurumları",
  description: "Zihinsel disiplin, Yale RULER duygusal zeka, MOXO dikkat analizi, yapay zeka destekli takip ve BCN Ebeveyn Akademisi.",
};

export default function EducationModelPage() {
  return (
    <>
      <SubpageHero
        badge="Pedagojik İnovasyon"
        title="BCN Eğitim Modeli"
        subtitle="Zihinsel disiplin, kanıta dayalı nöro-pedagoji ve yapay zekâ destekli bütünsel gelişim mimarisi."
        bgImage="/images/bcn/classroom-interactive.jpg"
        breadcrumbs={[{ label: "Eğitim Modelimiz" }]}
      />

      {/* Main Philosophy */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#1E3A8A] tracking-wider uppercase">
                ZİHİNSEL DİSİPLİN & ANALİTİK AKIL
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263D] leading-tight">
                Ezberi Değil, Düşünmeyi ve Problem Çözmeyi Öğretiyoruz
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  BCN Eğitim Modeli; matematiğin ve bilimin sunduğu analitik düşünme disiplinini, insani değerler ve yaratıcılıkla buluşturur. Amacımız sadece sınav sorularını çözen değil; hayatın karmaşık senaryolarında soğukkanlı, rasyonel ve etik kararlar verebilen liderler yetiştirmektir.
                </p>
                <p>
                  Eğitim mimarimizde her öğrencinin dikkat parametreleri, bilişsel hızı ve duygusal ihtiyaçları bilimsel yöntemlerle takip edilir. Yale Üniversitesi menşeili duygusal zekâ programı ile MOXO sürekli dikkat testleri bu sürecin merkezinde yer alır.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <Image
                  src="/images/bcn/science-lab.jpg"
                  alt="BCN Bilimsel Öğrenme Modeli"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* 3 Core Scientific Frameworks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Framework 1: Yale RULER */}
            <div className="p-8 rounded-3xl bg-[#F7F8FA] border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#17263D]">Yale RULER Modeli</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Duyguları tanıma (Recognizing), anlama (Understanding), etiketleme (Labeling), ifade etme (Expressing) ve düzenleme (Regulating) becerilerini erken yaştan itibaren kazandırıyoruz.
              </p>
            </div>

            {/* Framework 2: MOXO Dikkat */}
            <div className="p-8 rounded-3xl bg-[#F7F8FA] border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#1E3A8A] flex items-center justify-center">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#17263D]">MOXO Dikkat Testi</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Öğrencilerin dikkat, zamanlama, dürtüsellik ve hiperaktivite performanslarını bilimsel çeldiriciler altında ölçerek kişiye özel öğrenme stratejisi kuruyoruz.
              </p>
            </div>

            {/* Framework 3: AI Takip */}
            <div className="p-8 rounded-3xl bg-[#F7F8FA] border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#17263D]">Yapay Zekâ Gelişim Haritası</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Her öğrencinin haftalık konu eksiklerini, soru çözüm hızını ve ilgi eğilimlerini analiz eden yapay zekâ algoritmalarıyla hedef odaklı etüt planı sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parents Academy Detailed Section */}
      <section className="py-16 sm:py-24 bg-[#17263D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
              OKUL & AİLE BİLİNÇLİ REHBERLİK ORTAKLIĞI
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {PARENTS_ACADEMY.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {PARENTS_ACADEMY.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PARENTS_ACADEMY.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3"
              >
                <div className="text-xs font-mono font-bold text-amber-400">0{idx + 1}</div>
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
