
import Image from "next/image";
import {LandHere}  from "@/components/ui/landAfterSign/LandHere"
import BottomNav from "@/components/ui/Bottom-Nav/bottomNav";
import {ContentCard} from '@/components/ui/content-card';
import { Homepage } from "@/components/ui/After-Sign/homePage";

export default function Home() {

  return (
    <div>
      {/* <ContentCard theme="Faith" verseOfTheDay="John 3:16" writeUp="Lporem Ipsum" /> */}
      <Homepage />
    </div>
  )
}