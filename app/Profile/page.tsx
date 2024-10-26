import React from 'react';
import ProfilePicture from '../components/ProfilePic';
import StreakTracker from '../components/StreakTracker';
import LevelIndicator from '../components/LevelIndicator';
import Leaderboard from '../components/LeaderBoard';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 lg:px-20 bg-gray-50">
      <div className="w-full max-w-lg lg:max-w-2xl bg-white rounded-lg shadow-lg p-6">
        {/* Profile Picture */}
        <ProfilePicture />
        
        {/* Streak Section */}
        <StreakTracker />
        
        {/* Level Section */}
        <LevelIndicator />
        
        {/* Leaderboard Section */}
        <Leaderboard />
      </div>
    </div>
  );
}
