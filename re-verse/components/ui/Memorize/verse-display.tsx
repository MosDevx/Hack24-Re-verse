
"use client"



import { useState,useRef } from "react"
import similarity from 'string-similarity';
import VerseSwitcher from "./verse-switcher";
import FinalScreen from "./final-screen";	


export default function VerseDisplay({ versesArray }: { versesArray: {reference: string, content: string }[] }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showDiff, setShowDiff] = useState(false);

	const totalVerses = versesArray.length;

	const [missedVerses, setMissedVerses] = useState([]);

	const [isCompleted, setIsCompleted] = useState(false);

	const [userVerse, setUserVerse] = useState('')
	const [correctVerse, setCorrectVerse] = useState('')

	const isAtStart = currentIndex === 0;
	const isAtEnd = currentIndex === versesArray.length - 1;
	


	const handleSkip = () => {
		if (currentIndex < versesArray.length - 1) {
			setCurrentIndex((prevIndex) => prevIndex + 1);
		}
	};



	const inputRef = useRef<HTMLInputElement>(null);

	const normalizeText = (text: string) => text.toLowerCase().replace(/  +/g, ' ').replace(/[.,"'\/#!$%\^&\*;:{}=\-_`~()]/g, '');


		const checkSimilarity = (verse: string, input: string) => {
			const verseText = normalizeText(verse);
			const normalizedInputText = normalizeText(input);
			const similarityScore = similarity.compareTwoStrings(verseText, normalizedInputText);
			console.log("score is",similarityScore)
			return similarityScore >= 0.9;
		}


		const goToNextVerse = () => {
			setShowDiff(false);
			setUserVerse('')
			setCorrectVerse('')
			setCurrentIndex((prevIndex) => prevIndex + 1);
		}


		const handleCorrectVerse = () => {
		if(!isAtEnd){
			goToNextVerse()
		}else{
			setIsCompleted(true)
				//naviaget to end secreen
			console.log("endgame")
		}
		
		}

		const handleWrongVerse = () => {

			//add to missed verses
			setMissedVerses([...missedVerses, versesArray[currentIndex]]);

			//change after a delay

			if(!isAtEnd){
			setTimeout(() => {
				goToNextVerse()
			}, 2000)

		}	else{
				//naviaget to end secreen
		

			setTimeout(() => {
				setIsCompleted(true)
			}, 2000)
				console.log("endgame")
		}
		
		}




	const handleCheck = () => {
		const verse = versesArray[currentIndex];
		const inputText = inputRef.current?.value || '';

		const isSimilar = checkSimilarity(verse.content, inputText);

		setUserVerse(normalizeText(inputText))
		setCorrectVerse(verse.content)
		setShowDiff(true);

		if(isSimilar){
			handleCorrectVerse()

		}	else{
			handleWrongVerse()

		}
	
	};
	const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
			handleCheck();
      // Add your action here, e.g., submit the message
    }
	}

	return (
		<div className="flex grow bg-slate-50 justify-center h-full items-center w-full">
		{ isCompleted ? (
			<FinalScreen missedVerses={missedVerses} totalVerses={totalVerses}/>
		) : (

			<VerseSwitcher
			currentIndex={currentIndex}
			versesArray={versesArray}
			handleCheck={handleCheck}
			showDiff={showDiff}
			handleKeyDown={handleKeyDown}	
			correctVerse={correctVerse}
			userVerse={userVerse}
			inputRef={inputRef}
		/>
		)
		}
		</div>
	);
}
