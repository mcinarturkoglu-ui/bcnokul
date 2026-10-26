"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import { LEADERSHIP_TEAM, FOUNDER_INFO, INSTITUTION_INFO, LeaderMember } from "@/data/bcnData";
import { useModal } from "@/context/ModalContext";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, GraduationCap, BarChart3, Building2, Phone, Mail, ArrowRight, ShieldCheck, CheckCircle2, Users, X } from "lucide-react";
import { PHONE_HREF } from "@/lib/contact";

const EASE = [0.22, 1, 0.36, 1] as const;

const STATS = [
  { value: "14", label: "Uzman Akademik Yönetici" },
  { value: "1 : 8", label: "Bireysel Rehberlik Oranı" },
  { value: "4 Kademede", label: "Kesintisiz Ekol Yönetimi" },
  { value: "3 Akreditasyon", label: "IB PYP, OSSD Kanada, AP" },
];

const PRINCIPLES = [
  {
    icon: Users,
    title: "Açık Kapı ve Şeffaf İletişim",
    text: "Yöneticilerimiz ve okul müdürlerimiz, velilerimizle düzenli akademik geri bildirim toplantıları ve birebir görüşmelerle sürekli temas halindedir.",
  },
  {
    icon: GraduationCap,
    title: "Pedagojik Liderlik",
    text: "Yöneticilerimiz yalnızca idari operasyonları değil; öğretmen gelişimini, sınıf içi gözlemleri ve müfredat yeniliklerini doğrudan yönetir.",
  },
  {
    icon: ShieldCheck,
    title: "Küresel Akreditasyon",
    text: "IB PYP, OSSD Kanada ve AP standartlarının her kademede eksiksiz uygulanması için uluslararası denetim ve kalite güvencesi sağlanır.",
  },
  {
    icon: BarChart3,
    title: "Veriye Dayalı Takip",
    text: "Ölçme ve Değerlendirme koordinatörlüğümüz ile her çocuğun öğrenme profili yapay zekâ ve istatistiki modellerle takip edilir.",
  },
];

