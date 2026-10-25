import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import LevelsSection from "@/components/LevelsSection";
import ApproachSection from "@/components/ApproachSection";
import InternationalProgramsSection from "@/components/InternationalProgramsSection";
import CampusSection from "@/components/CampusSection";
import LifeAndAchievementsSection from "@/components/LifeAndAchievementsSection";
import NewsSection from "@/components/NewsSection";
import AdmissionCtaSection from "@/components/AdmissionCtaSection";

export default function HomePage() {
  return (
    <div className="w-full bg-[#0B1524] text-white selection:bg-[#C59B27] selection:text-[#0B1524]">
      {/* Hero fills the first screen behind the transparent header; the rest scrolls naturally */}
      <div className="-mt-[58px] md:-mt-[89px] h-[100svh] min-h-[620px]">
        <HeroSection />
      </div>
      <WelcomeSection />
      <LevelsSection />
      <ApproachSection />
      <InternationalProgramsSection />
      <CampusSection />
      <LifeAndAchievementsSection />
      <NewsSection />
      <AdmissionCtaSection />
    </div>
  );
}
