"use client";
import React from 'react';
import { TypewriterEffectSmooth } from "@/components/ui/Hero-section/typescript-effect";
import Image from "next/image";
import HeroImage from "@/public/Image/Image-1.jpg";
import Link from "next/link";
import {Signup} from "@/components/ui/Auth/signup";
import {motion} from "framer-motion";

export function Hero() {
  const words = [
    { text: "Your" },
    { text: "Discipleship", className: "text-blue-500 dark:text-blue-500" },
    { text: "Companion" },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 via-gray-200  to-amber-300 p-4 space-y-12 md:space-y-0 md:space-x-8">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          Re
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-fuchsia-600">-Verse</span>
        </motion.h1>
        <TypewriterEffectSmooth words={words} />
        <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Link href="/login" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-40 h-12 rounded-xl bg-black text-white text-sm hover:bg-gray-800 transition duration-300"
            >
              Log In
            </motion.button>
          </Link>
          <Link href="/signup" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-40 h-12 rounded-xl bg-white text-black border border-black text-sm hover:bg-gray-200 transition duration-300"
            >
              Sign Up
            </motion.button>
          </Link>
        </div>
      </div>
      {/* Image Section */}
      <div className="flex justify-center items-center mt-6 pl-4 md:mt-0">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
          className="w-full max-w-[640px] h-auto object-contain shadow-lg rounded-lg"
        >
          <Image src={HeroImage} alt="hero" layout="responsive" />
        </motion.div>
      </div>
    </div>
  );
}
