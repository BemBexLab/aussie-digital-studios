import Header from "@/components/Header";
import Image from "next/image";
import Hero from "./Home/Hero";
import AboutUs from "./Home/AboutUs";
import Services from "./Home/Services";
import PortfolioSection from "./Home/PortfolioSection";
import BrandLevelUp from "./Home/BrandLevelUp";
import PricingPlan from "./Home/PricingPlan";
import { Testimonials } from "./Home/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div >
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <PortfolioSection />
      <BrandLevelUp />
      <PricingPlan />
      <Testimonials />
      <Footer />
    </div>
  );
}
