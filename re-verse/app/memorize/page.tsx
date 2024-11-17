// import { prisma } from '@/lib/db'

import VerseDisplay from '@/components/ui/Memorize/verse-display'

export default async function Memorize(){



	// const versesArray = await prisma.verse.findMany()

	const versesArray = [
		{
			id: 1,
			reference: 'John 3:16',
			content: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.'
		},
		{
			id: 2,
			reference: 'John 1:1',
			content: 'In the beginning was the Word, and the Word was with God, and the Word was God.'
		},
		{
			id: 3,
			reference: 'John 1:14',
			content: 'The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.'
		},
		{
			id: 4,
			reference: 'John 14:6',
			content: 'Jesus answered, "I am the way and the truth and the life. No one comes to the Father except through me."'
		},
	]

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