import CompareStrings from "./diff-strings";
import { motion, AnimatePresence } from 'framer-motion';



interface VerseSwitcherProps {
  currentIndex: number;
  versesArray: { reference: string }[];
  handleCheck: () => void;
  showDiff: boolean;
  correctVerse: string;
  userVerse: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

export default function VerseSwitcher({currentIndex, versesArray, handleCheck, showDiff, correctVerse, userVerse, inputRef}: VerseSwitcherProps){


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
	

	<div className="flex flex-col items-center justify-center bg-red-100 py-2 px-4 lg:px-20 ">
		<h1>{versesArray[currentIndex].reference}</h1>

	{showDiff &&	<CompareStrings
			correctVerse={correctVerse}
			userInput={userVerse || ''}/>}

		<input type="text" className="border-2 border-gray-300 p-2 rounded-lg w-full" ref={inputRef} placeholder="Type the verse here" />
		<button className="bg-blue-500 text-white p-2 rounded-lg mt-2" onClick={handleCheck}>
			Check
		</button>
	
	</div>

	</motion.div>
	</AnimatePresence>

)

}