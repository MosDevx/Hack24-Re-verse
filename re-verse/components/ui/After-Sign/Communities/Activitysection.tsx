"use client";
import React from "react";
import { IconUsersGroup, IconCheck, IconMessageCircle, IconArrowLeft } from "@tabler/icons-react";

interface Community {
  name: string;
}

interface Activity {
  id: string;
  name: string;
  participants: number;
  description: string;
  messages: number;
  progress: string;
  resources: string[];
}

interface ActivitySectionProps {
  community: Community;
  onSelectActivity: (activity: Activity) => void;
  onBack: () => void;
}

const ActivitySection: React.FC<ActivitySectionProps> = ({ community, onSelectActivity, onBack }) => {
  const activities = [
    {
      id: "1",
      name: "Bible Study",
      participants: 17,
      description: "A group activity focused on studying the Bible.",
      messages: 10,
      progress: "Chapter 4 of 10",
      resources: ["Bible", "Study Guide"],
    },
    {
      id: "2",
      name: "Prayer Meeting",
      participants: 25,
      description: "Weekly prayer meetings for community members.",
      messages: 5,
      progress: "Weekly",
      resources: ["Prayer Book", "Notebook"],
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <button onClick={onBack} className="flex items-center text-gray-700 dark:text-white mb-4">
        <IconArrowLeft size={24} />
        <span className="ml-2">Back to Communities</span>
      </button>
      <h3 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">{community.name} Activities</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-gray-700 text-white p-4 rounded-lg shadow cursor-pointer hover:bg-gray-600 transition duration-200"
            onClick={() => onSelectActivity(activity)}
          >
            <h4 className="text-xl font-semibold mb-2">{activity.name}</h4>
            <div className="flex items-center gap-2 mb-2">
              <IconUsersGroup size={18} className="text-blue-500" />
              <p>Participants: {activity.participants}</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <IconMessageCircle size={18} className="text-yellow-500" />
              <p>Messages: {activity.messages}</p>
            </div>
            <p className="mb-4">{activity.description}</p>
            <div className="flex items-center gap-2">
              <IconCheck size={18} className={activity.progress.includes("completed") ? "text-green-500" : "text-gray-500"} />
              <p>Progress: {activity.progress}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitySection;
