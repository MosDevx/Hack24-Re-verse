"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";
import Loice from "@/public/images/Loice.jpg";
import Billy from "@/public/images/Billy.png";
import { StaticImageData } from "next/image";

type Person = {
  id: number;
  name: string;
  designation: string;
  image: StaticImageData | string;
};

const people: Person[] = [
  {
    id: 1,
    name: "Loice",
    designation: "Strategist",
    image: Loice,
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Billy",
    designation: "Software Developer",
    image: Billy,
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t-2 text-white py-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center mb-4">
          <AnimatedTooltip items={people} />
        </div>
        <p className="text-center text-xl">For God's Glory</p>
      </div>
    </footer>
  );
}
