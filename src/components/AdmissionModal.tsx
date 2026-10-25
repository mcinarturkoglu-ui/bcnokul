"use client";

import React, { useState, useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import { X, CheckCircle2, Calendar, Phone, Mail, User, School, ArrowRight, ShieldCheck } from "lucide-react";
import LeadFormAlert from "@/components/LeadFormAlert";
import { whatsappHref } from "@/lib/contact";
import { isLeadFormConfigured, submitLead, type LeadFormStatus } from "@/lib/submitLead";

export default function AdmissionModal() {
  const { isAdmissionOpen, closeAdmission, selectedLevel } = useModal();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState<LeadFormStatus>(isLeadFormConfigured ? "idle" : "unconfigured");
  const dialogRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    parentName: "",
    relationship: "Anne",
    phone: "",
    email: "",
    district: "Çekmeköy / İstanbul",
    level: "Aurelia Preschool",
    gradeLevel: "",
    currentSchool: "",
    meetingPreference: "Kampüsü ziyaret etmek istiyorum",
    kvkkConsent: false,
    notificationConsent: false,
  });

  useEffect(() => {
    if (selectedLevel) {
      setFormData((prev) => ({ ...prev, level: selectedLevel }));
    }
  }, [selectedLevel]);

  // Lock body scroll, close on Escape, and move focus into the dialog while open
  useEffect(() => {
    if (!isAdmissionOpen) {
      setIsSubmitted(false);
      setStatus(isLeadFormConfigured ? "idle" : "unconfigured");
      return;
    }

    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLElement>("input, select, button")?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAdmission();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isAdmissionOpen, closeAdmission]);

  if (!isAdmissionOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLeadFormConfigured) return;
    setStatus("sending");
    try {
      await submitLead(e.currentTarget, `Randevu Talebi: ${formData.level}`);
      setIsSubmitted(true);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md animate-fadeIn"
      onClick={closeAdmission}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="admission-title"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-[#17263D] text-white px-6 py-6 sm:px-8 relative">
          <button
            onClick={closeAdmission}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 text-xs font-semibold text-amber-300 tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true"></span>
            2026 - 2027 Kayıt & Kabul Dönemi
          </div>
          <h2 id="admission-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Ön Kayıt ve Kampüs Ziyaret Randevusu
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Çocuğunuzun eğitim yolculuğunu birlikte planlayalım. Eğitim danışmanlarımız 24 saat içinde sizinle iletişime geçecektir.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-5" role="status">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-4 border-emerald-100">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#17263D]">
                  Başvurunuz Başarıyla Alındı
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Sayın <span className="font-semibold text-slate-800">{formData.parentName || "Velimiz"}</span>, ön kayıt ve randevu talebiniz kayıt kabul ofisimize iletilmiştir.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 max-w-md mx-auto text-left text-xs sm:text-sm space-y-2">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Seçilen Kademe:</span>
                  <span className="font-medium text-[#17263D]">{formData.level}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Görüşme Tercihi:</span>
                  <span className="font-medium text-[#17263D]">{formData.meetingPreference}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={whatsappHref("Merhaba, BCN Eğitim Kurumları için ön kayıt başvurusu yaptım. Bilgi almak istiyorum.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-colors"
                >
                  WhatsApp'tan Hızlı İletişim
                </a>
                <button
                  type="button"
                  onClick={closeAdmission}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-slate-200 transition-colors"
                >
                  Pencereyi Kapat
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <LeadFormAlert status={status} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Veli Adı Soyadı */}
                <div>
                  <label htmlFor="modal-parent" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Veli Adı Soyadı *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input id="modal-parent" name="parentName" autoComplete="name"
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="Adınız ve Soyadınız"
                      className="w-full pl-10 pr-3.5 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Yakınlık Derecesi */}
                <div>
                  <label htmlFor="modal-relationship" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Yakınlık Derecesi
                  </label>
                  <select id="modal-relationship" name="relationship"
                    value={formData.relationship}
                    onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                    className="w-full px-3.5 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                  >
                    <option value="Anne">Anne</option>
                    <option value="Baba">Baba</option>
                    <option value="Vasi">Vasi</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Telefon */}
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Telefon Numarası *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input id="modal-phone" name="phone" autoComplete="tel" inputMode="tel"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="05XX XXX XX XX"
                      className="w-full pl-10 pr-3.5 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* E-posta */}
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    E-Posta Adresi
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input id="modal-email" name="email" autoComplete="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ornek@email.com"
                      className="w-full pl-10 pr-3.5 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Kademe */}
                <div>
                  <label htmlFor="modal-level" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Başvurulan Eğitim Kademesi *
                  </label>
                  <div className="relative">
                    <School className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select id="modal-level" name="level"
                      value={formData.level}
                      onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                    >
                      <option value="Aurelia Preschool">Aurelia Preschool (3-6 Yaş)</option>
                      <option value="İlkokul">İlkokul (IB PYP Aday Okulu)</option>
                      <option value="Ortaokul">Ortaokul (5-8. Sınıf / LGS Hazırlık)</option>
                      <option value="Anadolu Lisesi">Anadolu Lisesi (OSSD Çift Diploma & AP)</option>
                      <option value="Fen Lisesi">Fen Lisesi (İleri STEM & Olimpiyat)</option>
                    </select>
                  </div>
                </div>

                {/* Sınıf Seviyesi */}
                <div>
                  <label htmlFor="modal-grade" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Hedef Sınıf / Yaş
                  </label>
                  <input id="modal-grade" name="gradeLevel"
                    type="text"
                    value={formData.gradeLevel}
                    onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                    placeholder="Örn: 1. Sınıf / 5 Yaş / 9. Sınıf"
                    className="w-full px-3.5 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* İkamet */}
                <div>
                  <label htmlFor="modal-district" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    İkamet İlçe / Semt
                  </label>
                  <input id="modal-district" name="district" autoComplete="address-level2"
                    type="text"
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    placeholder="Örn: Çekmeköy, Ümraniye, Sancaktepe..."
                    className="w-full px-3.5 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                  />
                </div>

                {/* Görüşme Tercihi */}
                <div>
                  <label htmlFor="modal-meeting" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Randevu Tercihi
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select id="modal-meeting" name="meetingPreference"
                      value={formData.meetingPreference}
                      onChange={(e) => setFormData({ ...formData, meetingPreference: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                    >
                      <option value="Kampüsü ziyaret etmek istiyorum">Kampüsü ziyaret etmek istiyorum</option>
                      <option value="Tanışma randevusu talep ediyorum">Tanışma randevusu talep ediyorum</option>
                      <option value="Online görüşme talep ediyorum">Online görüşme talep ediyorum</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="pt-2 space-y-2 border-t border-slate-100">
                <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    name="kvkkConsent"
                    required
                    checked={formData.kvkkConsent}
                    onChange={(e) => setFormData({ ...formData, kvkkConsent: e.target.checked })}
                    className="mt-0.5 rounded border-slate-300 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                  />
                  <span>
                    Ön kayıt formunda paylaştığım bilgilerin, kayıt ve kabul süreci kapsamında KVKK Aydınlatma Metni uyarınca işlenmesini kabul ediyorum.
                  </span>
                </label>
                <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    name="notificationConsent"
                    checked={formData.notificationConsent}
                    onChange={(e) => setFormData({ ...formData, notificationConsent: e.target.checked })}
                    className="mt-0.5 rounded border-slate-300 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                  />
                  <span>
                    Tarafıma BCN Eğitim Kurumları tarafından bilgilendirme yapılmasına onay veriyorum.
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={status === "sending" || status === "unconfigured"}
                  className="disabled:opacity-50 disabled:cursor-not-allowed w-full py-3.5 px-6 rounded-xl bg-[#17263D] hover:bg-[#1E3A8A] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>{status === "sending" ? "Gönderiliyor…" : "Ön Kayıt Talebini Gönder"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Bilgileriniz 256-bit SSL güvenlik protokolü ile korunmaktadır.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
