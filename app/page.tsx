import Footer from "@/Component/Footer";
import Header from "@/Component/Header";
import CTASection from "@/Component/Home/CTASection";
import HeroSection from "@/Component/Home/HeroSection";
import NewArrivals from "@/Component/Home/Newarrivals ·";
  
import StatsSection from "@/Component/Home/Statssection";
import WhoWeAre from "@/Component/Home/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <> 
    <Header />
    <HeroSection />
    <WhoWeAre />
    <StatsSection />
    <NewArrivals />
    <CTASection />
    <Footer />
    </>
  );
}
