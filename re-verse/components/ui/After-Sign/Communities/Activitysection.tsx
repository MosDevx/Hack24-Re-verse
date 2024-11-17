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
    {
      id: "3",
      name: "Youth Fellowship",
      participants: 20,
      description: "A gathering for young people to discuss faith and life topics.",
      messages: 15,
      progress: "Session 2 of 8",
      resources: ["Discussion Topics", "Devotional Book"],
    },
    {
      id: "4",
      name: "Women’s Ministry",
      participants: 30,
      description: "A group for women to connect and grow spiritually.",
      messages: 12,
      progress: "Monthly",
      resources: ["Bible", "Workshop Materials"],
    },
    {
      id: "5",
      name: "Men’s Fellowship",
      participants: 18,
      description: "A space for men to share and support each other in their faith journey.",
      messages: 8,
      progress: "Bi-weekly",
      resources: ["Study Guide", "Activity Planner"],
    },
    {
      id: "6",
      name: "Sunday School",
      participants: 40,
      description: "Weekly classes to teach children about the Bible.",
      messages: 20,
      progress: "Lesson 5 of 15",
      resources: ["Children’s Bible", "Activity Worksheets"],
    },
    {
      id: "7",
      name: "Marriage Enrichment",
      participants: 10,
      description: "Workshops to strengthen marital relationships based on biblical principles.",
      messages: 6,
      progress: "Week 3 of 6",
      resources: ["Marriage Workbook", "Couples Devotional"],
    },
    {
      id: "8",
      name: "Choir Practice",
      participants: 22,
      description: "Regular practice sessions for the church choir.",
      messages: 25,
      progress: "Preparing for Christmas Service",
      resources: ["Hymn Books", "Music Sheets"],
    },
    {
      id: "9",
      name: "Community Outreach",
      participants: 35,
      description: "Organizing efforts to support and serve the local community.",
      messages: 18,
      progress: "Event Planning Phase",
      resources: ["Volunteer List", "Event Flyers"],
    },
    {
      id: "10",
      name: "Bible Journaling Group",
      participants: 12,
      description: "A creative group for studying and journaling about Scripture.",
      messages: 10,
      progress: "Page 25 of Workbook",
      resources: ["Journals", "Color Pens"],
    },
    {
      id: "11",
      name: "Parenting Support",
      participants: 15,
      description: "A group for parents to share insights and learn biblical parenting principles.",
      messages: 7,
      progress: "Chapter 2 of 5",
      resources: ["Parenting Guide", "Bible Verses"],
    },
    {
      id: "12",
      name: "Intercessory Prayer",
      participants: 8,
      description: "A dedicated group for praying over specific needs and requests.",
      messages: 5,
      progress: "Daily",
      resources: ["Prayer List", "Devotional Materials"],
    },
    {
      id: "13",
      name: "Mission Planning",
      participants: 14,
      description: "Meetings to strategize and prepare for upcoming mission trips.",
      messages: 13,
      progress: "Fundraising Stage",
      resources: ["Mission Handbook", "Itinerary Templates"],
    },
    {
      id: "14",
      name: "Faith and Fitness",
      participants: 16,
      description: "A group combining spiritual growth with physical exercise.",
      messages: 9,
      progress: "Session 3 of 10",
      resources: ["Exercise Plan", "Scripture Reading"],
    }
    
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
