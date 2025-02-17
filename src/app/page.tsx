import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Header />
      <Hero />
      {/* <div className=" h-full w-full  bg-white bg-grid-black/[0.2] flex items-center justify-center">
        <div className=" h-full w-full pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div> */}
    </main>
  );
}
