"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Questions from "@/components/ui/Questions";

interface Question {
  answer: string | boolean;
  id?: number;
  options?: (string | boolean)[];
  question: string;
  type: string;
}

const Page = () => {
  const [started, setStarted] = useState(false);
  const [searching, setSearching] = useState(false); // Searching state
  const [connected, setConnected] = useState(false); // Connection status
  const [points, setPoints] = useState(200); // initial points for the user
  const [opponentPoints, setOpponentPoints] = useState(10); // initial points for opponent
  const [socket, setSocket] = useState<any>(null);
  const [queries, setQueries] = useState<Question[] | null>(null);

  // Define the questions
  const questions = [
    {
      type: "fill-in-blank",
      question: "What's the capital of France?",
      answer: "Paris",
    },
    {
      type: "fill-in-blank",
      question: "What's the largest planet in our solar system?",
      answer: "Jupiter",
    },
    {
      type: "fill-in-blank",
      question: "What's the chemical symbol for water?",
      answer: "H2O",
    },
    {
      type: "multiple-choice",
      question: "What is the capital of Italy?",
      options: ["Rome", "Paris", "Berlin", "Madrid"],
      answer: "Rome",
    },
    {
      type: "multiple-choice",
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      type: "multiple-choice",
      question: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Rhino"],
      answer: "Blue Whale",
    },
    {
      type: "true-false",
      question: "The Earth is flat.",
      answer: false,
      options: [true, false],
    },
    {
      type: "true-false",
      question: "The sun rises in the east.",
      answer: true,
      options: [true, false],
    },
    {
      type: "true-false",
      question: "Humans can breathe underwater without any equipment.",
      answer: false,
      options: [true, false],
    },
  ];

  const handlePlayAgain = () => {
    setConnected(false); // Reset the game
    setPoints(200); // Reset points (optional)
  };

  useEffect(() => {
    // Initialize the WebSocket connection
    const newSocket = io("http://localhost:3001"); // Connect to your backend server
    setSocket(newSocket);

    // Log when connected
    newSocket.on("connect", () => {
      console.log("Connected to the server");
    });

    // Listen for a match found event
    newSocket.on("match-found", (data) => {
      console.log("Match found with opponent:", data.opponent);
      setConnected(true);
      setSearching(false);
    });

    // Return a destructor function that disconnects the socket
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      // Send questions to the server
      socket.emit("questions", questions);
      console.log("Questions sent to the server:", questions);
    }
  }, [socket, questions]);

  const handleFindMatch = () => {
    if (socket) {
      setSearching(true);
      socket.emit("find-match"); // Notify server to search for a match
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Player Profiles Section */}
      <div className="flex items-center justify-center space-x-12 bg-white rounded-lg shadow-md p-8 mb-8">
        {/* My Profile */}
        <div className="flex flex-col items-center space-y-2">
          <h3>{points} Points</h3>
          <Image
            src="/Image/Bible4.jpg"
            alt="profile"
            width={96}
            height={96}
            className="rounded-full shadow"
          />
          <h1 className="text-lg font-semibold text-gray-700">You</h1>
        </div>

        {/* VS Text */}
        <h1 className="text-2xl font-bold text-gray-800">VS</h1>

        {/* Opponent Profile */}
        <div className="flex flex-col items-center space-y-2">
          <h3>{opponentPoints} Points</h3>
          <Image
            src="/Image/Bible5.jpg"
            alt="opponent"
            width={96}
            height={96}
            className="rounded-full shadow"
          />
          <h1 className="text-lg font-semibold text-gray-700">Opponent</h1>
        </div>
      </div>

      {connected ? (
        <Questions
          questions={questions}
          setPoints={setPoints} // Pass setPoints function to Questions component
          onComplete={handlePlayAgain} // Pass the play again handler
        />
      ) : searching ? (
        <p className="text-lg text-gray-600">Searching for a match...</p>
      ) : (
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm lg:text-base"
          onClick={handleFindMatch}
        >
          Find Match
        </button>
      )}
    </div>
  );
};

export default Page;
