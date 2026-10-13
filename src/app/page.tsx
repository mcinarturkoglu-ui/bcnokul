import FullPageContainer from "@/components/FullPageContainer";
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
    <main className="w-full h-full bg-[#0B1524] text-white overflow-hidden selection:bg-[#C59B27] selection:text-[#0B1524]">
      <FullPageContainer>
        <HeroSection />
        <WelcomeSection />
        <LevelsSection />
        <ApproachSection />
        <InternationalProgramsSection />
        <CampusSection />
        <LifeAndAchievementsSection />
        <NewsSection />
        <AdmissionCtaSection />
      </FullPageContainer>
    </main>
  );
}
