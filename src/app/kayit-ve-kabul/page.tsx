"use client";

import React, { useState } from "react";
import SubpageHero from "@/components/SubpageHero";
import LeadFormAlert from "@/components/LeadFormAlert";
import { FAQ_ITEMS, INSTITUTION_INFO } from "@/data/bcnData";
import { whatsappHref } from "@/lib/contact";
import { isLeadFormConfigured, submitLead, type LeadFormStatus } from "@/lib/submitLead";
import { CheckCircle2 } from "lucide-react";

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState<LeadFormStatus>(isLeadFormConfigured ? "idle" : "unconfigured");
  const [formData, setFormData] = useState({
    parentName: "",
    relationship: "Anne",
    phone: "",
    email: "",
    district: "Çekmeköy",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold text-[#1E3A8A] tracking-wider uppercase">
              ADIM ADIM KABUL SÜRECİ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17263D]">
              4 Adımda Kayıt Yolculuğunuz
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Öğrencilerimizi tanıma, akademik potansiyellerini keşfetme ve velilerimizle ortak eğitim vizyonunu belirleme sürecimiz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-[#F7F8FA] border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#17263D] text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-[#17263D]">Ön Başvuru</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Online ön kayıt formunu doldurarak danışmanımızın sizinle iletişime geçmesini sağlayın.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F7F8FA] border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-[#17263D]">Tanıma & Düzey Belirleme</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Kademeye göre rehberlik tanıma mülakatı, dikkat gözlemi veya akademik düzey belirleme testi uygulanır.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F7F8FA] border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-[#17263D]">Veli Tanışma Randevusu</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Okul yöneticilerimizle yüz yüze görüşerek müfredat, hedefler ve okul kültürü hakkında detaylı bilgi alın.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F7F8FA] border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="text-base font-bold text-[#17263D]">Kesin Kayıt & Oryantasyon</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Gerekli evrakların tamamlanmasıyla BCN ailesine katılım ve uyum programı süreci başlar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inline Registration Form */}
      <section className="py-16 sm:py-24 bg-[#F7F8FA] border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 space-y-8">
            <div className="text-center space-y-2 max-w-lg mx-auto">
              <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                KONTENJAN BİLGİSİ & RANDEVU
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17263D]">
                Ön Kayıt Başvuru Formu
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                  >
                    WhatsApp Üzerinden Hızlı Bilgi Alın
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <LeadFormAlert status={status} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="admission-parent" className="block text-xs font-semibold text-slate-700 mb-1">
                      Veli Adı Soyadı *
                    </label>
                    <input id="admission-parent" name="parentName" autoComplete="name"
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="Adınız Soyadınız"
                      className="w-full px-3.5 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                    />
                  </div>

                  <div>
                    <label htmlFor="admission-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                      Telefon Numarası *
                    </label>
                    <input id="admission-phone" name="phone" autoComplete="tel" inputMode="tel"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="05XX XXX XX XX"
                      className="w-full px-3.5 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="admission-email" className="block text-xs font-semibold text-slate-700 mb-1">
                      E-Posta Adresi
                    </label>
                    <input id="admission-email" name="email" autoComplete="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@ornek.com"
                      className="w-full px-3.5 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                    />
                  </div>

                  <div>
                    <label htmlFor="admission-level" className="block text-xs font-semibold text-slate-700 mb-1">
                      Başvurulan Kademe *
                    </label>
                    <select id="admission-level" name="level"
                      value={formData.level}
                      onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                      className="w-full px-3.5 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                    >
                      <option value="Aurelia Preschool">Aurelia Preschool (3-6 Yaş)</option>
                      <option value="İlkokul">İlkokul (IB PYP)</option>
                      <option value="Ortaokul">Ortaokul (5-8. Sınıf)</option>
                      <option value="Anadolu Lisesi">Anadolu Lisesi (Kanada OSSD & AP)</option>
                      <option value="Fen Lisesi">Fen Lisesi (İleri STEM)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="admission-grade" className="block text-xs font-semibold text-slate-700 mb-1">
                      Hedef Sınıf Seviyesi
                    </label>
                    <input id="admission-grade" name="gradeLevel"
                      type="text"
                      value={formData.gradeLevel}
                      onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                      placeholder="Örn: 1. Sınıf veya Hazırlık"
                      className="w-full px-3.5 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                    />
                  </div>

                  <div>
                    <label htmlFor="admission-meeting" className="block text-xs font-semibold text-slate-700 mb-1">
                      Randevu Tercihi
                    </label>
                    <select id="admission-meeting" name="meetingPreference"
                      value={formData.meetingPreference}
                      onChange={(e) => setFormData({ ...formData, meetingPreference: e.target.value })}
                      className="w-full px-3.5 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                    >
                      <option value="Kampüsü ziyaret etmek istiyorum">Kampüsü ziyaret etmek istiyorum</option>
                      <option value="Tanışma randevusu talep ediyorum">Tanışma randevusu talep ediyorum</option>
                      <option value="Online görüşme talep ediyorum">Online görüşme talep ediyorum</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2 text-xs text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      name="kvkkConsent"
                      required
                      checked={formData.kvkkConsent}
                      onChange={(e) => setFormData({ ...formData, kvkkConsent: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-[#1E3A8A]"
                    />
                    <span>
                      Ön kayıt formunda paylaştığım bilgilerin KVKK kapsamında değerlendirilmesini onaylıyorum.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "unconfigured"}
                  className="w-full py-4 rounded-xl bg-[#17263D] hover:bg-[#1E3A8A] text-white font-bold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Gönderiliyor…" : "Ön Kayıt Talebini Gönder"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
              MERAK EDİLENLER
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17263D]">
              Sıkça Sorulan Sorular
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-[#17263D] flex items-center justify-between bg-[#F7F8FA] hover:bg-slate-100 transition-colors"
                  >
                    <span>{item.q}</span>
                    <span className="text-lg font-mono text-[#1E3A8A]">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="p-5 text-xs sm:text-sm text-slate-600 bg-white leading-relaxed border-t border-slate-100">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* KVKK Policy Info */}
      <section id="kvkk" className="py-12 bg-slate-50 border-t border-slate-200 text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h3 className="font-bold text-slate-700 uppercase tracking-wider">
            6698 Sayılı KVKK Aydınlatma ve Bilgilendirme Metni
          </h3>
          <p className="leading-relaxed">
            BCN Eğitim Kurumları olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla veli ve öğrencilerimize ait kişisel verileri; kayıt-kabul süreçlerinin yürütülmesi, randevuların organize edilmesi ve yasal yükümlülüklerin ifası amacıyla işlemekteyiz. Verileriniz üçüncü kişilerle ticari amaçla paylaşılmaz ve en yüksek siber güvenlik önlemleri altında saklanır.
          </p>
        </div>
      </section>
    </>
  );
}
