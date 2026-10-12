import React from "react";
import Image from "next/image";
import SubpageHero from "@/components/SubpageHero";
import { Sparkles, Target, Compass, Heart, Shield, CheckCircle2, Globe, Lightbulb } from "lucide-react";

export const metadata = {
  title: "Misyon ve Vizyon | BCN Eğitim Kurumları",
  description: "BCN Eğitim Kurumları'nın kurumsal misyonu, uluslararası vizyonu ve temel pedagojik değerleri.",
};

const IB_LEARNER_ATTRIBUTES = [
  { name: "Araştıran-Sorgulayan", desc: "Doğal merakını geliştirir, bağımsız ve iş birlikçi araştırma becerisi edinir." },
  { name: "Bilgili", desc: "Disiplinlerarası küresel ve yerel kavramları derinlemesine keşfeder." },
  { name: "Düşünen", desc: "Karmaşık sorunları çözmek için eleştirel ve yaratıcı düşünme becerilerini kullanır." },
  { name: "İletişim Kuran", desc: "Birden fazla dilde ve farklı ortamlarda kendisini özgüvenle ifade eder." },
  { name: "İlkeli", desc: "Dürüstlük, hakkaniyet ve insan onuruna derin bir saygıyla hareket eder." },
  { name: "Açık Fikirli", desc: "Kendi kültürüne değer verirken diğer kültürlerin bakış açılarını takdirle karşılar." },
  { name: "Duyarlı", desc: "Empati ve saygı gösterir, toplum ve çevre için olumlu bir fark yaratmaya adanır." },
  { name: "Dengeli", desc: "Zihinsel, bedensel ve duygusal dengenin kişisel esenlik için önemini kavrar." }
];

export default function MissionVisionPage() {
  return (
    <>
      <SubpageHero
        badge="Kurumsal Değerler"
        title="Misyon ve Vizyonumuz"
        subtitle="Sorgulayan akıl, küresel sorumluluk ve etik teknoloji vizyonuyla yarının dünyasını inşa ediyoruz."
        bgImage="/images/bcn/campus-atrium.jpg"
        breadcrumbs={[{ label: "Misyon ve Vizyon" }]}
      />

      {/* Mission & Vision Split Cards */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#F7F8FA] border border-slate-200/80 space-y-6 relative overflow-hidden group">
              <div className="w-14 h-14 rounded-2xl bg-[#1E3A8A] text-white flex items-center justify-center shadow-lg shadow-blue-900/10">
                <Target className="w-7 h-7" />
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono tracking-widest text-[#1E3A8A] uppercase font-bold">
                  VAROLUŞ AMACIMIZ
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17263D]">
                  Misyonumuz
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Öğrencilerimizin doğuştan gelen keşfetme arzusunu; matematiksel düşünme disiplini, eleştirel sorgulama ve insani değerlerle harmanlayarak, yerel köklerinden güç alan ve dünya sahnesinde iz bırakan çok yönlü bireyler yetiştirmektir.
                </p>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-slate-200 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Öğrenmeyi ezberden kurtarıp kavramsal derinliğe ulaştırmak</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Her bireyin özgün yetenek ve dikkat haritasına saygı duymak</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Teknolojiyi tüketen değil, etik çerçevede üreten liderler yetiştirmek</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#17263D] text-white border border-slate-800 space-y-6 relative overflow-hidden group shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-amber-400 text-[#17263D] flex items-center justify-center shadow-lg shadow-amber-400/20">
                <Compass className="w-7 h-7" />
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono tracking-widest text-amber-300 uppercase font-bold">
                  GELECEK HEDEFİMİZ
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Vizyonumuz
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Uluslararası Bakalorya (IB) ve küresel çift diploma (OSSD) standartlarını Türkiye'nin en seçkin akademik geleneğiyle birleştirerek; mezunları dünya üniversitelerinde aranan, bilimi ve aklı insanlığın refahı için kullanan öncü bir dünya okulu olmak.
                </p>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-slate-700 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Dünyanın en prestijli eğitim akreditasyonlarına liderlik etmek</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Uluslararası STEM ve robotik olimpiyatlarında zirveyi korumak</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Toplumsal dönüşüme yön veren bilinçli dünya vatandaşları yetiştirmek</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IB Learner Profile Section */}
      <section className="py-16 sm:py-24 bg-[#F7F8FA] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#1E3A8A] tracking-wider uppercase">
              HEDEFLEDİĞİMİZ İNSAN MODELİ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263D]">
              BCN Öğrenen Profili.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Öğrencilerimizin yalnızca akademik birer başarılı aday değil, karakter ve erdem sahibi birer dünya insanı olması için benimsediğimiz evrensel profil nitelikleri.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {IB_LEARNER_ATTRIBUTES.map((attr, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-2"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 font-bold text-xs flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#17263D]">{attr.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{attr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
