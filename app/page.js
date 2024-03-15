import HeroSection from "@/app/components/home/HeroSection";
import Image from "next/image";
import Partners from "./components/home/Partners";
import Features from "./components/home/Features";
import About from "./components/home/About";
import AboutTwo from "./components/home/AboutTwo";
import Video from "./components/home/Video";
import Testimonials from "./components/home/Testimonials";
import Download from "./components/home/Download";
import Pricing from "./components/home/Pricing";
import Subscribe from "./components/home/Subscribe";

export default function Home() {
  return (
    <main>
        <HeroSection />
        <Partners />
        <Features />
        <About />
        <AboutTwo />
        <Video />
        <Testimonials />
        <Download />
        <Pricing />
        <Subscribe />
    </main>
  );
}
