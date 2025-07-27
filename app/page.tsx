import About from "@/components/About";
import gsap from "gsap";
import Cocktails from "@/components/Cocktails";
import Hero from "@/components/Hero";
import { ScrollTrigger, SplitText } from "gsap/all";
import Art from "@/components/Art";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
}
