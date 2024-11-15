"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/Hero-section/aurora-background";
import Link from "next/link";

export function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          <span className="text-amber-500">reVerse<sup>✦</sup></span> is the new trend.
        </div>
        <div className="font-extralight text-base text-center md:text-4xl dark:text-neutral-200 py-4">
          Join believers from around the world in an interesting journey of faith and encountering Jesus while living in the digital age
        </div>
        <Link href={"/signup"}>
          <button className="bg-black dark:bg-white rounded-full w-40 text-white dark:text-black px-4 py-2">
            Join now
          </button>
        </Link>
      </motion.div>
    </AuroraBackground>
  );
}
