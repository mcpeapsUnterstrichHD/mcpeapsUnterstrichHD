import React from "react";
import ProjektCard from "@/components/projekt-card";

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justfy-center p-4">
            <h1>Projekte</h1>
            <ProjektCard 
            ProjektImage="/pictures/my_Portfolio.webp"
            ProjektImageAlt="Projekt Bild"
            ProjektTitle="Projekt 1"
            ProjektBadge="test"
            ProjektLink="https://github.com/mcpeapsUnterstrichHD"> tesrt</ProjektCard>
            
      </main>
    );
  }