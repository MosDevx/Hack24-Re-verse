import QuizComponent from "@/components/ui/Trivia/QuizComponent";

interface Question {
	type: string;
	answer: string | boolean;
	id?: number;
	options?: string[];
	question: string;
	
	}



export default async function Trivia(){

	const christianQuestionsArray: Question[] = [
    // { type: 'fill-in-blank', question: "Who was swallowed by a big fish?", answer: 'Jonah' },
    // { type: 'fill-in-blank', question: "What is the first book of the Bible?", answer: 'Genesis' },
    // { type: 'fill-in-blank', question: "What was the name of Jesus' mother?", answer: 'Mary' },
    { type: 'multiple-choice', question: 'Who denied Jesus three times before the rooster crowed?', options: ['Peter', 'John', 'James', 'Matthew'], answer: 'Peter' },
    // { type: 'multiple-choice', question: 'Which of these is one of the fruits of the Spirit?', options: ['Love', 'Wealth', 'Power', 'Honor'], answer: 'Love' },
    { type: 'multiple-choice', question: 'What did Jesus feed to 5,000 people?', options: ['Fish and bread', 'Bread and wine', 'Fruit and water', 'Meat and bread'], answer: 'Fish and bread' },
    // { type: 'true-false', question: 'Jesus was born in Nazareth.', answer: false },
    // { type: 'true-false', question: 'The Bible is made up of 66 books.', answer: true },
    // { type: 'true-false', question: 'David was the first king of Israel.', answer: false }
];

		return(
				<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-50 to-purple-100 p-4">
						<QuizComponent questionsArray={christianQuestionsArray} />
				</div>
		)
}