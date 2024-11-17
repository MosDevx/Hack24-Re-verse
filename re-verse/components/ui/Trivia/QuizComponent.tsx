"use client";
import React from 'react';
import { useState,useEffect } from 'react';
// Importing question components (assuming these components are already created)
import FillInTheBlank from '@/components/ui/Trivia/fill-in-blank';
import MultipleChoice from  '@/components/ui/Trivia/multiple-choice'
import TrueFalse from '@/components/ui/Trivia/true-false';
import { motion } from 'framer-motion';
import { updateUserTriviaScore } from '@/lib/reverse';
import FinalScreen from './final-screen';



	interface Question {
		type: string;
		answer: string | boolean;
		id?: number;
		options?: string[];
		question: string;
		
	  }

	export default function QuizComponent({questionsArray}:{questionsArray:Question[]}) {
		const [questions, setQuestions] = useState<Question[]>(questionsArray);
		const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
		const [score, setScore] = useState(0);
		const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
		const [userAnswers, setUserAnswers] = useState<any[]>([]);


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
			try {
			  await updateUserTriviaScore(1);
			  console.log("done");
			} catch (error) {
			  console.log(error);
			}
		  };

		// useEffect(() => {
		// 	const fetchQuestions = async () => {
		// 	  const result: Question[] = await getTrivias();
		// 	  console.log(result);
		// 	  setQuestions(result);
		// 	};
		
		// 	fetchQuestions();
		//   }, []);
	
		if (isFinished) {
			console.log("useranswmers",userAnswers);
			return (

				<FinalScreen score={score} missedQuestions={userAnswers} totalQuestions={questions.length} />		
				// <div className="flex flex-col items-center justify-center h-screen">
				// 	<h1 className="text-4xl font-bold mb-4">Your Score: {score} </h1>
				// 	<button 
				// 		onClick={handleSubmitScore} 
				// 		className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
				// 	>
				// 		Done !!
				// 	</button>
				// </div>
			);
		}
	
		if (!questions.length) return <div>Loading...</div>;
	
	

		const handleAnswer = (isCorrect: boolean | null, userAnswer: string | boolean) => {
			
			const currentQuestion = questions[currentQuestionIndex];
			// const isCorrect = userAnswer === currentQuestion.answer;
			setIsCorrectAnswer(isCorrect ?? false)
			setShowResult(true)
			if (isCorrect) {
				setScore(score + 10);
			}else{
				setUserAnswers([...userAnswers, { question: currentQuestion.question, answer: currentQuestion.answer}]);
			}
			// setUserAnswers([...userAnswers, { question: currentQuestion.question, userAnswer, isCorrect }]);
			if (currentQuestionIndex < questions.length - 1) {
				setCurrentQuestionIndex(currentQuestionIndex + 1);
			} else {

				setTimeout(() => {
					setIsFinished(true);
				}, 1500);
				//! Submit answers to backend
				// fetch('/api/submit-answers', {
				// 	method: 'POST',
				// 	headers: {
				// 		'Content-Type': 'application/json'
				// 	},
				// 	body: JSON.stringify({ userAnswers, score })
				// });
			}
		};

		const handleSkip = () => {

			//record skipped question
			const currentQuestion = questions[currentQuestionIndex];
			setUserAnswers([...userAnswers, { question: currentQuestion.question, answer: currentQuestion.answer}]);
			if (currentQuestionIndex < questions.length - 1) {
				setCurrentQuestionIndex(currentQuestionIndex + 1);
			} else {

				setTimeout(() => {
					setIsFinished(true);
				}, 500);
			}
		};

		const renderQuestion = () => {
			const currentQuestion = questions[currentQuestionIndex];
			switch (currentQuestion.type) {
				case 'fill-in-blank':
					return <FillInTheBlank question={currentQuestion.question} correctAnswer={currentQuestion.answer as string} onAnswer={handleAnswer} />;
				case 'multiple-choice':
					return <MultipleChoice question={currentQuestion.question} options={currentQuestion.options} correctAnswer={currentQuestion.answer } onAnswer={handleAnswer} />;
				case 'true-false':
					return <TrueFalse question={currentQuestion.question} correctAnswer={currentQuestion.answer as boolean} onAnswer={handleAnswer} />;
				default:
					return null;
			}
		};

		return (
			<div className="flex flex-col items-center  justify-center h-screen mb-10 w-container" >
				<h1 className="text-center text-2xl font-bold mb-2">Trivia Questions</h1>
				<div className="flex container items-center mb-2 justify-between">
				<div>

					{showResult && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={` p-2 rounded ${
							isCorrectAnswer ? 'bg-green-200' : 'bg-red-200'
						}`}
					>
						{isCorrectAnswer ? 'Correct!' : 'Incorrect'}
					</motion.div>
								)}
				</div>

					<p className="text-white font-bold self-end text-xl bg-green-500 p-2 rounded-lg shadow-lg">
						Score: {score}
					</p>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>

				{renderQuestion()}
				<button 	className="bg-blue-500 text-white p-2 w-24 rounded" onClick={handleSkip}>Skip</button>
			
			

			
			</div>
			</div>

		);
	}
