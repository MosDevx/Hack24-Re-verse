"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FillInTheBlankProps {
	question: string;
	correctAnswer: string;
	onAnswer: (isCorrect: boolean | null, userAnswer: string) => void;
}

const FillInTheBlank: React.FC<FillInTheBlankProps> = ({ question, correctAnswer, onAnswer }) => {
	const [userAnswer, setUserAnswer] = useState('');
	const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
	const [showResult, setShowResult] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserAnswer(e.target.value);
	};

	const checkAnswer = () => {
		const regex = new RegExp(correctAnswer, 'i');
		const result = regex.test(userAnswer);
		setIsCorrect(result);
		onAnswer(result, userAnswer);
		setShowResult(true);

		if (result) {
			setUserAnswer('');
		}
	};

	useEffect(() => {
			setUserAnswer('');


	}, [showResult]);

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
			{/* {showResult && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className={`mt-4 p-2 rounded ${
						isCorrect ? 'bg-green-200' : 'bg-red-200'
					}`}
				>
					{isCorrect ? 'Correct!' : 'Incorrect, try again.'}
				</motion.div>
			)} */}
		</div>
	);
};

export default FillInTheBlank;