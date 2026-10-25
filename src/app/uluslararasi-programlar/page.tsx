import React from "react";
import Image from "next/image";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import { INTERNATIONAL_PROGRAMS } from "@/data/bcnData";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Uluslararası Programlar | BCN Eğitim Kurumları",
  description: "IB Primary Years Programme (PYP), Kanada Çift Diploma (OSSD), Advanced Placement (AP), MUN ve Erasmus+ programlarımız.",
};

export default function InternationalProgramsPage() {
  return (
    <>
      <SubpageHero
        badge="Global Ağ & Diplomalar"
        title="Uluslararası Programlar"
        subtitle="Dünyanın en prestijli eğitim akreditasyonları, çift diploma ve küresel üniversite kapılarını açan yetkinlikler."
        bgImage="/images/bcn/campus-facade-1.jpg"
        breadcrumbs={[{ label: "Uluslararası Programlar" }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {INTERNATIONAL_PROGRAMS.map((prog, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={prog.id}
                id={prog.slug}
                className="p-8 sm:p-12 rounded-3xl bg-[#F7F8FA] border border-slate-200/80 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Visual Side */}
                <div className={`lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md ${isReversed ? "lg:order-2" : ""}`}>
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17263D]/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#17263D] text-xs font-bold">
                      {prog.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-mono text-amber-300 uppercase block mb-1">
                      {prog.targetAges}
                    </span>
                    <p className="text-xl font-bold">{prog.shortTitle}</p>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-7 space-y-6 ${isReversed ? "lg:order-1" : ""}`}>
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                      {prog.badge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17263D]">
                      {prog.title}
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {prog.description}
                    </p>
                  </div>

                  {/* Program Details */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Program Yapısı ve Ayrıcalıkları:
                    </div>
                    {prog.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Benefits pills */}
                  <div className="pt-2">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Küresel Avantajlar:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {prog.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-[#17263D]"
                        >
                          ★ {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
