import React from "react";

const StreakTracker = () => {
  const daysStreaks = [
    { Day: "Sun", symbol: "✔" },
    { Day: "Mon", symbol: "✔" },
    { Day: "Tue", symbol: "✔" },
    { Day: "Wed", symbol: "" },
    { Day: "Thu", symbol: "" },
    { Day: "Fri", symbol: "" },
    { Day: "Sat", symbol: "" },
  ];

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-lg lg:text-xl font-bold">Streak</h2>
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            {daysStreaks.map((daysStreak, index) => (
              <th
                key={index}
                className="px-2 py-1 lg:px-4 lg:py-2 border border-gray-300 bg-gray-100 text-center"
              >
                {daysStreak.Day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {daysStreaks.map((daysStreak, index) => (
              <td
                key={index}
                className="px-2 py-1 lg:px-4 lg:py-2 border border-gray-300 text-center"
              >
                {daysStreak.symbol ? (
                  <span className="text-green-500">{daysStreak.symbol}</span>
                ) : (
                  <span>&nbsp;</span> // Empty space for days without symbol
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StreakTracker;