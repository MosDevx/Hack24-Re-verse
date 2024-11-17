"use client";
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import communityPic from '@/public/Image/Bible4.jpg'; 

function JoinCommunity() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 p-8 text-gray-900 dark:text-gray-200 font-sans bg-gradient-to-r from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-700  shadow-lg">
      <div className="flex flex-col items-center text-center space-y-6 md:w-1/2">
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold text-amber-500">Join a Community<sup>✦</sup></h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">Join a community of believers that are passionate about the word of God. Share your thoughts and insights with others and grow in your faith.</p>
        </div>
        <div>
          <Link href="/Communities">
            <button className="w-48 text-center bg-amber-500 text-white rounded-md shadow-md py-2 px-4 border-2 border-amber-600 hover:bg-amber-600 transition duration-300">Communities &rarr;</button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image
          src={communityPic} 
          alt="Community"
          width={500}
          height={300}
          className="w-full h-auto object-cover rounded-lg shadow-lg" />
      </div>
    </div>
  );
}

export default JoinCommunity;
