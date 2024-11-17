import CompareStrings from "./diff-strings";
import { motion, AnimatePresence } from 'framer-motion';



interface VerseSwitcherProps {
  currentIndex: number;
  versesArray: { reference: string }[];
  handleCheck: () => void;
  showDiff: boolean;
  handleKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  correctVerse: string;
  userVerse: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

export default function VerseSwitcher({currentIndex, versesArray, handleCheck, handleKeyDown, showDiff, correctVerse, userVerse, inputRef}: VerseSwitcherProps){


return(


	<AnimatePresence mode="wait">
	<motion.div
		key={currentIndex}
		initial={{ opacity: 0, x: 100 }}
		animate={{ opacity: 1, x: 0 }}
		exit={{ opacity: 0, x: -100 }}
		transition={{ duration: 0.5 }}
		style={{
			// position: 'absolute',
			width: '80%',
			height: '80%',
			textAlign: 'center',
		}}
	>
	
	<div className="flex flex-col items-center justify-center mt-12 bg-white shadow-md rounded-lg py-6 px-8 lg:px-24">
		<h1 className="text-2xl font-semibold mb-4">{versesArray[currentIndex].reference}</h1>

		{showDiff && (
			<CompareStrings
				correctVerse={correctVerse}
				userInput={userVerse || ''}
			/>
		)}

		<textarea
			type="text"
			className="border-2 border-gray-300 p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
			ref={inputRef}
			placeholder="Type the verse here"
			onKeyDown={handleKeyDown}
		/>
		<button
			className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
			onClick={handleCheck}
		>
			Check
		</button>
	</div>

	</motion.div>
	</AnimatePresence>

)

}