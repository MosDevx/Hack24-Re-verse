import Image from "next/image";
import { FocusCards } from "@/components/ui/focus-cards";
import {Hero} from "@/components/ui/Hero-section/hero"
import { Trivia} from "@/components/ui/Trivia-section/Trivia"
import { Signup } from "@/components/ui/Auth/signup";
import { All } from "@/components/ui/All/all";
import { HeroTrial } from "@/components/ui/Hero-section/herotrial";

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
      <Hero />
      <HeroTrial />
      <Trivia />
      <All />
      {/* <BottomNav /> */}
    </div>
      
  );
}
