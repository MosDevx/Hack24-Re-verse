"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";
import Loice from "@/public/images/Loice.jpg";
import Billy from "@/public/images/Billy.png";
import Jeff from "@/public/images/Jeff.jpg";
import Michael from "@/public/images/Michael.jpg";
import Moses from "@/public/images/Moses.jpg";
import Peninah from "@/public/images/Peninnah.jpg";
import Daniel from "@/public/images/Daniel.jpg";
import Georgez from "@/public/images/Georgez.jpg";
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
    name: "Peninah",
    designation: "Strategist",
    image: Peninah,
  },
  {
    id: 3,
    name: "George",
    designation: "Statistician",
    image: Georgez,
  },
  {
    id: 4,
    name: "Michael",
    designation: "Business Analyst",
    image:Michael,
  },
  {
    id: 5,
    name: "Jeff",
    designation: "Software Developer",
    image: Jeff,
  },
  {
    id: 6,
    name: "Daniel",
    designation: "Software Developer",
    image: Daniel,
  },
  {
    id: 7,
    name: "Billy",
    designation: "Software Developer",
    image: Billy,
  },
  {
    id: 8,
    name: "Moses",
    designation: "Project Lead",
    image: Moses,
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
