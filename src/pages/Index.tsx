import { ScrollArea } from "@radix-ui/react-scroll-area";
import Navigation from "../components/ui/portfolio/Navegation";
import Hero from "../components/ui/portfolio/Hero";
import About from "../components/ui/portfolio/About";
import Projects from "../components/ui/portfolio/Projects";
import Contact from "../components/ui/portfolio/Contact";
import Footer from "../components/ui/portfolio/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <ScrollArea />
      <Navigation/>
      <Hero />
      <About />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
}