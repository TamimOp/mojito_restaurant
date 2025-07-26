import About from "@/components/About";
import gsap from "gsap";
import Cocktails from "@/components/Cocktails";
import Hero from "@/components/Hero";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <main>
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
}
