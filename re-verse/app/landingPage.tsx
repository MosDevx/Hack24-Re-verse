import React from "react";
import Navbar from "@/components/ui/Navbar/navbar";
import {Hero} from "@/components/ui/Hero-section/hero";
import {Content} from "@/components/ui/Content-overview/content"
import Community from "@/components/ui/Join-a-Community/community";
import { Overview } from "@/components/ui/Hooks/overview";
import { Footer } from "@/components/ui/Footer/footer";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Overview />
      <Community />
      <Content />
      <Footer />
    </div>
    
  );
}
