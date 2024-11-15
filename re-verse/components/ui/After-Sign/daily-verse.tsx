"use client";
import React from "react";
import Image from "next/image";
import Bible4 from "@/public/Image/Bible4.jpg";

export function DailyVerse() {
  return (
    <div 
        className="relative flex items-center justify-center h-[25rem] bg-cover bg-center text-white" 
        style={{ backgroundImage: `url(${Bible4.src})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-4 p-6 max-w-lg mx-auto">
        <h4 className="text-3xl font-bold">John 3:16 </h4>
        <p className="text-base md:text-lg">For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.</p>
      </div>
    </div>
  );
}

export default DailyVerse;
