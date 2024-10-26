"use client";
import React, { useState } from 'react';

export const MultipleChoiceQuestion = ({ question, options, correctAnswer,onAnswer }) => {
	const [selectedOption, setSelectedOption] = useState(null);
	const [isCorrect, setIsCorrect] = useState(false);
	// const [userAnswer, setUserAnswer] = useState('');

	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
		setIsCorrect(event.target.value === correctAnswer);
		onAnswer(isCorrect,event.target.value )
		
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
			{selectedOption && (
				<p className={`mt-4 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
					{isCorrect ? 'Correct!' : 'Incorrect'}
				</p>
			)}
		</div>
	);
};

export default MultipleChoiceQuestion;