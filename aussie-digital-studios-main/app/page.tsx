import Header from "@/components/Header";
import Image from "next/image";
import Hero from "./Home/Hero";
import AboutUs from "./Home/AboutUs";
import Services from "./Home/Services";
import PortfolioSection from "./Home/PortfolioSection";

export default function Home() {
  return (
    <div >
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <PortfolioSection />
    </div>
  );
}
