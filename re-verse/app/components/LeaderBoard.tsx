import React from "react";

const Leaderboard = () => {
  // Sample player data
  const players = [
    { id: 1, name: "Player Name", score: 3050, position: "🥇" },
    { id: 2, name: "Player Name", score: 2955, position: "🥈" },
    { id: 3, name: "Player Name", score: 2649, position: "🥉" },
    { id: 4, name: "Player Name", score: 2403 },
    { id: 5, name: "Player Name", score: 2396 },
  ];

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
            {players.map((player, index) => (
              <tr
                key={player.id}
                className={`${index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}`}
              >
                <td className="p-2 lg:p-3">{player.position || index + 1}</td>
                <td className="p-2 lg:p-3">{player.name}</td>
                <td className="p-2 lg:p-3 text-right">{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;