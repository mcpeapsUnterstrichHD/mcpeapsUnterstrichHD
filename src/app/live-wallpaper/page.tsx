'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function GetH2() {
  const searchParams = useSearchParams(); // For query string parameters
  const [myH2, setH2] = useState(decodeURIComponent(searchParams.get('h2') || '') || 'ITler/DJ/Producer aus Leidenschaft');

  useEffect(() => {
    setH2(decodeURIComponent(searchParams.get('h2') || '') || 'ITler/DJ/Producer aus Leidenschaft');
  }, [searchParams]);

  return (
    myH2 === 'comboom.sucht' ?
      <Image
        src="/pictures/Logo-transparet.PNG"
        alt="Logo"
        width={300}
        height={180}
      /> :
      <h2 className="my-16 text-xl text-secondary-foreground">
        {myH2}
      </h2>
  );
}

function GetH1() {
  const searchParams = useSearchParams(); // For query string parameters
  const [myH1, setH1] = useState(decodeURIComponent(searchParams.get('h1') || '') || 'Fabian Aps');

  useEffect(() => {
    setH1(decodeURIComponent(searchParams.get('h1') || '') || 'Fabian Aps');
  }, [searchParams]);

  return (
    <h1 className="z-9 text-4xl text-transparent duration-3000 bg-secondary-foreground cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
      {myH1}
    </h1>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden flex flex-col items-center justify-center w-screen h-screen">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground" />
      <Suspense fallback={
        <h1 className="z-9 text-4xl text-transparent duration-3000 bg-secondary-foreground cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
          <Skeleton className="h-[5rem] w-[500px] rounded-full" />
        </h1>
      }>
        <GetH1 />
      </Suspense>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground" />
      <div className="text-center animate-fade-in">
        <Suspense fallback={<h2 className="my-16 text-xl text-secondary-foreground">
          <Skeleton className="h-[3.5rem] w-[500px] rounded-full" />
        </h2>}>
          <GetH2 />
        </Suspense>
      </div>
    </div>
  );
}
