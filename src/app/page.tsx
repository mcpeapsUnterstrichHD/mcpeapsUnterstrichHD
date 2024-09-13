"use client";
import Footer from "@/components/footer";
import { NavBar } from "@/components/nav-bar";

export default function Home() {
  return (
    <div>
      <nav className="top sticky top-0 z-10">
        <NavBar />
      </nav>
      <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
        <div className="hidden h-px w-screen animate-fade-left animate-glow bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground md:block" />
        <h1 className="z-9 animate-title cursor-default whitespace-nowrap bg-secondary-foreground bg-clip-text font-display text-4xl text-edge-outline text-white duration-3000 sm:text-6xl md:text-9xl ">
          Fabian Aps
        </h1>
        <div className="hidden h-px w-screen animate-fade-right animate-glow bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground md:block" />
        <div className="my-16 animate-fade-in text-center">
          <h2 className="text-white text-xl ">
            ITler/DJ/Producer aus Leidenschaft
          </h2>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}
