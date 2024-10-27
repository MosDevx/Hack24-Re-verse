"use client";
import React, { useState } from 'react';
import  LessonQuestions  from '@/components/ui/lesson-questions';

export default function ArticlePage() {
	const [showQuestions, setShowQuestions] = useState(false);

	const handleSkip = () => {
		setShowQuestions(true);
	};

	return (
		<>
			{!showQuestions ? (
				<>
					<div className="flex justify-center items-center min-h-screen">
						<div className="max-w-4xl mx-auto p-4">
							<h1 className="text-4xl font-bold mb-4">Lorem</h1>
							<p className="text-lg leading-relaxed">Ipsum</p>
						</div>
					</div>

					<div className="flex justify-center mt-4">
						<button className="bg-blue-500 text-white p-2 w-24 rounded" onClick={handleSkip}>Take Quiz</button>
					</div>
				</>
			) : (
				<div className="flex justify-center mt-4">
					<LessonQuestions />
				</div>
			)}
		</>
	);
}
