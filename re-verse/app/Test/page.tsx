"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const questions = [
  { question: "What's the capital of France?", type: 'multiple-choice', options: ['Paris', 'London', 'Berlin', 'Madrid'], answer: 'Paris' },
  { question: "What's the largest planet?", type: 'multiple-choice', options: ['Earth', 'Jupiter', 'Mars', 'Venus'], answer: 'Jupiter' },
  // Add more questions here...
];

interface Participant {
  id: number;
  name: string;
  avatar: string;
  score: number;
  currentAnswer: string | null;
  hasAnswered: boolean;
}

const ManyVsManyQuiz = () => {
  const [participants, setParticipants] = useState<Participant[]>([
    { id: 1, name: 'Alice', avatar: '/Image/Bible4.jpg', score: 0, currentAnswer: null, hasAnswered: false },
    { id: 2, name: 'Bob', avatar: '/Image/Bible5.jpg', score: 0, currentAnswer: null, hasAnswered: false },
    // Add up to 10 participants here...
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [started, setStarted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (participantId: number, answer: string) => {
    setParticipants((prev) =>
      prev.map((participant) =>
        participant.id === participantId
          ? { ...participant, currentAnswer: answer, hasAnswered: true }
          : participant
      )
    );
  };

  const calculateScores = () => {
    const correctAnswer = questions[currentQuestion].answer;
    setParticipants((prev) =>
      prev.map((participant) => {
        if (participant.currentAnswer === correctAnswer) {
          return { ...participant, score: participant.score + 10 };
        }
        return participant;
      })
    );
  };

  const nextQuestion = () => {
    calculateScores();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setParticipants((prev) =>
        prev.map((participant) => ({
          ...participant,
          currentAnswer: null,
          hasAnswered: false,
        }))
      );
    } else {
      setShowResults(true);
    }
  };

  const startGame = () => {
    setStarted(true);
    setShowResults(false);
    setCurrentQuestion(0);
    setParticipants((prev) =>
      prev.map((participant) => ({
        ...participant,
        score: 0,
        currentAnswer: null,
        hasAnswered: false,
      }))
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      {/* Question Display */}
      {started && !showResults && (
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">{questions[currentQuestion].question}</h2>
          <div className="flex justify-center space-x-4 mt-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={() => participants.forEach((p) => handleAnswer(p.id, option))}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Participant Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        {participants.map((participant) => (
          <div key={participant.id} className="bg-white rounded-lg shadow-md p-4 text-center">
            <Image
              src={participant.avatar}
              alt={participant.name}
              width={72}
              height={72}
              className="rounded-full mx-auto"
            />
            <h3 className="mt-2 font-medium text-gray-700">{participant.name}</h3>
            <p className="text-sm text-gray-500">Score: {participant.score}</p>
            <p
              className={`mt-1 ${
                participant.hasAnswered
                  ? participant.currentAnswer === questions[currentQuestion].answer
                    ? 'text-green-500'
                    : 'text-red-500'
                  : 'text-gray-400'
              }`}
            >
              {participant.hasAnswered ? (participant.currentAnswer === questions[currentQuestion].answer ? 'Correct' : 'Incorrect') : 'Waiting...'}
            </p>
          </div>
        ))}
      </div>

      {/* Game Controls */}
      {!started && (
        <button onClick={startGame} className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Start Game
        </button>
      )}
      {started && !showResults && (
        <button onClick={nextQuestion} className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Next Question
        </button>
      )}
      {showResults && (
        <div className="text-center mt-6">
          <h2 className="text-2xl font-bold text-gray-800">Final Scores</h2>
          <ul className="mt-4 space-y-2">
            {participants
              .sort((a, b) => b.score - a.score)
              .map((participant) => (
                <li key={participant.id} className="text-lg font-medium text-gray-700">
                  {participant.name}: {participant.score} Points
                </li>
              ))}
          </ul>
          <button onClick={startGame} className="mt-6 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default ManyVsManyQuiz;
