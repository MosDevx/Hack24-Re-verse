"use client";
import React, { useState, useEffect } from 'react';

interface TrueFalseQuestionProps {
	question: string;
	correctAnswer: string;
	onAnswer: (isCorrect: boolean | null, userAnswer: string | boolean) => void;
}

const TrueFalseQuestion: React.FC<TrueFalseQuestionProps> = ({ question, correctAnswer, onAnswer }) => {
	const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
	const [showResult, setShowResult] = useState(false);
	const [isCorrect, setIsCorrect] = useState(false);

	useEffect(() => {
		if (showResult) {
			const timer = setTimeout(() => {
				setSelectedAnswer(null);
				setShowResult(false);
			}, 1000); // Adjust the timeout duration as needed

			return () => clearTimeout(timer);
		}
	}, [showResult]);

	const handleAnswer = (answer: boolean) => {
		setSelectedAnswer(answer);
		const isCorrectAnswer = (answer.toString().toLowerCase()) === correctAnswer;
		setIsCorrect(isCorrectAnswer)
		onAnswer(isCorrectAnswer, answer);
		setShowResult(true);
	};

	return (
		<div className="p-4 border rounded shadow-md">
			<p className="mb-4 text-lg font-semibold">{question}</p>
			<div className="flex justify-center space-x-4">
				<button
					onClick={() => handleAnswer(true)}
					className={`px-4 py-2 rounded ${selectedAnswer === true ? (isCorrect ? 'bg-green-500' : 'bg-red-500') : 'bg-gray-200'}`}
				>
					True
				</button>
				<button
					onClick={() => handleAnswer(false)}
					className={`px-4 py-2 rounded ${selectedAnswer === false ? (isCorrect ? 'bg-green-500' : 'bg-red-500') : 'bg-gray-200'}`}
				>
					False
				</button>
			</div>
		</div>
	);
};

export default TrueFalseQuestion;