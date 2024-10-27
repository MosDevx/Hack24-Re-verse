"use client";
import React, { useEffect, useState } from "react";
import LessonQuestions from "@/components/ui/lesson-questions";
import { getLevelById } from "@/lib/reverse";

interface Lesson {
  content: string;
  description: string | null;
  id: number;
  stageId: number;
  title: string;
}

export default function ArticlePage({ params }: { params: { id:number } }) {
//   const [params, setParams] = useState<{ id: number } | null>(null); // Store the unwrapped params
  const [showQuestions, setShowQuestions] = useState(false);
  const [lesson, setLesson] = useState<Lesson | null>(null);

  const handleSkip = () => {
    setShowQuestions(true);
  };

  // Unwrap params using useEffect
//   useEffect(() => {
//     const unwrapParams = async () => {
//       const resolvedParams = await paramsPromise;
//       setParams(resolvedParams); // Set the unwrapped params to the state
//     };

//     unwrapParams();
//   }, [paramsPromise]);

  // Fetch lesson data after params are unwrapped
  useEffect(() => {
    const fetchLesson = async () => {
      if (params?.id) {
        console.log(params.id);
        const result = await getLevelById(Number(params.id));
        console.log(result);
		setLesson(result);
		console.log(result)
      }
    };
    fetchLesson();
  }, [params]); // Trigger when params is unwrapped

  return (
    <>
      {!showQuestions ? (
        <>
          <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-4xl mx-auto p-4">
              <h1 className="text-4xl font-bold mb-4 text-black">{lesson?.title}</h1>
			  <h3 className="text-2xl font-bold mb-4">{lesson?.description}</h3>
              <p className="text-lg leading-relaxed">{lesson?.content}</p>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-500 text-white p-2 w-24 rounded"
              onClick={handleSkip}
            >
              Take Quiz
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-center mt-4">
          <LessonQuestions id={Number(params.id)} />
        </div>
      )}
    </>
  );
}
