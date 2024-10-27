import BottomNav from "@/components/ui/Bottom-Nav/bottomNav";
import  Trivia  from "@/components/ui/Trivia/Triviaqs"

export default function Home() {

	return (
	  <div>
		{/* <ContentCard theme="Faith" verseOfTheDay="John 3:16" writeUp="Lporem Ipsum" /> */}
		<Trivia />
		<BottomNav />
	  </div>
	)
  }