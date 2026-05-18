import AboutHero from "@/Component/About/AboutHero";
import BeautySection from "@/Component/About/BeautySection";
import NewsBlogsSection from "@/Component/About/Newsblogssection";
import TeamSection from "@/Component/About/TeamSection";
import CTASection from "@/Component/Home/CTASection";
import StatsSection from "@/Component/Home/Statssection";

export default function About() {
  return (
    <>
      <AboutHero />
      <BeautySection />
      <StatsSection />
      <NewsBlogsSection />
      <TeamSection />
      <CTASection />
        </>
  );
}