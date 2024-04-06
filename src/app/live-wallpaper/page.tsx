'use client'
import { useSearchParams } from 'next/navigation';

export default function Home() {
  // Determine if using dynamic routing segments or query string parameters
  const searchParams = useSearchParams(); // For query string parameters

  // Decode URI components directly (no need for a separate import)
  const my_h1 = decodeURIComponent(searchParams.get('h1') || '') || 'Fabian Aps';
  const my_h2 = decodeURIComponent(searchParams.get('h2') || '') || 'ITler/DJ/Producer aus Leidenschaft';
  

  // Render your component with the extracted values
  return (
    <div className="overflow-hidden flex flex-col items-center justify-center w-screen h-screen">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground" />
      <h1 className="z-9 text-4xl text-transparent duration-3000 bg-secondary-foreground cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        {my_h1}
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-xl text-secondary-foreground ">
          {my_h2}
        </h2>
      </div>
    </div>
  );
}

