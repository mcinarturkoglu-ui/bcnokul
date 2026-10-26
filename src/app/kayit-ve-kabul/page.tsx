"use client";

import React, { useState } from "react";
import SubpageHero from "@/components/SubpageHero";
import LeadFormAlert from "@/components/LeadFormAlert";
import { FAQ_ITEMS } from "@/data/bcnData";
import { whatsappHref } from "@/lib/contact";
import { isLeadFormConfigured, submitLead, type LeadFormStatus } from "@/lib/submitLead";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { fieldClass, selectClass, labelClass, checkboxClass, Optional, SelectChevron } from "@/components/form/fields";

// A real sequence, so the steps keep their numbers
const STEPS = [
  { title: "Ön Başvuru", text: "Online ön kayıt formunu doldurarak danışmanımızın sizinle iletişime geçmesini sağlayın." },
  { title: "Tanıma & Düzey Belirleme", text: "Kademeye göre rehberlik tanıma mülakatı, dikkat gözlemi veya akademik düzey belirleme testi uygulanır." },
  { title: "Veli Tanışma Randevusu", text: "Okul yöneticilerimizle yüz yüze görüşerek müfredat, hedefler ve okul kültürü hakkında detaylı bilgi alın." },
  { title: "Kesin Kayıt & Oryantasyon", text: "Gerekli evrakların tamamlanmasıyla BCN ailesine katılım ve uyum programı süreci başlar." },
];

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState<LeadFormStatus>(isLeadFormConfigured ? "idle" : "unconfigured");
  const [formData, setFormData] = useState({
    parentName: "",
    relationship: "Anne",
    phone: "",
    email: "",
    district: "",
    level: "Aurelia Preschool",
    gradeLevel: "",
    meetingPreference: "Kampüsü ziyaret etmek istiyorum",
    kvkkConsent: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLeadFormConfigured) return;
    setStatus("sending");
    try {
      await submitLead(e.currentTarget, `Ön Kayıt: ${formData.level}`);
      setIsSubmitted(true);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <SubpageHero
        badge="2026 - 2027 Başvuru Dönemi"
        title="Kayıt ve Kabul Rehberi"
        subtitle="Çocuğunuzun geleceğine birlikte yön vermek için ön kayıt ve kampüs randevu sürecini başlatın."
        bgImage="/images/bcn/campus-lobby.jpg"
        breadcrumbs={[{ label: "Kayıt ve Kabul" }]}
      />

      {/* 4-Step Admission Journey */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold text-[var(--bcn-gold-ink)]">Adım adım kabul süreci</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263D]">
              4 Adımda Kayıt Yolculuğunuz
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Öğrencilerimizi tanıma, akademik potansiyellerini keşfetme ve velilerimizle ortak eğitim vizyonunu belirleme sürecimiz.
            </p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {STEPS.map((step, i) => (
              <li key={step.title} className="border-t-2 border-[#0B1524] pt-5">
                <span className="text-sm font-semibold text-slate-500 tabular-nums">Adım {i + 1}</span>
                <h3 className="mt-2 text-lg font-bold text-[#17263D]">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Inline Registration Form */}
      <section className="py-16 sm:py-24 bg-[#F7F8FA] border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-sm border border-slate-200 space-y-8">
            <div className="text-center space-y-2 max-w-lg mx-auto">
              <p className="text-sm font-semibold text-[var(--bcn-gold-ink)]">Kontenjan bilgisi ve randevu</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17263D]">
                Ön Kayıt Başvuru Formu
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Bilgilerinizi iletin, eğitim uzmanımız burs ve kontenjan olanakları ile ilgili size dönüş yapsın.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-10 text-center space-y-4" role="status">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#17263D]">
                  Başvurunuz Başarıyla Kaydedildi
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Sayın {formData.parentName}, talebiniz kabul ofisimize iletildi. En kısa sürede sizinle iletişime geçeceğiz.
                </p>
                <div className="pt-2">
                  <a
                    href={whatsappHref("Merhaba, BCN Eğitim Kurumları için ön kayıt başvurusu yaptım. Bilgi almak istiyorum.")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 h-12 px-5 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors"
                  >
                    WhatsApp Üzerinden Hızlı Bilgi Alın
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <LeadFormAlert status={status} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                  <div>
                    <label htmlFor="admission-parent" className={labelClass}>Veli adı soyadı *</label>
                    <input id="admission-parent" name="parentName" autoComplete="name" type="text" required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="Adınız ve soyadınız"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="admission-phone" className={labelClass}>Telefon numarası *</label>
                    <input id="admission-phone" name="phone" autoComplete="tel" inputMode="tel" type="tel" required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="05XX XXX XX XX"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="admission-email" className={labelClass}>E-posta<Optional /></label>
                    <input id="admission-email" name="email" autoComplete="email" type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ornek@email.com"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="admission-level" className={labelClass}>Başvurulan kademe *</label>
                    <div className="relative">
                      <select id="admission-level" name="level"
                        value={formData.level}
                        onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                        className={selectClass}
                      >
                        <option value="Aurelia Preschool">Aurelia Preschool (3-6 Yaş)</option>
                        <option value="İlkokul">İlkokul</option>
                        <option value="Ortaokul">Ortaokul</option>
                        <option value="Anadolu Lisesi">Anadolu Lisesi</option>
                        <option value="Fen Lisesi">Fen Lisesi</option>
                      </select>
                      <SelectChevron />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="admission-grade" className={labelClass}>Sınıf veya yaş<Optional /></label>
                    <input id="admission-grade" name="gradeLevel" type="text"
                      value={formData.gradeLevel}
                      onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                      placeholder="Örn: 5 yaş, 1. sınıf, 9. sınıf"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="admission-meeting" className={labelClass}>Görüşme tercihi</label>
                    <div className="relative">
                      <select id="admission-meeting" name="meetingPreference"
                        value={formData.meetingPreference}
                        onChange={(e) => setFormData({ ...formData, meetingPreference: e.target.value })}
                        className={selectClass}
                      >
                        <option value="Kampüsü ziyaret etmek istiyorum">Kampüs ziyareti</option>
                        <option value="Tanışma randevusu talep ediyorum">Tanışma randevusu</option>
                        <option value="Online görüşme talep ediyorum">Online görüşme</option>
                      </select>
                      <SelectChevron />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <label className="flex items-start gap-3 min-h-11 py-1 text-sm text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      name="kvkkConsent"
                      required
                      checked={formData.kvkkConsent}
                      onChange={(e) => setFormData({ ...formData, kvkkConsent: e.target.checked })}
                      className={checkboxClass}
                    />
                    <span>
                      Paylaştığım bilgilerin{" "}
                      <a href="#kvkk" className="font-semibold text-[#1E3A8A] underline underline-offset-2">KVKK Aydınlatma Metni</a>{" "}
                      kapsamında değerlendirilmesini onaylıyorum. *
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "unconfigured"}
                  className="w-full h-12 rounded-xl bg-[#0B1524] hover:bg-[#1E3A8A] text-white font-semibold text-[15px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Gönderiliyor…" : "Ön Kayıt Talebini Gönder"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section: transitions.dev accordion (grid rows 0fr → 1fr, chevron flip) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <p className="text-sm font-semibold text-[var(--bcn-gold-ink)]">Merak edilenler</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17263D]">
              Sıkça Sorulan Sorular
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="t-acc" data-open={isOpen}>
                  <button
                    type="button"
                    id={`faq-q-${idx}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${idx}`}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full min-h-14 py-4 text-left font-semibold text-base text-[#17263D] flex items-center justify-between gap-4 hover:text-[#1E3A8A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] rounded-lg"
                  >
                    <span>{item.q}</span>
                    <ChevronDown className="t-acc-chevron w-5 h-5 shrink-0 text-slate-500" aria-hidden="true" />
                  </button>
                  <div className="t-acc-panel" id={`faq-a-${idx}`} role="region" aria-labelledby={`faq-q-${idx}`}>
                    <div className="t-acc-panel-inner" inert={!isOpen}>
                      <p className="pb-5 text-sm sm:text-base text-slate-600 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* KVKK Policy Info */}
      <section id="kvkk" className="py-12 bg-slate-50 border-t border-slate-200 text-sm text-slate-600 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h2 className="text-base font-bold text-slate-800">
            6698 Sayılı KVKK Aydınlatma ve Bilgilendirme Metni
          </h2>
          <p className="leading-relaxed">
            BCN Eğitim Kurumları olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla veli ve öğrencilerimize ait kişisel verileri; kayıt-kabul süreçlerinin yürütülmesi, randevuların organize edilmesi ve yasal yükümlülüklerin ifası amacıyla işlemekteyiz. Verileriniz üçüncü kişilerle ticari amaçla paylaşılmaz ve en yüksek siber güvenlik önlemleri altında saklanır.
          </p>
        </div>
      </section>
    </>
  );
}
