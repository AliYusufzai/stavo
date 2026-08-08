import React from "react";
import HeroSection from "./sections/HeroSection";
import FeaturedSection from "./sections/FeaturedSection";
import DiscoverSection from "./sections/DiscoverSection";
import CallToActionSection from "./sections/CallToActionSection";
import FooterSection from "./sections/FooterSection";

const Landing = () => {
  return (
    <div className="pt-2">
      <HeroSection />
      <FeaturedSection />
      <DiscoverSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};

export default Landing;
