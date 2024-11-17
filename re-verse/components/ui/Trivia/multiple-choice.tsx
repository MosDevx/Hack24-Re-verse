"use client";
import React, { useState ,useEffect} from 'react';
import { motion } from 'framer-motion';

export const MultipleChoiceQuestion = ({ question, options, correctAnswer,onAnswer }) => {
	const [selectedOption, setSelectedOption] = useState<string | null>(null);
	const [isCorrect, setIsCorrect] = useState(false);
	const [showResult, setShowResult] = useState(false);
	// const [userAnswer, setUserAnswer] = useState('');

	useEffect(() => {

			setSelectedOption(null);
	
	}, [showResult]);

	const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedOption(event.target.value);
		const ans: boolean = event.target.value == correctAnswer;
		setIsCorrect(ans);
		onAnswer(ans, event.target.value);
		console.log("isCorrect", ans);
		console.log("ans", ans);

		setShowResult(true)

	};

	return (
		<div className="p-4 bg-white shadow-md rounded-md">
			<h3 className="text-lg font-semibold mb-4">{question}</h3>
			<form>
				{options.map((option, index) => (
					<motion.div 
						key={index} 
						className="mb-2 p-2 w-3/5 mx-auto text-center border rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
						whileHover={{ scale: 1.05, backgroundColor: '#f0fff0' }}
						whileTap={{ scale: 0.95, backgroundColor: '#f0fff0' }}
			
					>
						<label className="flex flex-col items-center justify-center cursor-pointer">
							<input
								type="radio"
								value={option}
								checked={selectedOption === option}
								onChange={handleOptionChange}
								className="mr-2 accent-blue-500 hidden"
							/>
							<span className="text-gray-700 font-bold">{option}</span>
						</label>
					</motion.div>
				))}
			</form>
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

export default MultipleChoiceQuestion;