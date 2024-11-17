import { prisma } from '@/lib/db'

import VerseDisplay from '@/components/ui/Memorize/verse-display'

export default async function Memorize(){



	const versesArray = await prisma.verse.findMany()

	return(
		<>
		<div className="flex flex-col items-center h-screen bg-slate-50 min-h-screen py-10 px-4 lg:px-20">
			
		<h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">MEMORIZE</h1>
			<div className='w-full grow flex flex-col h-full justify-center items-center bg-gray-800'>
			<VerseDisplay versesArray={versesArray} />

			</div>

		</div>
		</>
	)



}