import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Preload from "@/components/ui/preload";
import Projects from "@/components//projects/projects";
import HeroSection from "@/components/hero/new-hero";

export default function Home() {
  return (
    <main className=" w-full h-full flex flex-col items-center justify-center">
      <Preload />
      <Header />
      <div className="h-full w-full">
        <HeroSection />
        <Hero />
        <About />
        <Projects />
        <Contact />
        {/* <div className=" h-screen w-full  bg-white bg-grid-black/[0.2] flex items-center justify-center">
          <div className=" h-screen w-full pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div> */}
      </div>
    </main>
  );
}
