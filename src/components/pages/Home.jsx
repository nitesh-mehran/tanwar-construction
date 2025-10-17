import React from "react";
import HeroSection from "../home/HeroSection";
import TrustedBadges from "../home/TrustedBadges";
import ServicesOverview from "../home/ServicesOverview";
import WhyChooseUs from "../home/WhyChooseUs";
import ProjectShowcase from "../home/ProjectShowcase";
import Testimonials from "../home/Testimonials";
import FAQSection from "../home/FAQSection";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AboutPreview from "../home/AboutPreview";

const Home = () => {
  return (
    <div className="bg-[#f9fafb] text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Trusted Badges */}
      <TrustedBadges />

      <AboutPreview />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Project Showcase */}
      <ProjectShowcase />

      {/* Testimonials */}
      <Testimonials />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default Home;
