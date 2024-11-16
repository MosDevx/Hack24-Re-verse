"use client";

import React, { useState } from "react";
import Image from "next/image";

const articles = [
  {
    title: "The Power of Faith",
    description: "Faith is the cornerstone of the Christian life. It is through faith that we trust in God's promises, find strength in difficult times, and experience His presence in our daily lives. This article explores the importance of faith and how it can transform our lives.",
    image: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Power of Hope",
    description: "Hope is essential for a fulfilling life. This article delves into the significance of hope and how it can guide us through challenging times.",
    image: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Power of Prayer",
    description: "Prayer is a powerful tool for connecting with God. This article discusses the importance of prayer and how it can strengthen our faith.",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const videos = [
  {
    title: "Phil Wickham - Battle Belongs (Official Music Video)",
    src: "https://www.youtube.com/embed/-yMmp5o05UM?si=zQ7R_f4V6VUGdch7",
    thumbnail: "https://img.youtube.com/vi/-yMmp5o05UM/hqdefault.jpg",
  },
  {
    title: "Dancing -Joe L Barnes & Tiffany Hudson",
    src: "https://www.youtube.com/embed/QXTvm72lSvo?si=LH8DkPFN5dSDIWC9",
    thumbnail: "https://img.youtube.com/vi/QXTvm72lSvo/hqdefault.jpg",
  },
  {
    title: "Praises - Hiforest ft. Elevation rhythm",
    src: "https://www.youtube.com/embed/pb4KwPKJoFM?si=FKMez46ADOoc-meO",
    thumbnail: "https://img.youtube.com/vi/pb4KwPKJoFM/hqdefault.jpg"
  },
];

const quizzes = [
  {
    question: "What is the cornerstone of the Christian life?",
    options: ["Faith", "Hope", "Love", "Prayer"],
    answer: "Faith",
  },
  {
    question: "What is essential for a fulfilling life?",
    options: ["Faith", "Hope", "Love", "Prayer"],
    answer: "Hope",
  },
  {
    question: "What is a powerful tool for connecting with God?",
    options: ["Faith", "Hope", "Love", "Prayer"],
    answer: "Prayer",
  },
];

export function Lessons() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const handleQuizCompletion = () => {
    setProgress(100);
  };

  return (
    <div className="container mx-auto p-6 flex flex-col items-center bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="space-y-4 text-center">
        <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600">
          Lessons
        </h3>
      </div>
      <div className="mt-6 w-full">
        <h4 className="text-2xl font-bold mb-4">Articles</h4>
        <div className="flex overflow-x-auto space-x-4">
          {articles.map((article, index) => (
            <div key={index} className="min-w-[300px] bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              {/* <Image src={article.image} alt={article.title} width={300} height={200} className="rounded-lg mb-4" /> */}
              <h5 className="text-xl font-bold">{article.title}</h5>
              <p className="text-gray-700 dark:text-gray-300">{article.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 w-full">
        <h4 className="text-2xl font-bold mb-4">Videos</h4>
        <div className="flex overflow-x-auto space-x-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 cursor-pointer"
              onClick={() => setSelectedVideo(video.src)}
            >
              <Image src={video.thumbnail} alt={video.title} width={300} height={200} className="rounded-lg mb-4" />
              <h5 className="text-xl font-bold">{video.title}</h5>
            </div>
          ))}
        </div>
        {selectedVideo && (
          <div className="mt-6 relative">
            <button
              className="absolute top-0 right-0  text-red-700  px-2 py-1 rounded-full"
              onClick={() => setSelectedVideo(null)}
            >
              &times;
            </button>
            <iframe 
              className="w-full h-[25rem] rounded-lg shadow-md" 
              src={selectedVideo} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            >
            </iframe>
          </div>
        )}
      </div>
      <div className="mt-6 w-full">
        <h4 className="text-2xl font-bold mb-4">Quiz</h4>
        <div className="space-y-4">
          {quizzes.map((quiz, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              <h5 className="text-xl font-bold">{quiz.question}</h5>
              <div className="space-y-2 mt-2">
                {quiz.options.map((option, idx) => (
                  <button key={idx} className="w-full bg-gray-200 dark:bg-gray-700 rounded-lg p-2 text-left">
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={handleQuizCompletion}
        >
          Complete Quiz
        </button>
      </div>
      <div className="mt-6 w-full">
        <h4 className="text-2xl font-bold mb-4">Progress</h4>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {progress === 100 && (
          <div className="mt-4 text-center text-2xl font-bold text-green-600">
            Congratulations! You've completed this section! 🎉
          </div>
        )}
      </div>
    </div>
  );
}
