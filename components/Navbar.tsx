import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { User } from "@supabase/supabase-js";
import UserMenu from "./UserMenu";

const Navbar = ({ user }: { user: User | null }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-xl h-11">
      <div className="flex justify-between items-center bg-blue-ribbon-950 text-white py-3 px-8">
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/"
            scroll={false}
            className="cursor-pointer hover:text-blue-ribbon-200"
          >
            <div className="text-xl font-bold">
              Stay
              <span className="text-blue-ribbon-400 text-light hover:text-blue-ribbon-200">
                vo
              </span>
            </div>
          </Link>
        </div>

        <p className="text-gray-400 hidden md:block">
          Discover your perfect rental apartment with out advanced search
        </p>
        <div className="flex items-center gap-4">
          {user ? (
            <UserMenu user={user} />
          ) : (
            <>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="text-white  bg-transparent rounded-lg hover:bg-white hover:text-blue-ribbon-950"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  variant="secondary"
                  className="text-white bg-blue-ribbon-800 rounded-lg hover:bg-white hover:text-blue-ribbon-950"
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
