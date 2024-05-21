'use client'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Suspense } from 'react';

export default function Home() {
  const searchParams = useSearchParams(); // For query string parameters
  const [my_h1, setH1] = useState(decodeURIComponent(searchParams.get('h1') || '') || 'Fabian Aps');
  const [my_h2, setH2] = useState(decodeURIComponent(searchParams.get('h2') || '') || 'ITler/DJ/Producer aus Leidenschaft');

  useEffect(() => {
    setH1(decodeURIComponent(searchParams.get('h1') || '') || 'Fabian Aps');
    setH2(decodeURIComponent(searchParams.get('h2') || '') || 'ITler/DJ/Producer aus Leidenschaft');
  }, [searchParams]);

  // Render your component with the extracted values
  return (
    <Suspense fallback={<div className="overflow-hidden flex flex-col items-center justify-center w-screen h-screen">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground" />
      <h1 className="z-9 text-4xl text-transparent duration-3000 bg-secondary-foreground cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Loading...
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground" />
      <div className="text-center animate-fade-in">

          <Image
          src="/pictures/logo.svg"
          alt="Logo"
          width={300}
          height={300}
          />
      </div>
      </div>}>
    <div className="overflow-hidden flex flex-col items-center justify-center w-screen h-screen">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground" />
      <h1 className="z-9 text-4xl text-transparent duration-3000 bg-secondary-foreground cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        {my_h1}
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground" />
      <div className="text-center animate-fade-in">
        {my_h2 === 'comboom.sucht' ?
          <Image
          src="/pictures/Logo-transparet.PNG"
          alt="Logo"
          width={300}
          height={180}
          /> :
          <h2 className="my-16 text-xl text-secondary-foreground ">
            {my_h2}
          </h2>
        }
      </div>
      </div>
      </Suspense>
  );
}