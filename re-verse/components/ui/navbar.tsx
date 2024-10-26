"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-1" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Articles">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Blogs</HoveredLink>
            <HoveredLink href="/interface-design">Lessons</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Bible">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Scipture Reading"
              href="#"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="The Word of God is the Sword of the Spirit. In the beginning was the word and the word was with God and the word was God"
            />
            <ProductItem
              title="Bible Trivia"
              href="#"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Have a blend of faith and fun by engaging in our Bible Trivia."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="More">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Contact">Contact</HoveredLink>
            <HoveredLink href="/Chatbot">Chatbot</HoveredLink>
            <HoveredLink href="/Community">Community</HoveredLink>
            <HoveredLink href="/Testimonials">Testimonials</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
export default Navbar;
