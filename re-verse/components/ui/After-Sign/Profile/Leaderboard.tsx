"use client";

import React from "react";

const Leaderboard: React.FC<{ data: { name: string; score: number }[] }> = ({ data }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
      {data.map((item, index) => (
        <div key={index} className="flex justify-between items-center py-2">
          <span className="text-gray-900 dark:text-gray-200">{item.name}</span>
          <span className="text-gray-600 dark:text-gray-300">{item.score}</span>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
