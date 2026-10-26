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
    <section
      data-hero="dark"
      className="relative -mt-[58px] md:-mt-[89px] pt-[122px] sm:pt-[154px] md:pt-[185px] pb-16 sm:pb-24 bg-[#0D1829] text-white overflow-hidden"
    >
      {/* Background imagery */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Same single navy scrim as the home hero, deepening toward the page below */}
        <div className="absolute inset-0 bg-[#0B1524]/75" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B1524] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          {/* Breadcrumbs */}
          <nav aria-label="Konum" className="flex flex-wrap items-center gap-2 text-sm text-slate-300 mb-2">
            <Link href="/" className="inline-block py-3 -my-3 hover:text-white transition-colors">
              Ana Sayfa
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                {crumb.href ? (
                  <Link href={crumb.href} className="inline-block py-3 -my-3 hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Eyebrow, same as the home page section headings */}
          <p className="text-sm font-semibold text-[#C59B27]">{badge}</p>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
