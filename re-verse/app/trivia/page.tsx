"use client";
import React from 'react';
import { useState } from 'react';
// Importing question components (assuming these components are already created)
import FillInTheBlank from '@/components/ui/fill-in-blank';
import MultipleChoice from  '@/components/ui/multiple-choice'
import TrueFalse from '@/components/ui/true-false';



// export default function Home() {

// 	// return (
// 	// 	<div>
// 	// 		<h1>Trivia Questions</h1>

// 	// 		<h2>Fill in the Blank</h2>
// 	// 		<FillInTheBlank question="The capital of France is ___." answer="Paris" />
// 	// 		<FillInTheBlank question="The largest planet in our solar system is ___." answer="Jupiter" />
// 	// 		<FillInTheBlank question="The chemical symbol for water is ___." answer="H2O" />

// 	// 		<h2>Multiple Choice</h2>
// 	// 		<MultipleChoice 
// 	// 			question="What is the capital of Italy?" 
// 	// 			options={['Rome', 'Paris', 'Berlin', 'Madrid']} 
// 	// 			answer="Rome" 
// 	// 		/>
// 	// 		<MultipleChoice 
// 	// 			question="Which planet is known as the Red Planet?" 
// 	// 			options={['Earth', 'Mars', 'Jupiter', 'Saturn']} 
// 	// 			answer="Mars" 
// 	// 		/>
// 	// 		<MultipleChoice 
// 	// 			question="What is the largest mammal?" 
// 	// 			options={['Elephant', 'Blue Whale', 'Giraffe', 'Rhino']} 
// 	// 			answer="Blue Whale" 
// 	// 		/>

// 	// 		<h2>True or False</h2>
// 	// 		<TrueFalse question="The Earth is flat." answer={false} />
// 	// 		<TrueFalse question="The sun rises in the east." answer={true} />
// 	// 		<TrueFalse question="Humans can breathe underwater without any equipment." answer={false} />
// 	// 	</div>
// 	// );





	const questions = [
		{ type: 'fill-in-blank', question: 'The capital of France is ___.', answer: 'Paris' },
		{ type: 'fill-in-blank', question: 'The largest planet in our solar system is ___.', answer: 'Jupiter' },
		{ type: 'fill-in-blank', question: 'The chemical symbol for water is ___.', answer: 'H2O' },
		{ type: 'multiple-choice', question: 'What is the capital of Italy?', options: ['Rome', 'Paris', 'Berlin', 'Madrid'], answer: 'Rome' },
		{ type: 'multiple-choice', question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], answer: 'Mars' },
		{ type: 'multiple-choice', question: 'What is the largest mammal?', options: ['Elephant', 'Blue Whale', 'Giraffe', 'Rhino'], answer: 'Blue Whale' },
		{ type: 'true-false', question: 'The Earth is flat.', answer: false },
		{ type: 'true-false', question: 'The sun rises in the east.', answer: true },
		{ type: 'true-false', question: 'Humans can breathe underwater without any equipment.', answer: false }
	];

	export default function Home() {
		const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
		const [score, setScore] = useState(0);
		const [userAnswers, setUserAnswers] = useState<any[]>([]);

		const [isFinished, setIsFinished] = useState(false);


		const handleSubmitScore = async () => {
			await fetch('/api/scores', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ score, submittedAnswers }),
			});
		};
	
		if (isFinished) {
			return (
				<div>
					<h1>Your Score: {score} out of {questions.length}</h1>
					<button onClick={handleSubmitScore}>Submit Answers</button>
				</div>
			);
		}
	
		if (!questions.length) return <div>Loading...</div>;
	
		const currentQuestion = questions[currentQuestionIndex];
	

		const handleAnswer = (isCorrect: boolean, userAnswer:boolean) => {
			
			const currentQuestion = questions[currentQuestionIndex];
			// const isCorrect = userAnswer === currentQuestion.answer;

			if (isCorrect) {
				setScore(score + 1);
			}
			setUserAnswers([...userAnswers, { question: currentQuestion.question, userAnswer, isCorrect }]);
			if (currentQuestionIndex < questions.length - 1) {
				setCurrentQuestionIndex(currentQuestionIndex + 1);
			} else {
				// Submit answers to backend
				fetch('/api/submit-answers', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ userAnswers, score })
				});
			}
		};

		const handleSkip = () => {
			// setSubmittedAnswers([...submittedAnswers, 'Skipped']);
			setUserAnswers('');
			setCurrentQuestionIndex(currentQuestionIndex + 1);
	
			// Check if it's the last question
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
					return <MultipleChoice question={currentQuestion.question} options={currentQuestion.options} correctAnswer={currentQuestion.answer } onAnswer={handleAnswer} />;
				case 'true-false':
					return <TrueFalse question={currentQuestion.question} answer={currentQuestion.answer} onAnswer={handleAnswer} />;
				default:
					return null;
			}
		};

		return (
			<div>
				<h1>Trivia Questions</h1>
				{renderQuestion()}
				<button 	className="bg-blue-500 text-white p-2 rounded w-full" onClick={handleSkip}>Skip</button>
				<p>Score: {score}</p>
			</div>

		);
	}
