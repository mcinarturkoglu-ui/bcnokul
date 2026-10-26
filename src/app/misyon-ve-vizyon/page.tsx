import React from "react";
import SubpageHero from "@/components/SubpageHero";
import { Target, Compass, CheckCircle2 } from "lucide-react";

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
        bgImage="/images/bcn/campus-lobby.jpg"
        breadcrumbs={[{ label: "Misyon ve Vizyon" }]}
      />

      {/* Mission & Vision Split Cards */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#F7F8FA] border border-slate-200 space-y-6">
              <Target className="w-7 h-7 text-[#0B1524]" aria-hidden="true" />

              <div className="space-y-3">
                <p className="text-sm font-semibold text-[var(--bcn-gold-ink)]">Varoluş amacımız</p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17263D]">
                  Misyonumuz
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Öğrencilerimizin doğuştan gelen keşfetme arzusunu; matematiksel düşünme disiplini, eleştirel sorgulama ve insani değerlerle harmanlayarak, yerel köklerinden güç alan ve dünya sahnesinde iz bırakan çok yönlü bireyler yetiştirmektir.
                </p>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-slate-200 text-sm sm:text-base text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 mt-1 text-slate-500 shrink-0" aria-hidden="true" />
                  <span>Öğrenmeyi ezberden kurtarıp kavramsal derinliğe ulaştırmak</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 mt-1 text-slate-500 shrink-0" aria-hidden="true" />
                  <span>Her bireyin özgün yetenek ve dikkat haritasına saygı duymak</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 mt-1 text-slate-500 shrink-0" aria-hidden="true" />
                  <span>Teknolojiyi tüketen değil, etik çerçevede üreten liderler yetiştirmek</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1524] text-white space-y-6">
              <Compass className="w-7 h-7 text-white" aria-hidden="true" />

              <div className="space-y-3">
                <p className="text-sm font-semibold text-[#C59B27]">Gelecek hedefimiz</p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Vizyonumuz
                </h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  Uluslararası Bakalorya (IB) ve küresel çift diploma (OSSD) standartlarını Türkiye&apos;nin en seçkin akademik geleneğiyle birleştirerek; mezunları dünya üniversitelerinde aranan, bilimi ve aklı insanlığın refahı için kullanan öncü bir dünya okulu olmak.
                </p>
              </div>

              <ul className="space-y-2.5 pt-4 border-t border-white/15 text-sm sm:text-base text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 mt-1 text-slate-400 shrink-0" aria-hidden="true" />
                  <span>Dünyanın en prestijli eğitim akreditasyonlarına liderlik etmek</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 mt-1 text-slate-400 shrink-0" aria-hidden="true" />
                  <span>Uluslararası STEM ve robotik olimpiyatlarında zirveyi korumak</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 mt-1 text-slate-400 shrink-0" aria-hidden="true" />
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
            <p className="text-sm font-semibold text-[var(--bcn-gold-ink)]">Hedeflediğimiz insan modeli</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263D]">
              BCN Öğrenen Profili
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Öğrencilerimizin yalnızca akademik birer başarılı aday değil, karakter ve erdem sahibi birer dünya insanı olması için benimsediğimiz evrensel profil nitelikleri.
            </p>
          </div>

          {/* Eight attributes, not a sequence: no numbering */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {IB_LEARNER_ATTRIBUTES.map((attr) => (
              <li key={attr.name} className="border-t-2 border-[#0B1524] pt-4 space-y-1.5">
                <h3 className="text-lg font-bold text-[#17263D]">{attr.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{attr.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
