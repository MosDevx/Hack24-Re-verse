import Image from "next/image";
import { FocusCards } from "@/components/ui/focus-cards";
import Navbar from "../app/Navbar/Navbar";

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
      <Navbar className="top-2" />
    </div>
  );
}
