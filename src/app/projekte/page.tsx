import React from "react";
import ProjektCard from "@/components/projekt-card";
import Footer from "@/components/footer";

export default function Home() {
    return (
      <main className="flex max-h-screen flex-col items-center justfy-center p-4">
        <h1 className="text-6xl gap-8 p-8">Projekte</h1>

        <h2 className="text-5xl gap-8 p-8">Gepinte Projekte</h2>


        <div className="flex flex-wrap justify-center items-center gap-4 flex-shrink w-full max-w-screen-lg">
          <ProjektCard
            ProjektImage="/pictures/my_Portfolio.jpeg"
            ProjektImageAlt="Portfolio Bild"
            ProjektImageBgColor=""
            ProjektTitle="Portfolio"
            ProjektBadges={["FOSS","WEB","NEW"]}
            ProjektLink="https://github.com/mcpeapsUnterstrichHD/mcpeapsUnterstrichHD">Das Projekt zu diesem Portfolio.</ProjektCard>
          <ProjektCard
            ProjektImage="/pictures/OSZimt-Logo-l.png"
            ProjektImageAlt="Grosßes Logo vom OSZ IMT"
            ProjektImageBgColor="bg-white"
            ProjektTitle="Schul Repository"
            ProjektBadges={["FOSS","SCHOOL"]}
            ProjektLink="https://github.com/comboomPunkTsucht/OSZIMT-repo-ITA12_aps">Das ist Das Repository mit meinen aufgaben aus meine Ausbildung.</ProjektCard>
          <ProjektCard
            ProjektImage="/pictures/searxng.png"
            ProjektImageAlt="SearxNG Logo"
            ProjektImageBgColor=""
            ProjektTitle="Meine eigene Suchmaschine"
            ProjektBadges={["FOSS","WEB","NEW", "SEARCH ENGINE", "DOCKER"]}
            ProjektLink="https://github.com/mcpeapsUnterstrichHD/searxng">Das Projekt zu Meiner Suchmaschine basiernd auf SearxNG</ProjektCard>
        </div>

        <h2 className="text-4xl gap-8 p-8">Alle Projekte</h2>

            <div className="flex flex-wrap justify-center items-center gap-4 flex-shrink w-full max-w-screen-lg">
            <ProjektCard
            ProjektImage="/pictures/my_Portfolio.jpeg"
            ProjektImageAlt="Portfolio Bild"
            ProjektImageBgColor=""
            ProjektTitle="Portfolio"
            ProjektBadges={["FOSS","WEB","NEW"]}
            ProjektLink="https://github.com/mcpeapsUnterstrichHD/mcpeapsUnterstrichHD">Das Projekt zu diesem Portfolio.</ProjektCard>
          <ProjektCard
            ProjektImage="/pictures/OSZimt-Logo-l.png"
            ProjektImageAlt="Grosßes Logo vom OSZ IMT"
            ProjektImageBgColor="bg-white"
            ProjektTitle="Schul Repository"
            ProjektBadges={["FOSS","SCHOOL"]}
            ProjektLink="https://github.com/comboomPunkTsucht/OSZIMT-repo-ITA12_aps">Das ist Das Repository mit meinen aufgaben aus meine Ausbildung.</ProjektCard>
          <ProjektCard
            ProjektImage="/pictures/OSZimt-Logo-l.png"
            ProjektImageAlt="Grosßes Logo vom OSZ IMT"
            ProjektImageBgColor="bg-white"
            ProjektTitle="Klassen Website"
            ProjektBadges={["FOSS","SCHOOL", "WEB", "MARKDOWN", "WIKI"]}
            ProjektLink="https://github.com/comboomPunkTsucht/OSZ_ITA12_Doc">Das ist die Webseite der Klassen ITA 12 in der ich ich am OSZ IMT gewesen bin.</ProjektCard>
          <ProjektCard
            ProjektImage="/pictures/Klassen_App_Icon_iOS_macOS_iPadOS.png"
            ProjektImageAlt="App Icon der Klassen App"
            ProjektImageBgColor=""
            ProjektTitle="Klassen App"
            ProjektBadges={["FOSS","SCHOOL", "APP", "iOS", "SWIFT", "SWIFTUI", "HUB"]}
            ProjektLink="https://github.com/comboomPunkTsucht/ITA-12_App">Das ist die App der Klassen ITA 12 in der ich ich am OSZ IMT gewesen bin.</ProjektCard>
          <ProjektCard
            ProjektImage="/pictures/searxng.png"
            ProjektImageBgColor=""
            ProjektImageAlt="SearxNG Logo"
            ProjektTitle="Meine eigene Suchmaschine"
            ProjektBadges={["FOSS","WEB","NEW", "SEARCH ENGINE", "DOCKER"]}
            ProjektLink="https://github.com/mcpeapsUnterstrichHD/searxng">Das Projekt zu Meiner Suchmaschine basiernd auf SearxNG</ProjektCard>
          <ProjektCard
            ProjektImage="/pictures/Logo-mahd.JPG"
            ProjektImageAlt="mcpeaps_HD Logo"
            ProjektImageBgColor=""
            ProjektTitle="Meine eigenen Dotfiles"
            ProjektBadges={["FOSS","WEB","NEW", "Konfiguration", "DOTFILES"]}
            ProjektLink="https://github.com/mcpeapsUnterstrichHD/dotfiles">Das Repository für meine Dotfiles.</ProjektCard>
          <ProjektCard
            ProjektImage="/pictures/Logo-transparet.PNG"
            ProjektImageAlt="comboom.sucht Logo"
            ProjektImageBgColor="bg-black"
            ProjektTitle="comboom.sucht Website"
            ProjektBadges={["FOSS", "WEB", "MARKDOWN", "WIKI"]}
            ProjektLink="https://github.com/comboomPunkTsucht/comboom.sucht-BLOG">Das ist die Webseite meiner Freundes Gruppe.</ProjektCard>
          <ProjektCard
            ProjektImage="/pictures/Logo-transparet.PNG"
            ProjektImageAlt="comboom.sucht Logo"
            ProjektImageBgColor="bg-black"
            ProjektTitle="comboom.sucht App"
            ProjektBadges={["FOSS", "APP", "iOS", "SWIFT", "SWIFTUI", "HUB"]}
            ProjektLink="https://github.com/comboomPunkTsucht/comboomPunkTsucht-IOS-macOS-App">Das ist die App meiner Freundes Gruppe.</ProjektCard>
            </div>
            <Footer />
      </main>
    );
  }