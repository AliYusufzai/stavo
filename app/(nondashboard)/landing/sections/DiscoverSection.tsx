import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const DiscoverSection = () => {
  return (
    <div className="max-w-4xl xl:max-w-6xl mx-auto py-10 text-center">
      <h1 className="text-4xl font-bold mb-4 ">Discover</h1>
      <h3 className="text-xl font-semibold mb-4">
        Find Your Dream Rental Property Today!
      </h3>
      <p className="text-gray-600 text-md max-w-3/4 mx-auto mb-8">
        Searching for your dream property has never been easier with our
        user-friendly search feature, you can quickly find the perfect home that
        meets all your needs. Start your search today and discover your dream
        rental property!
      </p>

      <div className="flex flex-col gap-4 md:flex-row">
        {[
          {
            src: "/landing-icon-calendar.png",
            title: "Search for Properties",
            desc: "Find homes that have been thoroughly vetted and verified for your peace of mind.",
          },
          {
            src: "/landing-icon-heart.png",
            title: "Book Your Rental",
            desc: "Our user-friendly search interface makes it simple to find exactly what you're looking for.",
          },
          {
            src: "/landing-icon-wand.png",
            title: "Enjoy Your New Home",
            desc: "Get tailored suggestions based on your preferences and search history.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="flex-1 text-center bg-gray-100 py-7 px-8 shadow-lg"
          >
            <div className="relative w-10 h-10 mb-4 bg-black rounded-full mx-auto flex items-center justify-center">
              <Image
                src={item.src}
                alt={item.title}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="mb-4 text-sm text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverSection;
