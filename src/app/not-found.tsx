import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-[#F7F8FA]">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-200/80 text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-50 text-amber-700 font-black text-2xl">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-[#17263D]">
            Sayfa Bulunamadı
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfaya dönebilir veya diğer bölümlerimizi inceleyebilirsiniz.
          </p>
        </div>
        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#17263D] hover:bg-[#1E3A8A] text-white font-bold text-xs sm:text-sm transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Ana Sayfaya Dön</span>
          </Link>
          <Link
            href="/kademeler"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-200 text-[#17263D] font-bold text-xs sm:text-sm hover:bg-slate-50 transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Kademelerimiz</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
