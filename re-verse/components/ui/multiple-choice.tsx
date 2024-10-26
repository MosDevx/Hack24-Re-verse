"use client";
import React, { useState ,useEffect} from 'react';
import { motion } from 'framer-motion';

export const MultipleChoiceQuestion = ({ question, options, correctAnswer,onAnswer }) => {
	const [selectedOption, setSelectedOption] = useState(null);
	const [isCorrect, setIsCorrect] = useState(false);
	const [showResult, setShowResult] = useState(false);
	// const [userAnswer, setUserAnswer] = useState('');

	useEffect(() => {
		if (showResult) {
			setSelectedOption(null);
			const timer = setTimeout(() => {
				setShowResult(false);
			}, 1300); // Adjust the timeout duration as needed

			return () => clearTimeout(timer);
		}
	}, [showResult]);

	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
		setIsCorrect(event.target.value === correctAnswer);
		onAnswer(isCorrect,event.target.value )
		setShowResult(true)

	};

	return (
		<div className="p-4 bg-white shadow-md rounded-md">
			<h3 className="text-lg font-semibold mb-4">{question}</h3>
			<form>
				{options.map((option, index) => (
					<div key={index} className="mb-2">
						<label className="flex items-center">
							<input
								type="radio"
								value={option}
								checked={selectedOption === option}
								onChange={handleOptionChange}
								className="mr-2"
							/>
							{option}
						</label>
					</div>
				))}
			</form>
			{showResult && (
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
			)}
		</div>
	);
};

export default MultipleChoiceQuestion;