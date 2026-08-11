"use client";

import React from "react";
import { User } from "@supabase/supabase-js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { signOut } from "@/app/auth/actions";
import { FiUser, FiCreditCard, FiLogOut, FiSettings } from "react-icons/fi";

const UserMenu = ({ user }: { user: User }) => {
  const email = user.email ?? "";
  const initials = email.charAt(0).toUpperCase();
  const avatarUrl = user.user_metadata?.avatar_url as string | undefined;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Avatar>
            <AvatarImage src={avatarUrl} alt="user" className="grayscale" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        }
      />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <FiUser /> Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FiSettings /> Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut} variant="destructive">
          <FiLogOut /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
