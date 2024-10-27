"use client";
import React from 'react';
import Image from 'next/image';

const ProfilePicture = () => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex flex-col items-center">
        <Image
          src={"/static/images/prof.jpg"}
          width={96}
          height={96}
          alt={"profile"}
          className="rounded-full"
        />
        <h1 className="text-gray-500 mt-2 lg:mt-4 text-sm lg:text-base">Kamau Maina</h1>
      </div>
    </div>
  );
};

export default ProfilePicture;