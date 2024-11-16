import Image from "next/image";
import LandingPage from "./landingPage";
import {Discipleshipsection} from "@/components/ui/After-Sign/Discipleship/Discipleshipsection";

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
      <div>
        {/* <Discipleshipsection /> */}
        <LandingPage />
      </div>
      
    </div>
      
  );
}
