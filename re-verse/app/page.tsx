import Image from "next/image";
import { FocusCards } from "@/components/ui/focus-cards";

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
    </div>
  );
}
