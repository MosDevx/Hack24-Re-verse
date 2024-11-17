import { prisma } from '@/lib/db'

import VerseDisplay from '@/components/ui/Memorize/verse-display'

export default async function Memorize(){



	const versesArray = await prisma.verse.findMany()

	return(
		<>
		<div className="flex flex-col items-center h-screen min-h-screen py-10 px-4 lg:px-20">
			
		<h1 className="text-4xl font-bold text-black mb-8">MEMORIZE</h1>
			<div className='w-full grow flex flex-col h-full justify-center items-center bg-gray-800'>
			<VerseDisplay versesArray={versesArray} />

			</div>

		</div>
		</>
	)



}