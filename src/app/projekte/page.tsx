import React from "react";
import ProjektCard from "@/components/projekt-card";

export default function Home() {
    return (
      <main className="flex max-h-screen flex-col items-center justfy-center p-4">
            <h1 className="text-4xl gap-8 p-8">Projekte</h1>
            <div className="my-Project-grid justify-center gap-4 flex-shrink">
            <ProjektCard 
            ProjektImage="/pictures/my_Portfolio.jpeg"
            ProjektImageAlt="Portfolio Bild"
            ProjektTitle="Portfolio"
            ProjektBadge="FOSS/WEB/NEW"
            ProjektLink="https://github.com/mcpeapsUnterstrichHD">Das Projekt zu diesem Portfolio</ProjektCard>
            <ProjektCard 
            ProjektImage="/pictures/my_Portfolio.webp"
            ProjektImageAlt="Projekt Bild"
            ProjektTitle="Projekt 1"
            ProjektBadge="test"
            ProjektLink="https://github.com/mcpeapsUnterstrichHD"> tesrt</ProjektCard>
            <ProjektCard 
            ProjektImage="/pictures/my_Portfolio.webp"
            ProjektImageAlt="Projekt Bild"
            ProjektTitle="Projekt 1"
            ProjektBadge="test"
            ProjektLink="https://github.com/mcpeapsUnterstrichHD"> tesrt</ProjektCard>
            <ProjektCard 
            ProjektImage="/pictures/my_Portfolio.webp"
            ProjektImageAlt="Projekt Bild"
            ProjektTitle="Projekt 1"
            ProjektBadge="test"
            ProjektLink="https://github.com/mcpeapsUnterstrichHD"> tesrt</ProjektCard>
            <ProjektCard 
            ProjektImage="/pictures/my_Portfolio.webp"
            ProjektImageAlt="Projekt Bild"
            ProjektTitle="Projekt 1"
            ProjektBadge="test"
            ProjektLink="https://github.com/mcpeapsUnterstrichHD"> tesrt</ProjektCard>
            <ProjektCard 
            ProjektImage="/pictures/my_Portfolio.webp"
            ProjektImageAlt="Projekt Bild"
            ProjektTitle="Projekt 1"
            ProjektBadge="test"
            ProjektLink="https://github.com/mcpeapsUnterstrichHD"> tesrt</ProjektCard>
            <ProjektCard 
            ProjektImage="/pictures/my_Portfolio.webp"
            ProjektImageAlt="Projekt Bild"
            ProjektTitle="Projekt 1"
            ProjektBadge="test"
            ProjektLink="https://github.com/mcpeapsUnterstrichHD"> tesrt</ProjektCard>
            <ProjektCard 
            ProjektImage="/pictures/my_Portfolio.webp"
            ProjektImageAlt="Projekt Bild"
            ProjektTitle="Projekt 1"
            ProjektBadge="test"
            ProjektLink="https://github.com/mcpeapsUnterstrichHD"> tesrt</ProjektCard>
            <ProjektCard 
            ProjektImage="/pictures/my_Portfolio.webp"
            ProjektImageAlt="Projekt Bild"
            ProjektTitle="Projekt 1"
            ProjektBadge="test"
            ProjektLink="https://github.com/mcpeapsUnterstrichHD"> tesrt</ProjektCard>
            <ProjektCard 
            ProjektImage="/pictures/my_Portfolio.webp"
            ProjektImageAlt="Projekt Bild"
            ProjektTitle="Projekt 1"
            ProjektBadge="test"
            ProjektLink="https://github.com/mcpeapsUnterstrichHD"> tesrt</ProjektCard>
            </div>
      </main>
    );
  }