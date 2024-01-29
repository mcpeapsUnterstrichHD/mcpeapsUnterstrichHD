import React from "react";
import ProjektCard from "@/components/projekt-card";

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center  p-4">
            <h1>Projekte</h1><ProjektCard ProjektImage="https://github.com/mcpeapsUnterstrichHD.png"
            ProjektImageAlt="Projekt Bild"
            ProjektImageFallback="FA"
            ProjektTitle="Projekt 1"
            ProjektDescription="test"
            ProjektLink="https://github.com/mcpeapsUnterstrichHD"
            ProjektContent="test" />
            
      </main>
    );
  }