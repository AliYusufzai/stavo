import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const CallToActionSection = () => {
  return (
    <div className="relative py-24">
      <Image
        src="/landing-call-to-action.jpg"
        alt="Call to Action"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black opacity-60"> </div>
      <div className="relative flex flex-col items-center gap-6 mx-auto max-w-4xl text-center px-4 xl:max-w-6xl">
        <h2 className="text-3xl font-bold text-white">
          Find Your Dream Rental Property
        </h2>
        <p className="text-lg text-gray-300">
          Join our community and start your journey today.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <Button className="bg-white hover:bg-gray-200 text-black font-bold py-5 px-3 rounded">
            Search
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-5 px-3 rounded">
            Sign Up Now
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
