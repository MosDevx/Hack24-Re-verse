"use client";
import React, { useState } from 'react';
import LessonQuestions from '@/components/ui/lesson-questions';
import { motion } from 'framer-motion';

export default function ArticlePage() {
  const [showQuestions, setShowQuestions] = useState(false);
  const handleSkip = () => { setShowQuestions(true); };

  return (
    <>
      {!showQuestions ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
          <div className="max-w-4xl mx-auto text-center p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Lorem</h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              Ipsum
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSkip}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full mt-8 shadow-md hover:shadow-lg transition duration-300"
          >
            Take Quiz
          </motion.button>
        </div>
      ) : (
        <div className="flex justify-center mt-4">
          <LessonQuestions />
        </div>
      )}
    </>
  );
}
