"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Tabs } from "./tabs";
import { HoverEffect } from "./card-effect";
import { TextGenerateEffect } from "./text-generate effect";
import DiscipleshipImage from "@/public/Image/dimage.png";
import { Lessons } from "./lessons"; // Import the Lessons component

const words = `Discipleship is the process of learning from Jesus and becoming more like Him. Welcome Champion, You're in the right place`;

export const Beginner = [
  {
    title: "All Have Sinned",
    description: "Jesus Paid it All, all to Him I owe, Sin had left a crimson stain, He washes white as snow.",
    link: "",
  },
  {
    title: "Jesus Paid it All",
    description: "Jesus Paid it All, all to Him I owe, Sin had left a crimson stain, He washes white as snow.",
    link: "",
  },
  {
    title: "You are Redeemed",
    description: "Jesus Paid it All, all to Him I owe, Sin had left a crimson stain, He washes white as snow.",
    link: "",
  },
];

export const Intermediate = [
  {
    title: "God's Wisdom vs Your Wisdom",
    description: "Jesus Paid it All, all to Him I owe, Sin had left a crimson stain, He washes white as snow.",
    link: "#",
  },
  {
    title: "How to Deal with Temptation",
    description: "Jesus Paid it All, all to Him I owe, Sin had left a crimson stain, He washes white as snow.",
    link: "#",
  },
  {
    title: "The Power of the Holy Spirit",
    description: "Jesus Paid it All, all to Him I owe, Sin had left a crimson stain, He washes white as snow.",
    link: "#",
  },
];

export const Advanced = [
  {
    title: "God in 3",
    description: "Jesus Paid it All, all to Him I owe, Sin had left a crimson stain, He washes white as snow.",
    link: "",
  },
  {
    title: "The book of Revelation",
    description: "Jesus Paid it All, all to Him I owe, Sin had left a crimson stain, He washes white as snow.",
    link: "",
  },
  {
    title: "Bible Prophecy",
    description: "Jesus Paid it All, all to Him I owe, Sin had left a crimson stain, He washes white as snow.",
    link: "",
  },
];

export function Discipleshipsection() {
  const [showLessons, setShowLessons] = useState(false);

  const tabs = [
    {
      title: "Beginner",
      value: "beginner",
      content: (
        <div className="w-full overflow-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900" onClick={() => setShowLessons(true)}>
          <p>Beginner Level</p>
          <HoverEffect items={Beginner} onClick={() => setShowLessons(true)} />
        </div>
      ),
    },
    {
      title: "Intermediate",
      value: "intermediate",
      content: (
        <div className="w-full overflow-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-teal-900" onClick={() => setShowLessons(true)}>
          <p>Intermediate Level</p>
          <HoverEffect items={Intermediate} onClick={() => setShowLessons(true)} />
        </div>
      ),
    },
    {
      title: "Advanced",
      value: "advanced",
      content: (
        <div className="w-full overflow-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-indigo-900" onClick={() => setShowLessons(true)}>
          <p>Advanced Level</p>
          <HoverEffect items={Advanced} onClick={() => setShowLessons(true)} />
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto flex flex-col p-6 border text-white rounded-lg shadow-lg">
      <div className="space-y-4 text-center">
        <h3 className="text-3xl font-semibold">Discipleship Lessons</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-between mt-6">
        <div className="relative w-full md:w-[24rem] h-70">
          <Image src={DiscipleshipImage} alt="DiscipleshipImage" className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-right text-transparent bg-clip-text bg-gradient-to-tr from-blue-700 via-pink-500 to-purple-600">
            Discipleship in a sec !!
          </h3>
          <TextGenerateEffect words={words} className="text-lg leading-relaxed break-words" />
          <p className="text-2xl mt-2 font-semibold text-start text-amber-500">Learn & Grow 💪</p>
        </div>
      </div>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40 overflow-auto">
        {showLessons ? <Lessons /> : <Tabs tabs={tabs} />}
      </div>
    </div>
  );
}
