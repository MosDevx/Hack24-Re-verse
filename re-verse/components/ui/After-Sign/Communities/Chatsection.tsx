// ChatSection.tsx
import React, { useState } from "react";
import Pray2 from "@/public/Images/Pray2.png";
import Pray3 from "@/public/Images/Pray3.png";
import Image from "next/image";


interface Message {
  id: string;
  senderName: string;
  profileImage: string;
  time: string;
  content: string;
}

const dummyMessages: Message[] = [
  {
    id: "1",
    senderName: "John Doe",
    profileImage: "/image/Pray3.png",
    time: "10:30 AM",
    content: "Hey everyone! Excited for the Bible study tonight?",
  },
  {
    id: "2",
    senderName: "Jane Smith",
    profileImage: "/image/Pray4.png",
    time: "10:32 AM",
    content: "Absolutely! Looking forward to it.",
  },
  {
    id: "3",
    senderName: "Michael Brown",
    profileImage: "/image/Pray5.png",
    time: "10:35 AM",
    content: "Don't forget to bring your study guides!"
  },
  {
    id: "4",
    senderName: "Sarah Johnson",
    profileImage: "/image/Pray6.png",
    time: "10:40 AM",
    content: "Thanks for the reminder, Michael. I’ve got mine ready!"
  },
  {
    id: "5",
    senderName: "Emma Davis",
    profileImage: "/image/Pray7.png",
    time: "10:42 AM",
    content: "Can someone save me a seat? I might be a few minutes late."
  },
  {
    id: "6",
    senderName: "Robert Wilson",
    profileImage: "/image/Pray8.png",
    time: "10:45 AM",
    content: "Sure thing, Emma. I’ll make sure we have a spot for you."
  },
  {
    id: "7",
    senderName: "Olivia Martinez",
    profileImage: "/image/Pray9.png",
    time: "10:48 AM",
    content: "What chapter are we starting with tonight?"
  },
  {
    id: "8",
    senderName: "Daniel Moore",
    profileImage: "/image/Pray10.png",
    time: "10:50 AM",
    content: "Chapter 4, I believe. It’s about the parables."
  },
  {
    id: "9",
    senderName: "Sophia Garcia",
    profileImage: "/image/Pray11.png",
    time: "10:52 AM",
    content: "Great, I love studying the parables. They’re so thought-provoking!"
  },
  {
    id: "10",
    senderName: "William Lopez",
    profileImage: "/image/Pray12.png",
    time: "10:55 AM",
    content: "I’ll bring some snacks for after the session. Any requests?"
  },
  {
    id: "11",
    senderName: "Isabella Thomas",
    profileImage: "/image/Pray13.png",
    time: "10:58 AM",
    content: "Cookies would be amazing! Thanks, William."
  },
  {
    id: "12",
    senderName: "James Lee",
    profileImage: "/image/Pray14.png",
    time: "11:00 AM",
    content: "Sounds like it’s going to be a great session. See you all there!"
  }
  
];

const ChatSection = ({ onClose }: { onClose: () => void }) => {
  const [messages, setMessages] = useState<Message[]>(dummyMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const newMsg: Message = {
      id: `${messages.length + 1}`,
      senderName: "You",
      profileImage: "/image/placeholder.png", // Replace with the actual user image path
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: newMessage,
    };

    setMessages((prevMessages) => [...prevMessages, newMsg]);
    setNewMessage("");
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-6">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg w-full max-w-lg p-4 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-200">
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Community Chat</h2>
        <div className="overflow-y-auto h-64 p-2 mb-4 border-b border-gray-700">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start mb-3">
              <Image
                src={message.profileImage}
                width={20}
                height={20}
                alt={message.senderName}
                className="w-11 h-11 rounded-full mr-3"
              />
              <div>
                <div className="flex items-center">
                  <span className="font-semibold">{message.senderName}</span>
                  <span className="ml-2 text-sm text-gray-400">{message.time}</span>
                </div>
                <p>{message.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 bg-gray-700 p-2 rounded-l-lg text-white outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-r-lg text-white font-semibold"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
