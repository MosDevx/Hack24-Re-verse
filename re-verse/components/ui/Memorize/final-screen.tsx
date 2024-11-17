import ExpandableDiv from "./expandable-div";
import Link from "next/link";

export default function FinalScreen({missedVerses, totalVerses}: {missedVerses: {reference: string, content: string }[] , totalVerses: number}){

	const correctVerses = totalVerses - missedVerses.length;

	return (


		<div className="w-full h-max bg-gradient-to-r from-red-300 to-yellow-300 p-4">
			<div className='flex-none flex flex-col h-max justify-between items-center bg-white shadow-lg rounded-lg p-6'>
				<div className="mt-2 text-center">
					<h1 className="text-4xl font-bold text-gray-800">Final Score</h1>
					<p className="text-xl text-gray-600">You got {correctVerses} out of {totalVerses} verses correct</p>
				</div>
				
				<div className="flex flex-col justify-center gap-3 w-full md:w-10/12  items-center mt-4">
					{/* <p>Here are the verses you missed</p> */}
					{missedVerses.map((verse, index) => (
						// <p key={index}>{verse.reference}</p>
						<ExpandableDiv key={index} index={index} verse={verse} />
					))}
				</div>

				    <Link
      href="/memorize"
      onClick={(e) => {
        e.preventDefault(); // Prevent default SPA behavior
        window.location.href = "/memorize"; // Force reload
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