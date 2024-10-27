"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FillInTheBlank from '@/components/ui/fill-in-blank';
import MultipleChoice from '@/components/ui/multiple-choice';
import TrueFalse from '@/components/ui/true-false';
import { motion } from 'framer-motion';

const questions = [
  { type: 'true-false', question: 'The Earth is flat.', answer: false },
  { type: 'true-false', question: 'The sun rises in the east.', answer: true },
  { type: 'true-false', question: 'Humans can breathe underwater without any equipment.', answer: false },
];

export default function Trivia() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(0);
  const [userAnswers, setUserAnswers] = useState<any[]>([]);
  const router = useRouter();
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

  const handleSubmitScore = async () => {
    await router.push('/leaderboard');
    await fetch('/api/scores', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ score, userAnswers }),
    });
  };

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-50 to-purple-100 p-4">
        <h1 className="text-4xl font-bold mb-4">Your Score: {score} out of {questions.length}</h1>
        <button onClick={handleSubmitScore} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Done !!
        </button>
      </div>
    );
  }

  if (!questions.length) return <div>Loading...</div>;

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (isCorrect: boolean, userAnswer: boolean) => {
    setIsCorrectAnswer(isCorrect);
    setShowResult(true);
    if (isCorrect) {
      setScore(score + 1);
    }
    setUserAnswers([...userAnswers, { question: currentQuestion.question, userAnswer, isCorrect }]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleSkip = () => {
    setUserAnswers('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if (currentQuestionIndex === questions.length - 1) {
      setIsFinished(true);
    }
  };

  const renderQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    switch (currentQuestion.type) {
      case 'fill-in-blank':
        return <FillInTheBlank question={currentQuestion.question} correctAnswer={currentQuestion.answer} onAnswer={handleAnswer} />;
      case 'multiple-choice':
        return <MultipleChoice question={currentQuestion.question} options={currentQuestion.options} correctAnswer={currentQuestion.answer} onAnswer={handleAnswer} />;
      case 'true-false':
        return <TrueFalse question={currentQuestion.question} correctAnswer={currentQuestion.answer} onAnswer={handleAnswer} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">Trivia Questions</h1>
      <div className="flex flex-col gap-6 items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        {renderQuestion()}
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSkip}>Skip</button>
        {showResult && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`mt-4 p-2 rounded ${isCorrectAnswer ? 'bg-green-200' : 'bg-red-200'}`}
          >
            {isCorrectAnswer ? 'Correct!' : 'Incorrect, try again.'}
          </motion.div>
        )}
        <p className="text-gray-900 dark:text-white">Score: {score}</p>
      </div>
    </div>
  );
}
