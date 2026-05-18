
import CTASection from "@/Component/Home/CTASection";
import HeroSection from "@/Component/Home/HeroSection";
import NewArrivals from "@/Component/Home/Newarrivals ·";
import Featuressection from "@/Component/Home/Featuressection";
  
import StatsSection from "@/Component/Home/Statssection";
import WhoWeAre from "@/Component/Home/WhoWeAre";
import WhyChooseUs from "@/Component/Home/WhyChooseUs";


export default function Home() {
  return (
    <> 
   
    <HeroSection />
    <WhoWeAre />
    <StatsSection />
    <WhyChooseUs />
    <NewArrivals />
   
    <CTASection />
   
    </>
  );
}
