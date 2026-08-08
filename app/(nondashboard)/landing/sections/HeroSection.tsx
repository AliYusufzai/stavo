"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative h-screen ">
      <Image
        src="/hero.jpg"
        alt="hero image"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-65"> </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/3 -translate-y-1/2 text-center w-full"
      >
        <div className="max-w-4xl mx-auto px-16 sm:px-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Start your journey to find the perfect place to call home
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover your dream apartment with our advanced search and find the
            perfect place to call home.
          </p>
          <div className="flex justify-center">
            <Input
              type="text"
              placeholder="Search for apartments..."
              className="w-full max-w-lg rounded-none rounded-l-xl border-none bg-white h-12"
            />
            <Button
              onClick={() => {}}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-none rounded-r-xl h-12 border-none"
            >
              Search
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
