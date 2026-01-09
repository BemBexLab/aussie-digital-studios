import Header from "@/components/Header";
import React from "react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import PortfolioSection from "./components/PortfolioSection";
import PricingPlan from "./components/PricingPlan";
import BrandLevelUp from "./components/BrandLevelUp";
import { Testimonials } from "./components/Testimonials";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div>
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
};

export default HomePage;
