"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/Bottom-Nav/floating-dock";
import {
  IconBulb,
  IconHome,
  IconLibrary,
  IconUser,
  IconDeviceGamepad
} from "@tabler/icons-react";

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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-lg">
      <FloatingDock
        mobileClassName="md:hidden flex justify-around py-2"
        desktopClassName="hidden md:flex justify-around py-2"
        items={links}
      />
    </div>
  );
}
