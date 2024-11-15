"use client";
import React from "react";
import { IconUsersGroup, IconCalendar } from "@tabler/icons-react";

interface Community {
  id: string;
  name: string;
  members: number;
  createdAt: string;
  profileImage: string;
}

interface CommunitySectionProps {
  communities: Community[];
  onSelectCommunity: (community: Community) => void;
}

const CommunityCard = ({ community, onSelect }: { community: Community, onSelect: (id: string) => void }) => (
  <div
    className="flex items-center gap-4 p-4 rounded-lg shadow bg-gray-800 text-white w-full md:w-auto cursor-pointer hover:bg-gray-700 transition duration-200"
    onClick={() => onSelect(community.id)}
  >
    <div className="w-12 h-12 relative">
      <img
        src={community.profileImage}
        alt="Community profile"
        className="rounded-full object-cover w-full h-full"
      />
    </div>
    <div className="flex flex-col flex-1">
      <h3 className="text-lg font-bold">{community.name}</h3>
      <div className="flex gap-2 mt-1">
        <div className="flex items-center gap-1">
          <IconUsersGroup size={18} className="text-blue-500" />
          <span className="text-sm">{community.members} Members</span>
        </div>
        <div className="flex items-center gap-1">
          <IconCalendar size={18} className="text-yellow-500" />
          <span className="text-sm">Created: {community.createdAt}</span>
        </div>
      </div>
    </div>
  </div>
);

const CommunitySection = ({ communities, onSelectCommunity }: { communities: Community[], onSelectCommunity: (id: string) => void }) => (
  <div className="container mx-auto py-8 px-4">
    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
      My Communities
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {communities.map((community) => (
        <CommunityCard key={community.id} community={community} onSelect={onSelectCommunity} />
      ))}
    </div>
  </div>
);

export default CommunitySection;
