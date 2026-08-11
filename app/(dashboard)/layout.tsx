import Navbar from "@/components/Navbar";
import { createClient } from "@/lib/supabase/server";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("user: ", user);

  return (
    <div>
      <Navbar user={user} />
      <main className="w-full h-full flex flex-col pt-14">{children}</main>
    </div>
  );
};

export default layout;
