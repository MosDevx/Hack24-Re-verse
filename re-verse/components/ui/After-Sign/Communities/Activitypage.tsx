"use client";
import React from "react";
import { IconUsersGroup, IconMessageCircle, IconBook, IconCheck, IconArrowLeft } from "@tabler/icons-react";

interface Activity {
  name: string;
  participants: number;
  messages: number;
  description: string;
  progress: string;
  resources: string[];
}


// import React from "react";

// 



// interface ActivityDetailProps {

//   activity: Activity;

//   onBack: () => void;

// }



// const ActivityDetail: React.FC<ActivityDetailProps> = ({ activity, onBack }) => {

//   return (

//     <div>

//       <h2>{activity.name}</h2>

//       <p>{activity.description}</p>

//       {/* Add more details as needed */}

//       <button onClick={onBack}>Back</button>

//     </div>

//   );

// };



// export default ActivityDetail;

interface ActivityDetailProps {
    activity: Activity;
    onBack: () => void;
}

const ActivityDetail: React.FC<ActivityDetailProps> = ({ activity, onBack }) => {
  if (!activity) {
    return <div className="text-gray-400">No activity selected</div>;
  }

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <button onClick={onBack} className="flex items-center text-gray-400 mb-4">
         <IconArrowLeft size={24} /> <span className="ml-2">Back to Activities</span> 
      </button>
      <h2 className="text-3xl font-bold mb-4">{activity.name}</h2>
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <IconUsersGroup size={20} className="text-blue-500" />
          <p>Participants: {activity.participants}</p>
        </div>
        <div className="flex items-center gap-2">
          <IconMessageCircle size={20} className="text-yellow-500" />
          <p>Messages: {activity.messages}</p>
        </div>
      </div>
      <p className="mb-4">Description: {activity.description}</p>
      <div className="flex items-center gap-2 mb-4">
        <IconBook size={20} className="text-green-500" />
        <p>Progress: {activity.progress}</p>
      </div>
      <h3 className="text-xl font-semibold mt-4">Resources Needed:</h3>
      <ul className="list-disc list-inside">
        {activity.resources.map((resource, index) => (
          <li key={index} className="text-gray-300">{resource}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityDetail;
