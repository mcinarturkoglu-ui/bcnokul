"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import { LEADERSHIP_TEAM, FOUNDER_INFO, INSTITUTION_INFO, LeaderMember } from "@/data/bcnData";
import { useModal } from "@/context/ModalContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  GraduationCap,
  Sparkles,
  Building2,
  Calendar,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  X,
  Award,
  BookOpen
} from "lucide-react";

export default function LeadershipPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeLeaderModal, setActiveLeaderModal] = useState<LeaderMember | null>(null);
  const { openAdmission } = useModal();

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

      {/* Leadership Stats Strip */}
      <div className="bg-[#101F38] border-b border-slate-800 text-slate-300 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">14</div>
              <div className="text-xs text-amber-300/90 font-medium">Uzman Akademik Yönetici</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">1 : 8</div>
              <div className="text-xs text-amber-300/90 font-medium">Bireysel Rehberlik Oranı</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">4 Kademede</div>
              <div className="text-xs text-amber-300/90 font-medium">Kesintisiz Ekol Yönetimi</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">3 Akreditasyon</div>
              <div className="text-xs text-amber-300/90 font-medium">IB PYP, OSSD Kanada, AP</div>
            </div>
          </div>
        </div>
      </div>

      {/* Kurucu Spotlight Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#101F38] via-[#172B4D] to-[#0B1528] rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-2xl relative overflow-hidden border border-slate-700/60">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Founder Portrait with Luxury Gold Glow Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-600 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="relative w-72 h-96 sm:w-80 sm:h-[430px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900/60">
                    <Image
                      src={FOUNDER_INFO.bio ? "/images/bcn/founder-adem-bican.png" : "/images/bcn/founder-adem-bican.png"}
                      alt={FOUNDER_INFO.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-center">
                      <span className="px-3 py-1 rounded-full bg-amber-400 text-[#17263D] text-[11px] font-extrabold uppercase tracking-widest inline-block shadow-md">
                        Kurucumuz
                      </span>
                      <h3 className="text-2xl font-black text-white mt-2 tracking-tight">
                        {FOUNDER_INFO.name}
                      </h3>
                      <p className="text-xs text-amber-200/90 font-medium">
                        {FOUNDER_INFO.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Text & Principles */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/15 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Kurucu Mesajı & Eğitim Vizyonu</span>
                </div>

                <div className="relative bg-white/[0.07] border border-white/15 rounded-2xl p-6 sm:p-7 backdrop-blur-md shadow-inner">
                  <Quote className="w-10 h-10 text-amber-400/30 absolute top-4 right-4" />
                  <p className="text-base sm:text-xl font-serif italic text-slate-100 leading-relaxed pr-6">
                    "{FOUNDER_INFO.quote}"
                  </p>
                </div>

                <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    BCN College’ı kurarken çıkış noktamız netti: Eğitim, yalnızca akademik bir müfredat aktarımı değil; bir zihinsel disiplin, karakter ve gelecek bilinci inşasıdır. Bizim için okul; öğrencinin yalnızca bilgi edindiği değil, düşünmeyi öğrendiği, sorgulama cesareti kazandığı ve kendi potansiyelini sistemli biçimde geliştirdiği güçlü bir yaşam alanıdır.
                  </p>
                  <p>
                    Cumhuriyetimizin kurucusu Gazi Mustafa Kemal Atatürk’ün akıl, bilim ve çağdaşlık vizyonu; okulumuzun tüm kademelerindeki temel yol göstericimizdir.
                  </p>
                </div>

                {/* 4 Core Principles with Golden Accents */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {FOUNDER_INFO.principles.map((pr, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-white/[0.06] border border-white/10 hover:border-amber-400/40 transition-colors flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white tracking-wide">{pr.title}</div>
                        <div className="text-[11px] text-slate-300 leading-snug mt-0.5">{pr.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex flex-wrap gap-4">
                  <button
                    onClick={() => openAdmission()}
                    className="sheen-btn inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#17263D] font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-amber-400/20 cursor-pointer"
                  >
                    <span>Yönetimle Tanışma Randevusu Al</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    href="/hakkimizda"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-xs hover:bg-white/20 transition-colors border border-white/20"
                  >
                    <span>Kurumsal Hikâyemiz</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Leadership Team Directory */}
      <section className="py-16 sm:py-24 bg-[#F7F8FA] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold text-[#1E3A8A] tracking-wider uppercase">
                PROFESYONEL VE AKADEMİK KADRO
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263D] tracking-tight">
                Lider Kadromuz
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Alanında uzman yöneticilerimiz, uluslararası eğitim standartlarını yerel değerlerle harmanlayarak öğrencilerimizin her kademedeki gelişimini titizlikle yönetir.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-[#17263D] text-white shadow-lg shadow-[#17263D]/25"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      selectedCategory === cat.id
                        ? "bg-amber-400 text-[#17263D]"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Leaders Animated Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredMembers.map((member: LeaderMember) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="luxury-card rounded-3xl overflow-hidden flex flex-col justify-between group cursor-pointer"
                  onClick={() => setActiveLeaderModal(member)}
                >
                  <div>
                    {/* Portrait Container with Sheen Reflection */}
                    <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 flex items-center justify-center">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#101F38]/90 via-[#101F38]/20 to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />

                      {/* Role category badge over photo */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#17263D] text-[10px] font-extrabold shadow-sm border border-slate-100">
                          {member.category}
                        </span>
                      </div>

                      {/* Name & Title on bottom of photo */}
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <h3 className="text-lg font-black tracking-tight drop-shadow-sm group-hover:text-amber-200 transition-colors">
                          {member.name}
                        </h3>
                        <div className="text-xs font-bold text-amber-300">
                          {member.role}
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-3">
                      <div className="p-3 rounded-xl bg-[#F7F8FA] border border-slate-100 group-hover:border-amber-200/50 transition-colors">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#1E3A8A]">
                          Uzmanlık & Sorumluluk
                        </div>
                        <div className="text-xs font-semibold text-slate-800 mt-0.5 line-clamp-1">
                          {member.focus}
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  {/* Interactive Button */}
                  <div className="p-5 pt-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveLeaderModal(member);
                      }}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-100 group-hover:bg-[#17263D] text-[#17263D] group-hover:text-white transition-all text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>Detaylı Profil & Randevu</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Leader Detail Modal Dialog */}
      <AnimatePresence>
        {activeLeaderModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLeaderModal(null)}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLeaderModal(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 text-slate-700 hover:text-black hover:bg-white flex items-center justify-center shadow-md transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-12">
                {/* Left Photo Header */}
                <div className="sm:col-span-5 relative h-64 sm:h-auto min-h-[300px] bg-slate-900">
                  <Image
                    src={activeLeaderModal.image}
                    alt={activeLeaderModal.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-[#17263D] text-[10px] font-extrabold uppercase">
                      {activeLeaderModal.category}
                    </span>
                    <h3 className="text-xl font-black mt-1">{activeLeaderModal.name}</h3>
                    <p className="text-xs text-amber-300 font-semibold">{activeLeaderModal.role}</p>
                  </div>
                </div>

                {/* Right Details */}
                <div className="sm:col-span-7 p-6 sm:p-8 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#1E3A8A]">
                        Sorumluluk Alanı & Pedagojik Odak
                      </div>
                      <h4 className="text-sm font-bold text-[#17263D]">
                        {activeLeaderModal.focus}
                      </h4>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-slate-200/80 space-y-2">
                      <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-[#1E3A8A]" />
                        <span>Akademik Liderlik Profili</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {activeLeaderModal.bio}
                      </p>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-amber-500" />
                        <span>Çekmeköy & Madenler Yerleşkesi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-amber-500" />
                        <span>{INSTITUTION_INFO.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        setActiveLeaderModal(null);
                        openAdmission();
                      }}
                      className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#17263D] text-xs font-extrabold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Görüşme Randevusu Talep Et</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Institutional Management Principles */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#1E3A8A] tracking-wider uppercase">
              KURUMSAL GÜVENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263D]">
              Yönetişim ve Liderlik İlkelerimiz
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              BCN Eğitim Kurumları'nda yönetim kadromuz, tüm süreçlerde pedagojik şeffaflık, bilimsel hesap verebilirlik ve öğrenci esenliğini merkeze alır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200/80 space-y-3 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#1E3A8A] flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#17263D]">Açık Kapı ve Şeffaf İletişim</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Yöneticilerimiz ve okul müdürlerimiz, velilerimizle düzenli akademik geri bildirim toplantıları ve birebir görüşmelerle sürekli temas halindedir.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200/80 space-y-3 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#17263D]">Pedagojik Liderlik</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Yöneticilerimiz yalnızca idari operasyonları değil; öğretmen gelişimini, sınıf içi gözlemleri ve müfredat yeniliklerini doğrudan yönetir.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200/80 space-y-3 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#17263D]">Küresel Akreditasyon</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                IB PYP, OSSD Kanada ve AP standartlarının her kademede eksiksiz uygulanması için uluslararası denetim ve kalite güvencesi sağlanır.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200/80 space-y-3 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#17263D]">Veriye Dayalı Takip</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ölçme ve Değerlendirme koordinatörlüğümüz ile her çocuğun öğrenme profili yapay zekâ ve istatistiki modellerle takip edilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-[#101F38] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
            SİZİ KAMPÜSÜMÜZE BEKLİYORUZ
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Yönetim Kadromuzla Tanışmak ve Kampüsümüzü Ziyaret Etmek İster misiniz?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Çocuğunuzun geleceğini birlikte planlamak, akademik programlarımızı detaylı incelemek için tanışma randevunuzu hemen oluşturabilirsiniz.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => openAdmission()}
              className="sheen-btn w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#17263D] font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl shadow-amber-400/20 cursor-pointer"
            >
              Tanışma Randevusu Al
            </button>
            <a
              href={`tel:${INSTITUTION_INFO.phone.replace(/\s+/g, "")}`}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{INSTITUTION_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
