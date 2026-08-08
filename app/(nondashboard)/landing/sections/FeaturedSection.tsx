import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const FeaturedSection = () => {
  return (
    <div className="max-w-4xl xl:max-w-6xl mx-auto py-20">
      <div className="text-4xl font-bold max-w-2/3 text-center mx-auto mb-12">
        Quickly find the home you want using our effective search filters
      </div>
      <div className="flex flex-col gap-4 md:flex-row lg:gap-10">
        {[
          {
            src: "/landing-search1.png",
            title: "Trustworthy and Verified Listings",
            desc: "Find homes that have been thoroughly vetted and verified for your peace of mind.",
          },
          {
            src: "/landing-search2.png",
            title: "Easy and Intuitive Search",
            desc: "Our user-friendly search interface makes it simple to find exactly what you're looking for.",
          },
          {
            src: "/landing-search3.png",
            title: "Personalized Recommendations",
            desc: "Get tailored suggestions based on your preferences and search history.",
          },
        ].map((item) => (
          <div key={item.title} className="flex-1 text-center">
            <div className="relative w-full h-48 mb-4">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="mb-4 text-sm">{item.desc}</p>
            <Button className="bg-white border border-gray-400 rounded-sm py-3 px-6 text-black hover:bg-gray-200 hover:cursor-pointer">
              Explore
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
