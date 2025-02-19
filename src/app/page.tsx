import About from "@/components/about";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Preload from "@/components/preload";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className=" w-full h-full flex flex-col items-center justify-center">
      <Preload />
      <Header />
      <div className="h-full w-full max-w-7xl">
        <Hero />
        <About />
        <Projects />
        <Contact />
        {/* <div className=" h-full w-full  bg-white bg-grid-black/[0.2] flex items-center justify-center">
        <div className=" h-full w-full pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div> */}
      </div>
    </main>
  );
}
