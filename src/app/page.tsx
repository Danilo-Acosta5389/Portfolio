import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Preload from "@/components/ui/preload";
import Projects from "@/components//projects/projects";
import HeroSection from "@/components/hero/new-hero";
import Services from "@/components/services/services";

export default function Home() {
  return (
    <main className=" w-full h-full flex flex-col items-center justify-center">
      <Preload />
      <Header />
      <div className="h-full w-full">
        <HeroSection />
        <Services />
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  );
}
