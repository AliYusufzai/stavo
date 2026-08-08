import React from "react";
import HeroSection from "./sections/HeroSection";
import FeaturedSection from "./sections/FeaturedSection";
import DiscoverSection from "./sections/DiscoverSection";

const Landing = () => {
  return (
    <div className="pt-2">
      <HeroSection />
      <FeaturedSection />
      <DiscoverSection />
    </div>
  );
};

export default Landing;
