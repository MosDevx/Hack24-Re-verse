"use client";
import React, { useState } from "react";
import CommunitySection from "@/components/ui/After-Sign/Communities/Communitysection";
import ActivitySection from "@/components/ui/After-Sign/Communities/Activitysection";
import ActivityDetail from "@/components/ui/After-Sign/Communities/Activitypage";
import ChatSection from "@/components/ui/After-Sign/Communities/Chatsection";
import { Community, Activity } from "./types"; // Import types
import { dummyCommunities } from "./dummyData";

const CommunityPage = () => {
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [showChat, setShowChat] = useState(false);

  const handleCommunitySelect = (id: string) => {
    const community = dummyCommunities.find((community) => community.id === id) || null;
    setSelectedCommunity(community);
    setSelectedActivity(null); // Reset activity selection when switching communities
  };

  const handleActivitySelect = (activity: Activity) => {
    setSelectedActivity(activity);
  };

  const handleBackToActivities = () => {
    setSelectedActivity(null); // Navigate back to activities section
  };

  const handleBackToCommunities = () => {
    setSelectedCommunity(null); // Navigate back to communities section
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="container mx-auto p-8 bg-slate-950">
      {!selectedCommunity ? (
        <CommunitySection onSelectCommunity={handleCommunitySelect} communities={dummyCommunities} />
      ) : !selectedActivity ? (
        <ActivitySection
          community={selectedCommunity}
          onSelectActivity={handleActivitySelect}
          onBack={handleBackToCommunities}
        />
      ) : (
        <ActivityDetail activity={selectedActivity} onBack={handleBackToActivities} />
      )}

      <button
        onClick={toggleChat}
        className="fixed bottom-10 right-10 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg"
      >
        💬
      </button>

      {showChat && <ChatSection onClose={toggleChat} />}
    </div>
  );
};

export default CommunityPage;
