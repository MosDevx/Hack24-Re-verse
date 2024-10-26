"use client";

import React, { useState } from 'react';

interface FillInTheBlankProps {
	question: string;
	correctAnswer: string;
	onAnswer: (isCorrect: boolean | null, userAnswer: string) => void;
}

const FillInTheBlank: React.FC<FillInTheBlankProps> = ({ question, correctAnswer ,onAnswer}) => {
	const [userAnswer, setUserAnswer] = useState('');
	const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserAnswer(e.target.value);
	};

	const checkAnswer = (userAnswer: string) => {
		const regex = new RegExp(correctAnswer, 'i');
		setIsCorrect(regex.test(userAnswer));
		console.log("result",isCorrect)
		onAnswer(isCorrect,userAnswer);
	};

	return (
		<div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
			<div className="text-xl font-medium text-black">{question}</div>
			<input
				type="text"
				value={userAnswer}
				onChange={handleChange}
				className="border border-gray-300 p-2 rounded w-full"
				placeholder="Type your answer here"
			/>
			<button
				onClick={checkAnswer}
				className="bg-blue-500 text-white p-2 rounded w-full"
			>
				Submit
			</button>
			{isCorrect !== null && (
				<div className={`mt-4 p-2 rounded ${isCorrect ? 'bg-green-200' : 'bg-red-200'}`}>
					{isCorrect ? 'Correct!' : 'Incorrect, try again.'}
				</div>
			)}
		</div>
	);
};

export default FillInTheBlank;