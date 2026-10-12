"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SubpageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  bgImage?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function SubpageHero({
  badge,
  title,
  subtitle,
  bgImage = "/images/bcn/campus-facade-1.jpg",
  breadcrumbs,
}: SubpageHeroProps) {
  return (
    <section className="relative py-16 sm:py-24 bg-[#0D1829] text-white overflow-hidden">
      {/* Background imagery */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1524] via-[#0B1524]/80 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-2">
            <Link href="/" className="hover:text-white transition-colors">
              Ana Sayfa
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-amber-400 font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-amber-300 font-semibold tracking-wider uppercase">
            {badge}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
