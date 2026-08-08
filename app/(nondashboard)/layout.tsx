import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="w-full h-full flex flex-col pt-12">{children}</main>
    </div>
  );
};

export default layout;
