'use client';

import { HoverEffect } from "@/components/ui/Content-overview/card-hover";
import {Space_Grotesk} from 'next/font/google';

const spaceGrotesk = Space_Grotesk({subsets: ['latin'], weight: '500'});

export function Content() {
  return (
    <section className="bg-gray-400 dark:bg-gray-800 py-20">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className={`text-4xl md:text-6xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 font-extrabold ${spaceGrotesk.className}`}>
          Come for the faith, stay for the community
        </h2>
        <HoverEffect items={projects} />
      </div>
    </section>
    
  );
}
export const projects = [
  {
    title: "Bible Trivia",
    description:
      "Who in the bible did not have a father?....Nun!! Enjoy our amazing bible trivia questions that'll immerse you into grasping the scriptures",
    link: "https://stripe.com",
  },
  {
    title: "Community",
    description:
      "No man is an Island. Explore and join a community of believers that will challenge and inspire you to grow in your faith",
    link: "https://netflix.com",
  },
  {
    title: "Discipleship",
    description:
      "Get exclusive lessons tailored to your specific age group that will impact you in your faith journey",
    link: "https://google.com",
  },
  {
    title: "Disciple others",
    description:
      "We're discipling disciple-makers that will be part of the great commission.No matter you age, or where you are, come tukuplug!!",
    link: "https://meta.com",
  },
  {
    title: "Leaderboard",
    description:
      "Wanna have some fun? Why don't you learn, play and earn points that'll put you above your peers. ",
    link: "https://amazon.com",
  },
  {
    title: "holyGPT",
    description:
      "We have embedded a chatbot that you can ask questions and gain tips helpful in your faith journey. DISCLAIMER: holyGPT can make mistakes. It isn't meant to replace human interactions. Make sure to confirm its answers form a reliable source",
    link: "https://microsoft.com",
  },
];
