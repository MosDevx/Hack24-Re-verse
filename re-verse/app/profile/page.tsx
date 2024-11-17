"use client";

import React, { use, useEffect, useState } from "react";
import ProfilePicture from "../components/ProfilePic";
import StreakTracker from "../components/StreakTracker";
import LevelIndicator from "../components/LevelIndicator";
import Leaderboard from "../components/LeaderBoard";
// import { getUserData } from "@/lib/reverse";


export default function Home() {

const [userDetails, setUserDetails] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      // const userData = await getUserData(1);
      // console.log(userData);
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 lg:px-20 bg-gray-50">
      <div className="w-full max-w-lg lg:max-w-2xl bg-white rounded-lg shadow-lg p-6">
        {/* Profile Picture */}
        

        
        {userDetails && <ProfilePicture name={userDetails.first_name} />}

        

        {/* Streak Section */}
        <StreakTracker />

        {/* Level Section */}
        <LevelIndicator progress={userDetails?.progress ?? 0} />

        {/* Leaderboard Section */}
        <Leaderboard />
      </div>
    </div>
  );
}
