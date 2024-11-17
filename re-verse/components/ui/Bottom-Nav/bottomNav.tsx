"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/Bottom-Nav/floating-dock";
import {
  IconBulb,
  IconHome,
  IconLibrary,
  IconUser,
  IconDeviceGamepad,
  IconMail
} from "@tabler/icons-react";
import Image from "next/image";
import Placeholder from "@/public/Image/Placeholder.png";

export default function BottomNav() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/after-sign",
    },
    {
      title: "Discipleship Lessons",
      icon: (
        <IconLibrary className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/discipleship",
    },
    {
      title: "Bible Trivia",
      icon: (
        <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/trivia",
    },
    {
      title: "Gaming",
      icon: (
        <IconDeviceGamepad className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/trivia",
    },
    {
      title: "Profile",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/profile",
    }
  ];

  return (
    <div className="fixed bottom-0 w-full bg-gray-50 dark:bg-neutral-900 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Profile Picture */}
        <div className="hidden md:block">
          <Image
            src= {Placeholder}
            alt="Profile Picture"
            width={42}
            height={42}
            className="rounded-full"
          />
        </div>
        {/* Navigation Links */}
        <div className="flex-1 flex justify-center">
          <FloatingDock
            items={links}
            desktopClassName="flex justify-center space-x-8"
            mobileClassName="translate-y-20"
          />
        </div>
        {/* Contact Us */}
        <div className="hidden md:flex items-center space-x-2">
          <IconMail className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
          <span className="text-neutral-500 dark:text-neutral-300">Contact Us</span>
        </div>
      </div>
    </div>
  );
}
