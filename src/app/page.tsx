"use client";
import { AppSidebar } from "@/components/app-sidebar";
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
        <h1 className="z-9 animate-title cursor-default whitespace-nowrap bg-secondary-foreground bg-clip-text font-display text-4xl text-edge-outline dark:text-white light:text-black duration-3000 sm:text-6xl md:text-9xl ">
          Fabian Aps
        </h1>
        <div className="hidden h-px w-screen animate-fade-right animate-glow bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground md:block" />
        <div className="my-16 animate-fade-in text-center">
          <h2 className="dark:text-white light:text-black text-xl ">
            ITler/DJ/Producer aus Leidenschaft
          </h2>
        </div>
        <aside className="float-left clear-left isolate absolute z-10"><AppSidebar /></aside>
        <div className="absolute inset-x-0 bottom-0">

          <Footer />
        </div>
      </div>
    </div>
  );
}
