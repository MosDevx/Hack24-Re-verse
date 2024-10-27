"use client";

import React, { useEffect, useState, useRef } from "react";

interface ChatMessage {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
}

interface ChatProps {
  chamaId: number;
}

interface User {
  id: number;
  address: string;
  name: string | null;
}

const Chat: React.FC<ChatProps> = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [userDetails, setUserDetails] = useState<User | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Simulate fetching user details and messages
    setTimeout(() => {
      setUserDetails({ id: 1, address: "user_address", name: "You" });
      setMessages([
        { id: 1, text: "Welcome to the chat!", sender: "Admin", timestamp: new Date().toISOString() },
        { id: 2, text: "Hello everyone!", sender: "User2", timestamp: new Date().toISOString() },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === "") return;

    const newMessage: ChatMessage = {
      id: messages.length + 1,
      text: message,
      sender: userDetails?.name || "Unknown",
      timestamp: new Date().toISOString(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage("");
    scrollToBottom();
  };

  return (
    <div className="flex flex-col w-full max-w-2xl space-y-4">
      {/* Chat Area */}
      <div className="flex flex-col w-full flex-grow bg-white rounded-lg shadow-lg p-4 overflow-y-scroll space-y-2">
        {loading ? (
          <p className="text-center text-gray-500">Loading messages...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : messages.length === 0 ? (
          <p className="text-center text-gray-500">No messages yet. Start chatting!</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.sender === userDetails?.name ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`p-2 rounded-lg max-w-xs ${
                  msg.sender === userDetails?.name
                    ? "bg-blue-200 text-blue-900"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <p>{msg.text}</p>
                <small className="text-xs text-gray-500">
                  {new Date(msg.timestamp).toLocaleTimeString("en-GB", {
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </small>
              </div>
              <small className="text-xs text-gray-500">
                {msg.sender === userDetails?.name ? "You" : msg.sender}
              </small>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <form
        onSubmit={sendMessage}
        className="flex items-center space-x-3 px-4 py-3 bg-white shadow-md rounded-lg"
      >
        <textarea
          rows={2}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg flex-shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Chat;
