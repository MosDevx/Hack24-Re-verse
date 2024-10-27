"use client";
import { UserProfileCard } from "@/components/ui/user-profile-card";
import { motion } from "framer-motion";

const userProfiles = [
  { profilePicUrl: "https://example.com/user1.jpg", name: "User 1", points: 150 },
  { profilePicUrl: "https://example.com/user2.jpg", name: "User 2", points: 200 },
  { profilePicUrl: "https://example.com/user3.jpg", name: "User 3", points: 250 },
  { profilePicUrl: "https://example.com/user4.jpg", name: "User 4", points: 300 },
  { profilePicUrl: "https://example.com/user5.jpg", name: "User 5", points: 350 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center py-12">
      <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
        LeaderBoard
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {userProfiles.map((user, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <UserProfileCard
              name={user.name}
              points={user.points}
              profilePicUrl={user.profilePicUrl}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
