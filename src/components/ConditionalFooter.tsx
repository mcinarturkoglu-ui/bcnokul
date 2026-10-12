"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();

  // On home page, the footer is integrated as Slide 10 of FullpageSlider
  if (pathname === "/") {
    return null;
  }

  return <Footer />;
}
