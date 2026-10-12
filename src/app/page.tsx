import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import LevelsSection from "@/components/LevelsSection";
import ApproachSection from "@/components/ApproachSection";
import InternationalProgramsSection from "@/components/InternationalProgramsSection";
import CampusSection from "@/components/CampusSection";
import LifeAndAchievementsSection from "@/components/LifeAndAchievementsSection";
import NewsSection from "@/components/NewsSection";
import AdmissionCtaSection from "@/components/AdmissionCtaSection";
import FooterSlide from "@/components/FooterSlide";
import FullpageSlider from "@/components/FullpageSlider";

export default function HomePage() {
  return (
    <FullpageSlider>
      <HeroSection />
      <WelcomeSection />
      <LevelsSection />
      <ApproachSection />
      <InternationalProgramsSection />
      <CampusSection />
      <LifeAndAchievementsSection />
      <NewsSection />
      <AdmissionCtaSection />
      <FooterSlide />
    </FullpageSlider>
  );
}
