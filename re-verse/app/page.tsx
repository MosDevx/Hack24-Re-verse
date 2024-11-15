import Image from "next/image";
import LandingPage from "./landingPage";

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
      <LandingPage />
    </div>
      
  );
}
