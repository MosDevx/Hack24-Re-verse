"use client";

import { getUsers } from "@/lib/reverse";
import React, { useEffect, useState } from "react";

interface User {
  dob: Date;
  email: string;
  first_name: string;
  gender: string | null;
  id: number;
  last_name: string;
  profile_pik: string | null;
  progress: number | null;
  streakId: string | null;
  trivia_score: number | null;
}

const Leaderboard = () => {
  const [players, setPlayers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const results: User[] = (await getUsers()) as User[];
      setPlayers(results);
    };

    fetchUsers();
  }, []);

  // Function to calculate player positions based on trivia score
  const getSortedPlayers = (players: User[]) => {
    // Sort players by trivia score in descending order
    const sortedPlayers = players.sort((a, b) => {
      return (b.trivia_score || 0) - (a.trivia_score || 0);
    });

    // Assign positions, considering ties
    return sortedPlayers.map((player, index) => ({
      ...player,
      position: index + 1,
      medal: index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "",
    }));
  };

  // Get players with assigned positions and medals
  const rankedPlayers = getSortedPlayers(players);

  return (
    <div className="flex flex-col items-center space-y-4 mt-2 w-full">
      <h1 className="text-2xl lg:text-3xl font-bold bg-blue-700 text-white px-6 py-2 rounded-lg">
        LEADERBOARD
      </h1>
      <div className="w-full bg-gray-900 rounded-lg shadow-lg p-4 lg:p-6">
        <table className="w-full text-white">
          <thead>
            <tr>
              <th className="text-left p-2 lg:p-3">#</th>
              <th className="text-left p-2 lg:p-3">Player Name</th>
              <th className="text-right p-2 lg:p-3">Score</th>
            </tr>
          </thead>
          <tbody>
            {rankedPlayers.map((player, index) => (
              <tr
                key={player.id}
                className={`${index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}`}
              >
                <td className="p-2 lg:p-3">
                  {player.medal || player.position}
                </td>
                <td className="p-2 lg:p-3">{player.first_name}</td>
                <td className="p-2 lg:p-3 text-right">{player.trivia_score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
