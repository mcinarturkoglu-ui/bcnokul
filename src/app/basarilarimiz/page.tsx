import React from "react";
import Image from "next/image";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";

export const metadata = {
  title: "Başarılarımız & Olimpiyatlar | BCN Eğitim Kurumları",
  description: "Uluslararası STEM Olimpiyatları dünya şampiyonluğu, First Lego League Türkiye kupası ve akademik başarılarımız.",
};

const ACHIEVEMENTS_LIST = [
  {
    title: "Dünya STEM Olimpiyatları Finalleri",
    badge: "Dünya Şampiyonu",
    desc: "48 ülkeden 1.200'ü aşkın okulun katıldığı yarışmada 4 Dünya Derecesi, 8 Altın, 9 Gümüş, 6 Bronz Madalya.",
    image: "/images/bcn/fll-trophy-champions.jpg",
    category: "STEM & Bilim"
  },
  {
    title: "First Lego League (FLL) Türkiye Finali",
    badge: "Türkiye 1.'si",
    desc: "Hem Robot Performans hem de Öz Değerler kategorilerinde rekor puanla Türkiye Şampiyonluğu ve Dünya Finalleri vizesi.",
    image: "/images/bcn/fll-robotics-team.jpg",
    category: "Robotik & Kodlama"
  },
  {
    title: "First Lego League Marmara Bölge Şampiyonluğu",
    badge: "Bölge Şampiyonu",
    desc: "İlk katılımda Marmara genelinde tüm rakiplerini geride bırakarak En İyi Robot Tasarımı ve Şampiyonluk Kupası.",
    image: "/images/bcn/stem-lab.jpg",
    category: "Robotik"
  },
  {
    title: "TRT World Geleceğin Global Gazetecileri",
    badge: "Uluslararası Basın",
    desc: "Öğrencilerimizin çevre ve teknoloji etiği belgeseli TRT World ekranlarında canlı yayında yer aldı.",
    image: "/images/bcn/press-hurriyet.jpg",
    category: "İletişim & Dil"
  }
];

export default function AchievementsPage() {
  return (
    <>
      <SubpageHero
        badge="Gurur Tablomuz"
        title="Dünya & Ulusal Başarılarımız"
        subtitle="13 prestijli yarışma, 4 dünya derecesi, 23 madalya ve Türkiye robotik şampiyonlukları."
        bgImage="/images/bcn/fll-trophy-champions.jpg"
        breadcrumbs={[{ label: "Başarılarımız" }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Numbers Highlights */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#17263D] text-white grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-black text-amber-400">4</div>
              <div className="text-sm font-bold">Dünya Derecesi</div>
              <div className="text-xs text-slate-400">Uluslararası STEM Finalleri</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-black text-emerald-400">23+</div>
              <div className="text-sm font-bold">Kazanılan Madalya</div>
              <div className="text-xs text-slate-400">Altın, Gümüş ve Bronz</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-black text-blue-400">1.</div>
              <div className="text-sm font-bold">FLL Türkiye Şampiyonu</div>
              <div className="text-xs text-slate-400">First Lego League Robotik</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-black text-purple-400">%100</div>
              <div className="text-sm font-bold">Üniversite Yerleşme</div>
              <div className="text-xs text-slate-400">Türkiye & Yurt Dışı Seçkin Okullar</div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ACHIEVEMENTS_LIST.map((ach, idx) => (
              <div
                key={idx}
                className="bg-[#F7F8FA] rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={ach.image}
                    alt={ach.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold shadow-md">
                      {ach.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-mono text-amber-300 uppercase block mb-1">
                      {ach.category}
                    </span>
                    <h2 className="text-xl font-bold">{ach.title}</h2>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {ach.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
