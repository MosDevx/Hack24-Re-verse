import React from "react";
import { BackgroundLines } from "@/components/ui/landAfterSign/background-lines";


export function LandHere() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-4 relative z-20 font-bold tracking-tight mb-0">
            Faith
        </h2>
        <h4 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-md md:text-2xl lg:text-xl font-sans py-1 md:py-2 relative z-20 font-bold tracking-tight mt-0">
            John 3:16
        </h4>

      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God— not by works, so that no one can boast.
      </p>
    </BackgroundLines>
  );
}
