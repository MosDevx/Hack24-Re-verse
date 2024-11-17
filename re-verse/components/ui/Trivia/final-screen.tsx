import ExpandableDiv from "./trivia-expandable-div"; // Ensure this path is correct
import Link from "next/link";

export default function FinalScreen({score, missedQuestions, totalQuestions}: {score: number, missedQuestions: {question: string, answer: string }[] , totalQuestions: number}){

	const correctQuestion = totalQuestions - missedQuestions.length;

	return (


		<div className="w-full h-max bg-gradient-to-r from-red-300 to-yellow-300 p-4">
			<div className='flex-none flex flex-col h-max justify-between items-center bg-white shadow-lg rounded-lg p-6'>
				<div className="mt-2 text-center">
					<h1 className="text-4xl font-bold text-gray-800">Final Score:{score}</h1>
					<p className="text-xl text-gray-600">You got {correctQuestion} out of {totalQuestions} questions correct</p>
				</div>
				
				<div className="flex flex-col justify-center gap-3 w-full md:w-10/12  items-center mt-4">
					{/* <p>Here are the verses you missed</p> */}
					{missedQuestions.map((question, index) => (
						// <p key={index}>{verse.reference}</p>
						<ExpandableDiv key={index} index={index} questionObj={question} />
					))}
				</div>

				    <Link
      href="/trivia"
      onClick={(e) => {
        e.preventDefault(); // Prevent default SPA behavior
        window.location.href = "/trivia"; // Force reload
      }}
    >
					<button className="bg-blue-500 text-white p-3 rounded-lg mt-4 hover:bg-blue-600 transition duration-300">
						Play Again?
					</button>
				</Link>
			</div>	
		</div>

	)

}