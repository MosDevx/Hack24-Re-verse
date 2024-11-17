"use client";
import React, { useState, useEffect } from "react";

interface Question {
  answer: string | boolean;
  id?: number;
  options?: (string | boolean)[];
  question: string;
  type: string;
}

interface QuestionsProps {
  questions: Question[];
  setPoints: React.Dispatch<React.SetStateAction<number>>; // Points setter
  timeLimit?: number; // Optional time limit per question (in seconds)
  onComplete: () => void; // Callback when quiz completes
}

const Questions: React.FC<QuestionsProps> = ({ questions, setPoints, timeLimit = 10, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | boolean | null>(null);
  const [fillInAnswer, setFillInAnswer] = useState<string>(""); // For fill-in-the-blank answers
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  const currentQuestion = questions[currentQuestionIndex];

  // Countdown timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleNextQuestion(); // Go to next question if time runs out
    }
  }, [timeLeft]);

  const handleOptionSelect = (option: string | boolean) => {
    setSelectedOption(option);

    if (option === currentQuestion.answer) {
      setPoints((prevPoints) => prevPoints + 10); // Add 10 points for correct answer
    }
    setTimeout(handleNextQuestion, 500); // Delay before moving on
  };

  const handleFillInSubmit = () => {
    if (fillInAnswer.trim().toLowerCase() === String(currentQuestion.answer).toLowerCase()) {
      setPoints((prevPoints) => prevPoints + 10); // Add 10 points for correct answer
    }
    setFillInAnswer("");
    setTimeout(handleNextQuestion, 500);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setTimeLeft(timeLimit);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete(); // Trigger play again option after quiz completes
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-6 w-full max-w-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Question {currentQuestionIndex + 1}: {currentQuestion.question}
      </h2>

      <div className="text-3xl font-semibold text-red-600 mb-4">
        Time left: {timeLeft}s
      </div>

      {currentQuestion.type === "multiple-choice" || currentQuestion.type === "true-false" && currentQuestion.options ? (
        <div className="grid grid-cols-2 gap-4 mb-4">
          {currentQuestion.options && currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`py-2 px-4 rounded-lg transition ${
                selectedOption !== null && selectedOption === option
                  ? option === currentQuestion.answer
                    ? "bg-green-500 text-white ring-2 ring-green-300"
                    : "bg-red-500 text-white ring-2 ring-red-300"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
              disabled={selectedOption !== null}
            >
              {typeof option === "boolean" ? option.toString() : option}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <input
            type="text"
            value={fillInAnswer}
            onChange={(e) => setFillInAnswer(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleFillInSubmit()}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
            placeholder="Type your answer here"
            disabled={selectedOption !== null}
          />
          <button
            onClick={handleFillInSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-2"
            disabled={!fillInAnswer}
          >
            Submit Answer
          </button>
        </div>
      )}
    </div>
  );
};

export default Questions;
