
"use client"

import { useState,useRef } from "react"

export default function VerseDisplay({ versesArray }: { versesArray: {reference: string, content: string }[] }) {
	const [currentIndex, setCurrentIndex] = useState(0);


	console.log(versesArray)
	const handleNext = () => {
		if (currentIndex < versesArray.length - 1) {
			setCurrentIndex((prevIndex) => prevIndex + 1);
		}
	};

	const inputRef = useRef<HTMLInputElement>(null);
	const [inputText, setInputText] = useState('');

	const normalizeText = (text: string) => text.toLowerCase().replace(/  +/g, ' ').replace(/[.,"'\/#!$%\^&\*;:{}=\-_`~()]/g, '');


	const handleCheck = () => {
		const verse = versesArray[currentIndex];
		const inputText = inputRef.current?.value || '';
		const verseText = normalizeText(verse.content);
		const normalizedInputText = normalizeText(inputText);
		const isCorrect = verseText == normalizedInputText;
		import similarity from 'string-similarity';

		const similarityScore = similarity.compareTwoStrings(verseText, normalizedInputText);
		const isCorrect = similarityScore >= 0.8;
		const message = isCorrect ? 'Correct!' : 'Incorrect!';
		console.log(verseText, normalizedInputText, isCorrect);
		alert(message);
	};

	const isAtStart = currentIndex === 0;
	const isAtEnd = currentIndex === versesArray.length - 1;

	return (
		<div className="flex flex-col items-center justify-center py-2 px-4 lg:px-20 bg-gray-50">
			<h1>{versesArray[currentIndex].reference}</h1>
			<input type="text" className="border-2 border-gray-300 p-2 rounded-lg w-full" ref={inputRef} placeholder="Type the verse here" />
			<button className="bg-blue-500 text-white p-2 rounded-lg mt-2" onClick={handleCheck}>
				Check
			</button>
			<button className="bg-blue-500 text-white p-2 rounded-lg mt-2" onClick={handleNext} disabled={isAtEnd}>
				Next
			</button>
		</div>
	);
}
