"use client";

import React, { useState } from "react";
import { useModal } from "@/context/ModalContext";
import { MessageCircle, Phone, CalendarCheck, X, Sparkles } from "lucide-react";
import { INSTITUTION_INFO } from "@/data/bcnData";

export default function QuickContactFloating() {
  const { openAdmission } = useModal();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Expanded Quick Options */}
      {isExpanded && (
        <div className="flex flex-col gap-2 p-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-100 mb-1 animate-fadeIn text-xs font-semibold text-[#17263D]">
          <button
            type="button"
            onClick={() => {
              setIsExpanded(false);
              openAdmission();
            }}
            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors cursor-pointer"
          >
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1E3A8A] flex items-center justify-center">
              <CalendarCheck className="w-4 h-4" />
            </div>
            <div>
              <div>Hızlı Randevu Al</div>
              <div className="text-[10px] font-normal text-slate-500">Kampüs ziyareti planla</div>
            </div>
          </button>

          <a
            href="https://wa.me/9005520512336?text=Merhaba,%20BCN%20Koleji%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl hover:bg-emerald-50 text-left transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="text-emerald-800">WhatsApp Danışmanı</div>
              <div className="text-[10px] font-normal text-slate-500">Canlı hızlı yanıt</div>
            </div>
          </a>

          <a
            href={`tel:${INSTITUTION_INFO.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div>{INSTITUTION_INFO.phone}</div>
              <div className="text-[10px] font-normal text-slate-500">Hemen ara</div>
            </div>
          </a>
        </div>
      )}

      {/* Main floating button */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => openAdmission()}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#17263D] text-white text-xs font-bold shadow-xl hover:bg-[#1E3A8A] hover:shadow-2xl transition-all duration-300 border border-white/10 group cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
          <span>Kayıt & Ziyaret Randevusu</span>
        </button>

        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className={`relative w-13 h-13 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform active:scale-95 cursor-pointer ${
            isExpanded
              ? "bg-slate-800 text-white rotate-90"
              : "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-600/40"
          }`}
          aria-label="Hızlı İletişim"
        >
          {!isExpanded && (
            <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
          )}
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
}
