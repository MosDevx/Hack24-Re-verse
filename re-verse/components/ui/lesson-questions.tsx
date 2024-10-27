"use client";
import React from "react";
import { useState, useEffect } from "react";
// Importing question components (assuming these components are already created)
import FillInTheBlank from "@/components/ui/fill-in-blank";
import MultipleChoice from "@/components/ui/multiple-choice";
import TrueFalse from "@/components/ui/true-false";
import { motion } from "framer-motion";
import {
  getLevelTriviaByLevelId,
  getOptionsByLevelTriviaId,
  updateUserProgress,
} from "@/lib/reverse";

// const questions = [
//   {
//     type: "fill-in-blank",
//     question: "The capital of France is ___.",
//     answer: "Paris",
//   },
//   {
//     type: "fill-in-blank",
//     question: "The largest planet in our solar system is ___.",
//     answer: "Jupiter",
//   },
//   {
//     type: "fill-in-blank",
//     question: "The chemical symbol for water is ___.",
//     answer: "H2O",
//   },
//   {
//     type: "multiple-choice",
//     question: "What is the capital of Italy?",
//     options: ["Rome", "Paris", "Berlin", "Madrid"],
//     answer: "Rome",
//   },
//   {
//     type: "multiple-choice",
//     question: "Which planet is known as the Red Planet?",
//     options: ["Earth", "Mars", "Jupiter", "Saturn"],
//     answer: "Mars",
//   },
//   {
//     type: "multiple-choice",
//     question: "What is the largest mammal?",
//     options: ["Elephant", "Blue Whale", "Giraffe", "Rhino"],
//     answer: "Blue Whale",
//   },
//   { type: "true-false", question: "The Earth is flat.", answer: false },
//   { type: "true-false", question: "The sun rises in the east.", answer: true },
//   {
//     type: "true-false",
//     question: "Humans can breathe underwater without any equipment.",
//     answer: false,
//   },
// ];

interface Question {
  answer: string;
  id: number;
  options: string[];
  question: string;
  type: string;
}

export default function LessonQuestions({ id }: { id: number }) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(0);
  const [userAnswers, setUserAnswers] = useState<any[]>([]);

  const [isFinished, setIsFinished] = useState(false);

  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (showResult) {
      const timer = setTimeout(() => {
        setShowResult(false);
      }, 1300); // Adjust the timeout duration as needed

      return () => clearTimeout(timer);
    }
  }, [showResult]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const result: Question[] = await getLevelTriviaByLevelId(Number(id));
      console.log(result);
      setQuestions(result);
    };

    fetchQuestions();
  }, []);
  // useEffect(()=>{
  /**
   * Fetches the trivia questions for the current level from the database.
   * Sets the questions state with the result.
   */
  // 	const fetchOptions = async ()=>{
  // 		const result = await getOptionsByLevelTriviaId(3);
  // 		console.log(result);
  // 	}

  // 	fetchOptions()
  // })

  const handleSubmitScore = async () => {
    try {
      await updateUserProgress(1);
      console.log("done");
    } catch (error) {
      console.log(error);
    }
  };

  if (isFinished) {
    return (
      <div className="flex flex-col items-center  justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">
          Your Score: {score} out of {questions.length}
        </h1>
        <button
          onClick={handleSubmitScore}
          className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Done !!
        </button>
      </div>
    );
  }

  if (!questions.length) return <div>Loading...</div>;

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (isCorrect: boolean, userAnswer: boolean) => {
    console.log("fromhandle ", isCorrect);
    const currentQuestion = questions[currentQuestionIndex];
    // const isCorrect = userAnswer === currentQuestion.answer;
    setIsCorrectAnswer(isCorrect);
    setShowResult(true);
    if (isCorrect) {
      setScore(score + 1);
    }
    setUserAnswers([
      ...userAnswers,
      { question: currentQuestion.question, userAnswer, isCorrect },
    ]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);

      //!! Submit answers to backend
      // fetch('/api/submit-answers', {
      // 	method: 'POST',
      // 	headers: {
      // 		'Content-Type': 'application/json'
      // 	},
      // 	body: JSON.stringify({ userAnswers, score })
      // });
    }
  };

  const handleSkip = () => {
    // setSubmittedAnswers([...submittedAnswers, 'Skipped']);
    setUserAnswers("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);

    // Check if it's the last question
    if (currentQuestionIndex === questions.length - 1) {
      setIsFinished(true);
    }
  };

  const renderQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    switch (currentQuestion.type) {
      case "fill-in-blank":
        return (
          <FillInTheBlank
            question={currentQuestion.question}
            correctAnswer={currentQuestion.answer}
            onAnswer={handleAnswer}
          />
        );
      case "multiple-choice":
        return (
          <MultipleChoice
            question={currentQuestion.question}
            options={currentQuestion.options}
            correctAnswer={currentQuestion.answer}
            onAnswer={handleAnswer}
          />
        );
      case "true-false":
        return (
          <TrueFalse
            question={currentQuestion.question}
            correctAnswer={currentQuestion.answer}
            onAnswer={handleAnswer}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center  justify-center h-screen">
      <h1 style={{ textAlign: "center", fontSize: "3rem" }}>
        Revision Questions
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {renderQuestion()}
        <button
          className="bg-blue-500 text-white p-2 w-24 rounded"
          onClick={handleSkip}
        >
          Skip
        </button>

        {showResult && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`mt-4 p-2 rounded ${
              isCorrectAnswer ? "bg-green-200" : "bg-red-200"
            }`}
          >
            {isCorrectAnswer ? "Correct!" : "Incorrect, try again."}
          </motion.div>
        )}
        <p className="text-xl font-semibold mt-4">Score: {score}</p>
      </div>
    </div>
  );
}
