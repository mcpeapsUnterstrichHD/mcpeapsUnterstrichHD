import Particles from '@/components/Chronark Particles';

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-primary-background via-primary-foreground to-primary-background">
      {/* ... other components */}
      <div id="install-container" className="hidden">
        <button id="install-button">Install App</button>
      </div>
    </div>
  );
};

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-primary-background via-primary-foreground to-primary-background">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
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



