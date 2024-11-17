"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/After-Sign/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconBulb,
  IconDeviceGamepad,
  IconBook,
  IconMail,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Image from "next/image";
import Placeholder from "@/public/Image/Placeholder.png";
import { DailyVerse } from "./daily-verse";


export function Homepage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <DailyVerse />
      <div className="flex flex-col md:flex-row items-start justify-center gap-6 mt-8">
        <div className="w-full md:w-60 md:sticky md:top-20 bg-slate-800 rounded-lg shadow-lg p-4">
          <div className="flex flex-col items-center">
            <Image
              src={Placeholder} //Add the user's profile picture here!!
              alt="hero"
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h4 className="text-lg text-slate-200 font-semibold">Welcome <span className="text-amber-500">Billy<sup>✦</sup></span></h4>
            <p className="text-sm text-slate-300 text-center">We're glad that you are back!!</p>
            <div className="mt-4 w-full space-y-3">
              <button className="w-full border border-slate-900 shadow-lg rounded-md flex items-center justify-center gap-2 py-2 text-white bg-blue-600 hover:bg-blue-700 transition duration-300"><IconDeviceGamepad /> Play some fun games</button>
              <button className="w-full border border-slate-900 shadow-lg rounded-md flex items-center justify-center gap-2 py-2 text-white bg-green-600 hover:bg-green-700 transition duration-300"><IconBook /> Continue Learning</button>
              <button className="w-full border border-slate-900 shadow-lg rounded-md flex items-center justify-center gap-2 py-2 text-white bg-orange-600 hover:bg-orange-700 transition duration-300"><IconBulb /> Juggle my memory </button>
            </div>
            <h3 className="text-lg text-neutral-300 text-center mt-6 mb-3">Contact Us</h3>
            <div className="flex items-center justify-evenly gap-3">
              <IconMail className="text-white hover:text-gray-300" />
              <IconBrandInstagram className="text-white hover:text-gray-300" />
              <IconBrandX className="text-white hover:text-gray-300" />
              <IconBrandLinkedin className="text-white hover:text-gray-300" />
            </div>
          </div>
        </div>
        <BentoGrid className="w-full max-w-4xl">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

const Skeleton = ({ img }: { img: { src: string } }) => (
  <div 
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-cover bg-center"
    style={{ backgroundImage: `url(${img.src})` }}    
  />
);

const items = [
  {
    title: "The Bible Trivia",
    description: "Test your knowledge of the Bible in a fun and engaging way.",
    header: <Skeleton img={{src: "https://media.istockphoto.com/id/1307907411/photo/a-colorful-wooden-block-with-text-trivia-on-wooden-background.jpg?s=1024x1024&w=is&k=20&c=h-A-QpZhCGJlaA7jhMMuFbYp6hNAuFVwPkHgkqmg8tM="}} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My Communities",
    description: "Explore and connect with like-minded champions in your faith journey.",
    header: <Skeleton img={{src: "https://media.istockphoto.com/id/1785808259/photo/networking-opportunities.webp?a=1&b=1&s=612x612&w=0&k=20&c=qmszxK2rLqgwhOdlKtXaX9LpfzCRP_T05NtRakuURGs="}} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Discipleship",
    description: "Let's dive into the Scriptures and discover who God is and His Desires for our Lives.",
    header: <Skeleton img={{src: "https://plus.unsplash.com/premium_photo-1661719880750-4c0de579cd09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGlzY2lwbGVzaGlwfGVufDB8fDB8fHww"}} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My Daily Devotion",
    description:
      "Let's start the day with a prayer and a devotion to set the tone for the day.",
    header: <Skeleton img={{src: "https://media.istockphoto.com/id/1126359556/photo/heart-shaped-open-bible-book-pages.webp?a=1&b=1&s=612x612&w=0&k=20&c=8TCMOXdaPO2LKYnTnZ0uoAhSq-d5rBHoVrZq8bWqygQ="}} />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "holyGPT",
    description: "We're developing an AI-powered tool that will help you in your Bible Study and Faith Journey.",
    header: <Skeleton img={{src: "https://media.istockphoto.com/id/1494104649/photo/ai-chatbot-artificial-intelligence-digital-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=bSNvWwiLdPpa57uxQdncwcpu9Xt-NJSsmIBMxNxLQfw="}} />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My Profile",
    description: "Update your profile and keep track of your progress.",
    header: <Skeleton img={{src: "https://plus.unsplash.com/premium_photo-1674068279574-92b0a56e660e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TG92ZXxlbnwwfHwwfHx8MA%3D%3D"}} />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Articles",
    description: "Explore articles on faith, life, and the Bible.",
    header: <Skeleton img={{src: "https://media.istockphoto.com/id/1550575198/photo/jesus-saves-declares-christian-newspaper-headline.webp?a=1&b=1&s=612x612&w=0&k=20&c=kW6330LMLEG8WVUnCI1IBwF_pbqhQn5DCIdkLQVzf2g="}} />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
