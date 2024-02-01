import React from 'react';

export default function Home() {
  
  return (
    <div className="overflow-hidden flex flex-col items-center justify-center w-screen h-screen">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground" />
      <h1 className="z-9 text-4xl text-transparent duration-3000 bg-secondary-foreground cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Fabian Aps
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-xl text-secondary-foreground ">
        ITler/DJ/Producer aus Leidenschaft
        </h2>
      </div>
    </div>
  );
}



