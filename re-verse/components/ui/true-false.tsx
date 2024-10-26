"use client";
import React, { useState } from 'react';

interface TrueFalseQuestionProps {
	question: string;
	correctAnswer: boolean;
	onAnswer: (isCorrect: boolean | null) => void;
}

const TrueFalseQuestion: React.FC<TrueFalseQuestionProps> = ({ question, correctAnswer,onAnswer }) => {
	const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

	const handleAnswer = (answer: boolean) => {
		setSelectedAnswer(answer);
		onAnswer(selectedAnswer,answer)
		
	};

	return (
		<div className="p-4 border rounded shadow-md">
			<p className="mb-4 text-lg font-semibold">{question}</p>
			<div className="flex space-x-4">
				<button
					onClick={() => handleAnswer(true)}
					className={`px-4 py-2 rounded ${selectedAnswer === true ? (correctAnswer ? 'bg-green-500' : 'bg-red-500') : 'bg-gray-200'}`}
				>
					True
				</button>
				<button
					onClick={() => handleAnswer(false)}
					className={`px-4 py-2 rounded ${selectedAnswer === false ? (correctAnswer ? 'bg-green-500' : 'bg-red-500') : 'bg-gray-200'}`}
				>
					False
				</button>
			</div>
			{selectedAnswer !== null && (
				<p className={`mt-4 ${selectedAnswer === correctAnswer ? 'text-green-500' : 'text-red-500'}`}>
					{selectedAnswer === correctAnswer ? 'Correct!' : 'Incorrect!'}
				</p>
			)}
		</div>
	);
};

export default TrueFalseQuestion;