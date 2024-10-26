import Image from "next/image";
import { FocusCards } from "@/components/ui/focus-cards";
import {ContentCard} from '@/components/ui/content-card'

export default function Home() {
  const samples = [{
    title: "IconBible",
    src: "/globe.svg",
  },{
    title: "Icoible",
    src: "/vercel.svg",
  }]

  return (
    <div>
      <FocusCards cards={samples} />
      {/* <ContentCard/> */}
    </div>
  );
}
