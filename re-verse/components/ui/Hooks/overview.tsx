"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/Hooks/apple-cards-carousel";
import Image1 from "@/public/images/Image-1.jpg";
import Image2 from "@/public/images/Image-2.jpg";
import Image3 from "@/public/images/Image-3.jpg";
import Image4 from "@/public/images/Image-4.jpg";
import Image5 from "@/public/images/Bible4.jpg";
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
    src: "https://media.istockphoto.com/id/1307907411/photo/a-colorful-wooden-block-with-text-trivia-on-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=9qG53ZUyemkbZ867QjKt9P5wefh1Fzry8ga658oCV-Y=",
    content: <Link href="/trivia"></Link>,
  },
  {
    category: "Discipleship",
    title: "Learn, earn points and grow in your faith journey",
    src: "https://images.unsplash.com/photo-1629141650344-db693cfd6d48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fERpc2NpcGxlc2hpcHxlbnwwfHwwfHx8MA%3D%3D",
    content: <Link href="/discipleship"></Link>,
  },
  {
    category: "Community",
    title: "Connect with champions reversing the trend with reVerse",
    src: "https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q29tbXVuaXR5fGVufDB8fDB8fHww",
    content: <Link href="/Communities"></Link>,
  },
  {
    category: "holyGPT",
    title: "Chat with the our AI powered bible-bot",
    src: "https://media.istockphoto.com/id/1494104649/photo/ai-chatbot-artificial-intelligence-digital-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=bSNvWwiLdPpa57uxQdncwcpu9Xt-NJSsmIBMxNxLQfw=",
    content: <Link href="/holyGPT"></Link>,
  },
];
