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
    <div className="w-full bg-white text-[#17263D] overflow-x-hidden selection:bg-[#17263D] selection:text-white">
      <HeroSection />
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
