"use client";

import React from "react";
import Image from "next/image";
import { FaPencilAlt } from "react-icons/fa";
import  ProgressBar  from "./progressBar"; // Assume you have a progress bar component
import  Leaderboard  from "./Leaderboard"; // Assume you have a leaderboard component

const dummyData = {
  profilePicture: "https://via.placeholder.com/150",
  name: "John Doe",
  about: "Passionate developer with a love for creating intuitive and user-friendly applications. Always eager to learn and grow.",
  email: "john.doe@example.com",
  badges: ["Badge 1", "Badge 2", "Badge 3"],
  streak: 5,
  progress: 80,
  leaderboard: [
    { name: "Alice", score: 100 },
    { name: "Bob", score: 90 },
    { name: "Charlie", score: 85 },
  ],
};

const Profile: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Profile Picture */}
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <Image src={dummyData.profilePicture} alt="Profile Picture" width={128} height={128} className="object-cover" />
        </div>
        {/* Name and About */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-200">{dummyData.name}</h2>
          <div className="flex items-center mt-2">
            <p className="text-gray-600 dark:text-gray-300">{dummyData.about}</p>
            <FaPencilAlt className="ml-2 text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Email */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Email</h4>
        <p className="text-gray-600 dark:text-gray-300">{dummyData.email}</p>
      </div>
      {/* Badges */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Badges</h4>
        <div className="flex space-x-4 mt-2">
          {dummyData.badges.map((badge, index) => (
            <div key={index} className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-4 py-2 rounded-full">
              {badge}
            </div>
          ))}
        </div>
      </div>
      {/* Streak */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Streak</h4>
        <p className="text-gray-600 dark:text-gray-300">{dummyData.streak} days</p>
      </div>
      {/* Progress Bar */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Progress</h4>
        <ProgressBar progress={dummyData.progress} />
      </div>
      {/* Leaderboard */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Leaderboard</h4>
        <Leaderboard data={dummyData.leaderboard} />
      </div>
    </div>
  );
};

export default Profile;
