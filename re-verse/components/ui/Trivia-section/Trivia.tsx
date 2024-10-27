"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/Trivia-section/3d-card";
import Link from "next/link";
import triviaImage from "@/public/Image/Image-2.jpg";
import triviabgImage from "@/public/Image/bgImage.jpg";
import { backIn } from "framer-motion";

export function Trivia() {
  return (
    <section className="bg-gradient-to-r from-slate-400 to-slate-800">
      <CardContainer className="inter-var">
        <CardBody 
          className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-900 dark:border-gray-700 border-gray-200 w-full sm:w-[30rem] h-auto rounded-2xl p-6 border transition-all duration-300"
          
        >
          <CardItem
            translateZ="50"
            className="text-2xl font-extrabold text-neutral-700 dark:text-white"
          >
            Is the Bible really boring to read?
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-base mt-2 dark:text-neutral-300"
          >
            Maybe Bible Trivia could be the hack!
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={triviaImage}
              height={1000}
              width={1000}
              className="h-60 w-full object-cover rounded-xl group-hover:shadow-xl transition-shadow duration-300"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-8">
            <CardItem
              translateZ={20}
              as={Link}
              href="/trivia"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              a href="/signup"
              className="px-4 py-2 rounded-xl bg-blue-600 dark:bg-blue-500 text-white text-xs font-bold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </section>
    
  );
}
