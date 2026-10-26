import React from "react";
import Image from "next/image";
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
        bgImage="/images/bcn/fll-robotics-team.jpg"
        breadcrumbs={[{ label: "Eğitim Modelimiz" }]}
      />

      {/* Main Philosophy */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm font-semibold text-[var(--bcn-gold-ink)]">Zihinsel disiplin ve analitik akıl</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263D] leading-tight">
                Ezberi Değil, Düşünmeyi ve Problem Çözmeyi Öğretiyoruz
              </h2>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  BCN Eğitim Modeli; matematiğin ve bilimin sunduğu analitik düşünme disiplinini, insani değerler ve yaratıcılıkla buluşturur. Amacımız sadece sınav sorularını çözen değil; hayatın karmaşık senaryolarında soğukkanlı, rasyonel ve etik kararlar verebilen liderler yetiştirmektir.
                </p>
                <p>
                  Eğitim mimarimizde her öğrencinin dikkat parametreleri, bilişsel hızı ve duygusal ihtiyaçları bilimsel yöntemlerle takip edilir. Yale Üniversitesi menşeili duygusal zekâ programı ile MOXO sürekli dikkat testleri bu sürecin merkezinde yer alır.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden bg-slate-200">
                <Image
                  src="/images/bcn/campus-facade-1.jpg"
                  alt="Biyoloji laboratuvarında deney masaları"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* 3 core scientific frameworks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
            {[
              { icon: HeartHandshake, title: "Yale RULER Modeli", text: "Duyguları tanıma (Recognizing), anlama (Understanding), etiketleme (Labeling), ifade etme (Expressing) ve düzenleme (Regulating) becerilerini erken yaştan itibaren kazandırıyoruz." },
              { icon: Brain, title: "MOXO Dikkat Testi", text: "Öğrencilerin dikkat, zamanlama, dürtüsellik ve hiperaktivite performanslarını bilimsel çeldiriciler altında ölçerek kişiye özel öğrenme stratejisi kuruyoruz." },
              { icon: Cpu, title: "Yapay Zekâ Gelişim Haritası", text: "Her öğrencinin haftalık konu eksiklerini, soru çözüm hızını ve ilgi eğilimlerini analiz eden yapay zekâ algoritmalarıyla hedef odaklı etüt planı sunuyoruz." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-t-2 border-[#0B1524] pt-5 space-y-2">
                <Icon className="w-5 h-5 text-slate-500" aria-hidden="true" />
                <h3 className="text-xl font-bold text-[#17263D]">{title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parents Academy Detailed Section */}
      <section className="py-16 sm:py-24 bg-[#0B1524] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold text-[#C59B27]">Okul ve aile bilinçli rehberlik ortaklığı</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {PARENTS_ACADEMY.title}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              {PARENTS_ACADEMY.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PARENTS_ACADEMY.pillars.map((pillar) => (
              <div key={pillar.title} className="border-t-2 border-white/30 pt-5 space-y-2">
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
