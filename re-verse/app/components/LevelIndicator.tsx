"use state"
import React, { useEffect, useState } from "react";
import ProceedButton from "./ProceedButton";

const LevelIndicator = ({ progress }: { progress: number }) => {

  const [total, setTotal] = useState(30);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage((progress / total) * 100);
  }, [progress]);


  
  return (
    <div className="flex flex-col items-center mb-4">
      <div className="flex flex-col justify-center items-center mb-2 mt-2">
        <div className="text-gray-600 mb-1 text-center">Progress</div>
        <div
          className="relative w-[100px] lg:w-[150px] h-[100px] lg:h-[150px] rounded-full bg-white flex justify-center items-center"
          style={{
            background: `conic-gradient(#66d9d0 ${percentage}%, #d1f6f1 ${percentage}% 100%)`,
          }}
        >
          {/* Inner circle */}
          <div className="absolute w-[70px] lg:w-[110px] h-[70px] lg:h-[110px] bg-white rounded-full flex justify-center items-center">
            <div className="text-center">
              <h1 className="text-lg lg:text-xl font-bold">STAGE</h1>
              <p className="text-lg lg:text-2xl font-semibold mt-2">
                {progress < 10 ? 1 : progress < 20 ? 2 : 3}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ProceedButton />
    </div>
  );
};

export default LevelIndicator;