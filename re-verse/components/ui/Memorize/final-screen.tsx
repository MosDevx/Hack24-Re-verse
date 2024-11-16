import ExpandableDiv from "./expandable-div";

export default function FinalScreen({missedVerses, totalVerses}: {missedVerses: {reference: string, content: string }[] , totalVerses: number}){

	const correctVerses = totalVerses - missedVerses.length;

	return (


		<div className="w-full h-full  bg-red-300">
			

			<div className='flex-none flex flex-col h-full justify-between items-center bg-blue-200'>
				
				<div className="mt-2 text-center">
					<h1>Final Score {100}</h1>
					<p>You got {correctVerses} out of {totalVerses} verses correct</p>
				</div>
				
				<div className="flex flex-col justify-center gap-3 items-center">
					{/* <p>Here are the verses you missed</p> */}
					{missedVerses.map((verse, index) => (
						// <p key={index}>{verse.reference}</p>
						<ExpandableDiv key={index} index={index} verse={verse} />
					))}
				</div>


				<button className="bg-blue-500 text-white p-2 rounded-lg mt-2">
					Play Again ?
				</button>


			</div>	

		</div>

	)

}