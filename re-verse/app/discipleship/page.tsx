import BottomNav from "@/components/ui/Bottom-Nav/bottomNav";
import  Discipleship  from "@/components/ui/Discipleship/discipleship"


export default function Home() {

	return (
	  <div>
		{/* <ContentCard theme="Faith" verseOfTheDay="John 3:16" writeUp="Lporem Ipsum" /> */}
		<Discipleship />
		<BottomNav />
	  </div>
	)
  }