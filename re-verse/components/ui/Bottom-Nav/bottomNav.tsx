import React from "react";
import { FloatingDock } from "@/components/ui/Bottom-Nav/floating-dock";
import {
  IconBulb,
  IconHome,
  IconLibrary,
  IconUser,
} from "@tabler/icons-react";
import Image from "next/image";

export default function bottomNav() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/landing-page",
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
      title: "Profile",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/profile",
    }
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
