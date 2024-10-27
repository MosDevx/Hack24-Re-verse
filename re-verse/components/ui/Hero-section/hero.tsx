"use client";
import { TypewriterEffectSmooth } from "@/components/ui/Hero-section/typescript-effect";
import Image from "next/image";
import HeroImage from "@/public/Image/Image-1.jpg";
import Link from "next/link";
import {Signup} from "@/components/ui/Auth/signup";

export function Hero() {
  const words = [
    { text: "Your" },
    { text: "Discipleship", className: "text-blue-500 dark:text-blue-500" },
    { text: "Companion" },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-fuchsia-100 p-8 space-y-12 md:space-y-0 md:space-x-8"
      style={{ background: "linear-gradient(90deg, #818CF8 0%, #FAD7A1 100%)" }}
    >
      {/* Text Section */}
      <div className="text-center md:text-left inline-block md:w-1/2">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Re
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-fuchsia-600">-Verse</span>
        </h1>
        <TypewriterEffectSmooth words={words} />
        <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Link href="/login" passHref>
           <button onClick={Signup} className="w-40 h-12 rounded-xl bg-black text-white text-sm hover:bg-gray-800 transition duration-300">
            Sign Up
          </button>
        </Link>
        <Link href="/login" passHref>
          <button className="w-40 h-12 rounded-xl bg-white text-black border border-black text-sm hover:bg-gray-200 transition duration-300">
            Login
          </button>
        </Link>
          
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center md:w-1/2">
        <Image src={HeroImage} alt="hero" className="w-full max-w-[360px] h-auto object-contain shadow-lg rounded-lg" />
      </div>
    </div>
  );
}
