"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { INSTITUTION_INFO } from "@/data/bcnData";

export default function CampusSection() {
  return (
    <section className="w-full py-20 lg:py-28 bg-white text-[#17263D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 lg:mb-16">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#C59B27] uppercase">
              Öğrenme ve Yaşam Alanları
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#17263D]">
              Madenler / Çekmeköy Kampüsümüz.
            </h2>
          </div>
          <Link
            href="/kampusumuz"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1E3A8A] hover:text-[#17263D] transition-colors group cursor-pointer shrink-0"
          >
            <span>Kampüs Olanaklarını Keşfedin</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Large Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Main Panorama: Campus Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 group"
          >
            <Image
              src="/images/bcn/campus-building-wide.jpg"
              alt="BCN Koleji Modern Kampüs Binası"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover group-hover:scale-104 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[11px] font-mono tracking-widest uppercase text-amber-300">
                12.000 m² Entegre Yaşam Alanı
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                Depreme Dayanıklı Mimari & Doğal Işık Alan Derslikler
              </h3>
            </div>
          </motion.div>

          {/* Right Column: Two High-Quality Facility Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative flex-1 min-h-[200px] rounded-3xl overflow-hidden shadow-md border border-slate-100 group"
            >
              <Image
                src="/images/bcn/science-lab.jpg"
                alt="İleri Araştırma Laboratuvarı"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono tracking-wider uppercase text-amber-300 block">
                  BİLİM & AR-GE
                </span>
                <h4 className="text-base font-bold">Fizik, Kimya & Robotik Laboratuvarları</h4>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative flex-1 min-h-[200px] rounded-3xl overflow-hidden shadow-md border border-slate-100 group"
            >
              <Image
                src="/images/bcn/sports-facility.jpg"
                alt="Kapalı Spor Salonu"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono tracking-wider uppercase text-amber-300 block">
                  SPOR & GELİŞİM
                </span>
                <h4 className="text-base font-bold">FIBA Onaylı Kapalı Spor Salonu</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
