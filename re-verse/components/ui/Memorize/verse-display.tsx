
"use client"

export default function VerseDisplay({reference,text}:{reference:string, text:string}){

	return(

		<div className="flex flex-col items-center justify-center  py-2 px-4 lg:px-20 bg-gray-50">
			<h1>{reference}</h1>

			<input type="text" className="border-2 border-gray-300 p-2 rounded-lg w-full" placeholder="Type the verse here" />

			<button className="bg-blue-500 text-white p-2 rounded-lg mt-2"
			>Check</button>

		</div>
	)

}