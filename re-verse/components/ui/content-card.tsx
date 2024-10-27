"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function ContentCard({theme, verseOfTheDay,writeUp}) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-around p-4",
          "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center justify-center space-x-4 z-10">
 
          <div className="flex items-center justify-center flex-col">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {theme}
          </h1>
          <p className="font-normal text-md text-gray-50 relative z-10 my-4">
           {verseOfTheDay}
          </p>
          </div>
        </div>
        <div className="">
        <p className="font-bold text-md text-gray-50 relative z-10">
           {writeUp}
          </p>
    
        </div>
      </div>
    </div>
  );
}