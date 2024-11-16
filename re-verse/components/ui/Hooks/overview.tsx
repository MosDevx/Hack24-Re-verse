"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/Hooks/apple-cards-carousel";
import Image1 from "@/public/Image/Image-1.jpg";
import Image2 from "@/public/Image/Image-2.jpg";
import Image3 from "@/public/Image/Image-3.jpg";
import Image4 from "@/public/Image/Image-4.jpg";
import Image5 from "@/public/Image/Bible4.jpg";
import Link from "next/link";

export function Overview() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 dark:bg-slate-950">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        You'll never walk alone 
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



const data = [
  {
    category: "Bible Trivia",
    title: "Engage with the Bible in a fun new way",
    src: Image1,
    content: <Link href="/trivia"></Link>,
  },
  {
    category: "Discipleship",
    title: "Learn, earn points and grow in your faith journey",
    src: Image2,
    content: <Link href="/discipleship"></Link>,
  },
  {
    category: "Community",
    title: "Connect with champions reversing the trend with reVerse",
    src: Image3,
    content: <Link href="/Communities"></Link>,
  },
  {
    category: "holyGPT",
    title: "Chat with the our AI powered bible-bot",
    src: Image4,
    content: <Link href="#"></Link>,
  },
];
