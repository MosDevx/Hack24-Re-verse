// import { prisma } from '@/lib/db'

import VerseDisplay from '@/components/ui/Memorize/verse-display'

export default async function Memorize(){



	// const verses = await prisma.verse.findMany()

	return(

		<div className="flex flex-col items-center bg-red-100 justify-center min-h-screen py-10 px-4 lg:px-20">
			<h1>MEMORIZE</h1>
			<VerseDisplay reference="John 3:16" text="for God so loved the world"/>

			<button className="bg-blue-500 text-white p-2 rounded-lg mt-2 self-end"
			>Skip</button>

		</div>
	)



}