export default function LeadershipPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeLeaderModal, setActiveLeaderModal] = useState<LeaderMember | null>(null);
  const { openAdmission } = useModal();
  const dialogRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "all", label: "Tüm Yönetim Kadrosu", count: LEADERSHIP_TEAM.length },
    { id: "Genel Yönetim", label: "Genel Yönetim", count: LEADERSHIP_TEAM.filter(m => m.category === "Genel Yönetim" || m.category === "Kurucu").length },
    { id: "Okul Müdürleri", label: "Okul Müdürleri", count: LEADERSHIP_TEAM.filter(m => m.category === "Okul Müdürleri").length },
    { id: "Müdür Yardımcıları ve Koordinatörler", label: "Müdür Yrd. & Koordinatörler", count: LEADERSHIP_TEAM.filter(m => m.category === "Müdür Yardımcıları ve Koordinatörler").length },
  ];

  const filteredMembers = LEADERSHIP_TEAM.filter(m => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "Genel Yönetim") return m.category === "Genel Yönetim" || m.category === "Kurucu";
    return m.category === selectedCategory;
  });

  // Profile dialog: lock scroll, Escape closes, Tab stays inside, focus returns to the card
  useEffect(() => {
    if (!activeLeaderModal) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLElement>("button")?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveLeaderModal(null);
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [activeLeaderModal]);

  return (
    <>
      <SubpageHero
        badge="Yönetim & Liderlik"
        title="Geleceği Şekillendiren Yönetim Kadromuz"
        subtitle="Cumhuriyetimizin akıl ve bilim vizyonu ışığında, BCN Eğitim Kurumları'nı akademik mükemmeliyete ve küresel standartlara taşıyan lider kadromuz."
        bgImage="/images/bcn/campus-facade-2.jpg"
        breadcrumbs={[
          { label: "Hakkımızda", href: "/hakkimizda" },
          { label: "Lider Ekibimiz" }
        ]}
      />

      {/* Leadership stats */}
      <div className="bg-[#0B1524] border-t border-white/10 text-white py-8">
        <dl className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((st) => (
            <div key={st.label} className="space-y-1">
              <dt className="sr-only">{st.label}</dt>
              <dd className="text-2xl sm:text-3xl font-extrabold tabular-nums">{st.value}</dd>
              <dd className="text-sm text-slate-300">{st.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Founder */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1524] rounded-3xl p-6 sm:p-12 lg:p-14 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-80 aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/bcn/founder-adem-bican.png"
                    alt={FOUNDER_INFO.name}
                    fill
                    sizes="(max-width: 1024px) 80vw, 33vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1524] via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="px-2.5 py-0.5 rounded-full bg-white text-[#0B1524] text-xs font-semibold">Kurucumuz</span>
                    <h2 className="text-2xl font-extrabold text-white mt-2 tracking-tight">{FOUNDER_INFO.name}</h2>
                    <p className="text-sm text-slate-300">{FOUNDER_INFO.title}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm font-semibold text-[#C59B27]">Kurucu mesajı ve eğitim vizyonu</p>

                <blockquote className="relative border-l-2 border-white/30 pl-6">
                  <Quote className="w-8 h-8 text-white/15 absolute -top-2 right-0" aria-hidden="true" />
                  <p className="text-lg sm:text-xl italic text-slate-100 leading-relaxed pr-8">
                    &ldquo;{FOUNDER_INFO.quote}&rdquo;
                  </p>
                </blockquote>

                <div className="space-y-3.5 text-slate-300 text-base leading-relaxed">
                  <p>
                    BCN College’ı kurarken çıkış noktamız netti: Eğitim, yalnızca akademik bir müfredat aktarımı değil; bir zihinsel disiplin, karakter ve gelecek bilinci inşasıdır. Bizim için okul; öğrencinin yalnızca bilgi edindiği değil, düşünmeyi öğrendiği, sorgulama cesareti kazandığı ve kendi potansiyelini sistemli biçimde geliştirdiği güçlü bir yaşam alanıdır.
                  </p>
                  <p>
                    Cumhuriyetimizin kurucusu Gazi Mustafa Kemal Atatürk’ün akıl, bilim ve çağdaşlık vizyonu; okulumuzun tüm kademelerindeki temel yol göstericimizdir.
                  </p>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-2">
                  {FOUNDER_INFO.principles.map((pr, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <div className="text-sm font-semibold text-white">{pr.title}</div>
                        <div className="text-sm text-slate-300 leading-snug mt-0.5">{pr.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => openAdmission()}
                    className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-white text-[#0B1524] font-semibold text-[15px] hover:bg-slate-100 transition-colors cursor-pointer focus-ring-light"
                  >
                    <span>Yönetimle Tanışma Randevusu Al</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <Link
                    href="/hakkimizda"
                    className="inline-flex items-center h-12 px-6 rounded-xl text-white font-semibold text-[15px] border border-white/30 hover:bg-white/10 hover:border-white/60 transition-colors focus-ring-light"
                  >
                    Kurumsal Hikâyemiz
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership team directory */}
      <section className="py-16 sm:py-24 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold text-[var(--bcn-gold-ink)]">Profesyonel ve akademik kadro</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263D] tracking-tight">Lider Kadromuz</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Alanında uzman yöneticilerimiz, uluslararası eğitim standartlarını yerel değerlerle harmanlayarak öğrencilerimizin her kademedeki gelişimini titizlikle yönetir.
              </p>
            </div>

            <div className="flex flex-wrap gap-2" role="group" aria-label="Kadroyu filtrele">
              {categories.map((cat) => {
                const isOn = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    aria-pressed={isOn}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`h-11 px-4 rounded-xl text-sm font-semibold transition-colors inline-flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] ${
                      isOn ? "bg-[#0B1524] text-white" : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`tabular-nums ${isOn ? "text-slate-300" : "text-slate-500"}`}>{cat.count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <motion.ul layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredMembers.map((member: LeaderMember) => (
                <motion.li
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.25, ease: EASE }}
                >
                  {/* The whole card opens the profile */}
                  <button
                    type="button"
                    onClick={() => setActiveLeaderModal(member)}
                    className="group w-full h-full text-left rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-[border-color,box-shadow] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] flex flex-col"
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-200">
                      <Image
                        src={member.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-top group-hover:scale-103 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1524]/90 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white text-[#0B1524] text-xs font-semibold">
                        {member.category}
                      </span>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-lg font-extrabold tracking-tight">{member.name}</h3>
                        <p className="text-sm text-slate-300">{member.role}</p>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col gap-3 flex-1">
                      <p className="text-sm text-slate-700 leading-relaxed">{member.focus}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A8A]">
                        Profili görüntüle
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                      </span>
                    </div>
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </section>

      {/* Leader profile dialog (transitions.dev modal: 0.96 → 1, 250ms) */}
      {activeLeaderModal && (
        <div
          className="t-modal-scrim fixed inset-0 z-[60] flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0B1524]/70 backdrop-blur-sm"
          onClick={() => setActiveLeaderModal(null)}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="leader-dialog-title"
            onClick={(e) => e.stopPropagation()}
            className="t-modal relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-4 sm:my-auto"
          >
            <button
              type="button"
              onClick={() => setActiveLeaderModal(null)}
              aria-label="Kapat"
              className="absolute top-3 right-3 z-20 size-11 rounded-full bg-white/90 text-slate-700 hover:text-black hover:bg-white flex items-center justify-center shadow-md transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12">
              <div className="sm:col-span-5 relative min-h-[300px] bg-slate-900">
                <Image
                  src={activeLeaderModal.image}
                  alt={activeLeaderModal.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1524] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-0.5 rounded-full bg-white text-[#0B1524] text-xs font-semibold">
                    {activeLeaderModal.category}
                  </span>
                  <h3 id="leader-dialog-title" className="text-xl font-extrabold mt-2">{activeLeaderModal.name}</h3>
                  <p className="text-sm text-slate-300">{activeLeaderModal.role}</p>
                </div>
              </div>

              <div className="sm:col-span-7 p-6 sm:p-8 space-y-5 flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-slate-500">Sorumluluk alanı ve pedagojik odak</p>
                    <h4 className="text-base font-bold text-[#17263D]">{activeLeaderModal.focus}</h4>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-slate-500" aria-hidden="true" />
                      Akademik liderlik profili
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">{activeLeaderModal.bio}</p>
                  </div>

                  <ul className="space-y-1.5 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-slate-400" aria-hidden="true" />
                      Çekmeköy & Madenler Yerleşkesi
                    </li>
                    <li className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-slate-400" aria-hidden="true" />
                      <a href={`mailto:${INSTITUTION_INFO.email}`} className="hover:underline">{INSTITUTION_INFO.email}</a>
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setActiveLeaderModal(null);
                    openAdmission();
                  }}
                  className="w-full h-12 px-4 rounded-xl bg-[#0B1524] hover:bg-[#1E3A8A] text-white text-[15px] font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Görüşme Randevusu Talep Et</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Governance principles */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-sm font-semibold text-[var(--bcn-gold-ink)]">Kurumsal güvence</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263D]">Yönetişim ve Liderlik İlkelerimiz</h2>
            <p className="text-slate-600 text-base leading-relaxed">
              BCN Eğitim Kurumları&apos;nda yönetim kadromuz, tüm süreçlerde pedagojik şeffaflık, bilimsel hesap verebilirlik ve öğrenci esenliğini merkeze alır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {PRINCIPLES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-t-2 border-[#0B1524] pt-5 space-y-2">
                <Icon className="w-5 h-5 text-slate-500" aria-hidden="true" />
                <h3 className="text-lg font-bold text-[#17263D]">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#0B1524] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <p className="text-sm font-semibold text-[#C59B27]">Sizi kampüsümüze bekliyoruz</p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-balance">
            Yönetim Kadromuzla Tanışmak ve Kampüsümüzü Ziyaret Etmek İster misiniz?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Çocuğunuzun geleceğini birlikte planlamak, akademik programlarımızı detaylı incelemek için tanışma randevunuzu hemen oluşturabilirsiniz.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <button
              type="button"
              onClick={() => openAdmission()}
              className="w-full sm:w-auto h-12 px-8 rounded-xl bg-white text-[#0B1524] hover:bg-slate-100 font-semibold text-[15px] transition-colors cursor-pointer focus-ring-light"
            >
              Tanışma Randevusu Al
            </button>
            <a
              href={PHONE_HREF}
              className="w-full sm:w-auto h-12 px-8 rounded-xl text-white font-semibold text-[15px] border border-white/30 hover:bg-white/10 hover:border-white/60 transition-colors inline-flex items-center justify-center gap-2 focus-ring-light"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>{INSTITUTION_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
