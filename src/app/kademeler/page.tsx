import React from "react";
import Image from "next/image";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import { LEVELS } from "@/data/bcnData";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Eğitim Kademeleri | BCN Eğitim Kurumları",
  description: "Aurelia Preschool, İlkokul (IB PYP), Ortaokul (LGS), Anadolu ve Fen Lisesi (Kanada OSSD & AP) kademelerimiz.",
};

export default function LevelsOverviewPage() {
  return (
    <>
      <SubpageHero
        badge="Akademik Yapı"
        title="Eğitim Kademelerimiz"
        subtitle="3 yaş erken çocukluktan lise mezuniyetine kadar kesintisiz, akredite ve bütünsel öğrenme basamakları."
        bgImage="/images/bcn/classroom-modern.jpg"
        breadcrumbs={[{ label: "Eğitim Kademeleri" }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {LEVELS.map((lvl, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={lvl.id}
                className="p-6 sm:p-10 rounded-3xl bg-[#F7F8FA] border border-slate-200/80 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Photo Side */}
                <div className={`lg:col-span-6 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md ${isReversed ? "lg:order-2" : ""}`}>
                  <Image
                    src={lvl.image}
                    alt={lvl.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#17263D] text-xs font-bold">
                      {lvl.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-mono text-amber-300 uppercase tracking-wider block">
                      {lvl.ageGroup}
                    </span>
                    <p className="text-2xl font-bold">{lvl.name}</p>
                  </div>
                </div>

                {/* Details Side */}
                <div className={`lg:col-span-6 space-y-5 ${isReversed ? "lg:order-1" : ""}`}>
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                      {lvl.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17263D]">
                      {lvl.name}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {lvl.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {lvl.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="p-3 rounded-xl bg-white border border-slate-200/70">
                        <div className="text-xs font-bold text-[#17263D]">{feat.title}</div>
                        <div className="text-xs text-slate-500">{feat.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/kademeler/${lvl.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#17263D] hover:bg-[#1E3A8A] text-white font-bold text-xs sm:text-sm transition-colors"
                    >
                      <span>{lvl.name} Müfredat Detayları</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
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
