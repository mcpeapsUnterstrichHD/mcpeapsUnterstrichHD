"use client"
import SkillCard, { type SkillCardProps } from "@/components/skill-card";
import {
  TimeLineElementBig,
  TimeLineElementSmall,
  type TimeLineElementProps
} from "@/components/timeline-element";
import  MasonryGrid, {Variants} from "@/components/MasonryGrid"
import { Button } from "@/components/ui/button";
import Timeline from "@mui/lab/Timeline";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";




export default function RouteComponent() {
  const t = useTranslations();
  const [printing, setPrinting] = useState(false);

  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const intervalId2 = useRef<NodeJS.Timeout | null>(null);

  const education: (TimeLineElementProps & { key:string}) [] = [
    {
      key: "tuberlin",
      TimeLineTitle: t("Cv.education.items.tuberlin.name"),
      TimeLineBadges: [
        t("Cv.about.address.berlin"),
        t("Cv.education.badges.studies"),
        t("Cv.education.badges.batchlor_of_science"),
        t("Cv.education.badges.it"),
        t("Cv.education.badges.semester", { semester: 6 }),
      ],
      TimeLineImage: '/pictures/lebenslauf/schools/LogoDerTUBerlin2020.svg',
      TimeLineImageAlt: t("Cv.education.items.tuberlin.imgAlt"),
      TimeLineImageFallback: "TUBerlin",
      startdate: "10.2025",
      enddate: "09.2028",
      children: t("Cv.education.items.tuberlin.description"),
    },
    {
      key: "looking",
      TimeLineTitle: t("Cv.education.items.lookingForApprenticeship.name"),
      TimeLineBadges: [],
      TimeLineImage: "",
      TimeLineImageAlt: t("Cv.education.items.lookingForApprenticeship.imgAlt"),
      TimeLineImageFallback: "/",
      startdate: "10.2025",
      enddate: "09.2028",
      children: t("Cv.education.items.lookingForApprenticeship.name"),
    },
    {
      key: "oszimt",
      TimeLineTitle: t("Cv.education.items.oszimt.name"),
      TimeLineBadges: [
        t("Cv.about.address.berlin"),
        t("Cv.education.badges.ausbildung"),
        t("Cv.education.badges.fachabitur"),
        t("Cv.education.badges.it"),
        t("Cv.education.badges.years", { years: 3 }),
      ],
      TimeLineImage: '/pictures/lebenslauf/schools/oszimt_logo.png',
      TimeLineImageAlt: t("Cv.education.items.oszimt.imgAlt"),
      TimeLineImageFallback: "OSZimt",
      startdate: "08.2021",
      enddate: "07.2024",
      children: t("Cv.education.items.oszimt.description"),
    },
    {
      key: "Cvl",
      TimeLineTitle: t("Cv.education.items.cvl.name"),
      TimeLineBadges: [t("Cv.about.address.berlin"), t("Cv.education.badges.msaMitOG")],
      TimeLineImage: "/pictures/lebenslauf/schools/cvl_logo.png",
      TimeLineImageAlt: t("Cv.education.items.cvl.imgAlt"),
      TimeLineImageFallback: "CvL",
      startdate: "08.2010",
      enddate: "07.2021",
      children: t("Cv.education.items.cvl.description"),
    },
  ].sort((a, b) => {
    const parse = (s?: string) => {
      if (!s) return new Date(0);
      const parts = s.split(".").map((p) => Number.parseInt(p, 10));
      if (parts.length === 3) {
        const [day, month, year] = parts;
        return new Date(year, month - 1, day);
      }
      if (parts.length === 2) {
        const [month, year] = parts;
        return new Date(year, month - 1, 1);
      }
      return new Date(0);
    };
    const da = parse(a.enddate ?? a.startdate);
    const db = parse(b.enddate ?? b.startdate);
    return db.getTime() - da.getTime();
  });

  const experience: (TimeLineElementProps & { key:string}) [] = [
    {
      key: "kfw",
      TimeLineTitle: "KfW Bankengruppe",
      TimeLineBadges: ["Berlin", "IT", "Betriebspraktikum", "9 Wochen"],
      TimeLineImage: '/pictures/lebenslauf/firms/kfw_logo.svg',
      TimeLineImageAlt: "KfW Logo",
      TimeLineImageFallback: "KfW",
      startdate: "27.11.2023",
      enddate: "02.02.2024",
      children: (
        <>
          <p>
            Betribspraktikum als IT-Assistent im Rahmen der Ausbildung am OSZ
            IMT
          </p>
          <br />
          <p>
            Automatisierungen mit Ansible + Dokumentation für Ansible in
            Confluence der KfW
          </p>
        </>
      ),
    },
    {
      key: "adk",
      TimeLineTitle: "Akademie der Künste (ADK)",
      TimeLineBadges: ["Berlin", "Musik", "Schülerpraktikum", "3 Wochen"],
      TimeLineImage: "/pictures/lebenslauf/firms/adkberlin_logo.jpg",
      TimeLineImageAlt: "ADK Logo",
      TimeLineImageFallback: "ADK",
      startdate: "02.2020",
      enddate: "02.2020",
      children: <p>Syntezizerentwiklung</p>,
    },
    {
      key: "tosa",
      TimeLineTitle: "Tosa Security & Service GmbH & Co KG",
      TimeLineBadges: ["Trebin", "Security", "Service", "Schülerpraktikum", "3 Tage"],
      TimeLineImage: "/pictures/lebenslauf/firms/ToSa_logo.jpg",
      TimeLineImageAlt: "Tosa Security & Service GmbH & Co KG Logo",
      TimeLineImageFallback: "TSS",
      startdate: "01.2019",
      enddate: "01.2019",
      children: <p>Bürotätigkeiten</p>,
    },
    {
      key: "pfennig",
      TimeLineTitle: "Pfennigpfeiffer",
      TimeLineBadges: ["Berlin", "Einzelhandel", "Schülerpraktikum", "1 Tag"],
      TimeLineImage: "/pictures/lebenslauf/firms/Pfennigpfeiffer_logo.jpg",
      TimeLineImageAlt: "Pfennigpfeiffer Logo",
      TimeLineImageFallback: "P",
      startdate: "06.2018",
      enddate: "06.2018",
      children: <p>Regale einräumen</p>,
    },
  ].sort((a, b) => {
      const parse = (s?: string) => {
        if (!s) return new Date(0);
        const parts = s.split(".").map((p) => Number.parseInt(p, 10));
        if (parts.length === 3) {
          const [day, month, year] = parts;
          return new Date(year, month - 1, day);
        }
        if (parts.length === 2) {
          const [month, year] = parts;
          return new Date(year, month - 1, 1);
        }
        return new Date(0);
      };
      const da = parse(a.enddate ?? a.startdate);
      const db = parse(b.enddate ?? b.startdate);
      return db.getTime() - da.getTime();
    });


  const skills: SkillCardProps[] = [
    { SkillTitle: "Java", SkillBadges: ["Development", "3 Jahre"], SkillImage: "/pictures/lebenslauf/skills/java.svg", SkillImageAlt: "Java Logo", SkillImageFallback: "JDK", Skilllevel: 80 },
    { SkillTitle: "Swift (SwiftUI)", SkillBadges: ["Development", "Frontend", "Apple", "2 Jahre"], SkillImage: "/pictures/lebenslauf/skills/swift.svg", SkillImageAlt: "Swift Logo", SkillImageFallback: "SUI", Skilllevel: 60 },
    { SkillTitle: "Cisco IOS", SkillBadges: ["Konfiguration", "1 Jahre"], SkillImage: "/pictures/lebenslauf/skills/cisco.svg", SkillImageAlt: "Cisco Logo", SkillImageFallback: "IOS", Skilllevel: 50 },
    { SkillTitle: "Microsoft 365", SkillBadges: ["Office", "365", "Microsoft", "5 Jahre"], SkillImage: "/pictures/lebenslauf/skills/ms365.svg", SkillImageAlt: "Microsoft 365 Logo", SkillImageFallback: "MS365", Skilllevel: 70 },
    { SkillTitle: "Visual Studio Code", SkillBadges: ["Development", "Microsoft", "4 Jahre"], SkillImage: "/pictures/lebenslauf/skills/vscode.svg", SkillImageAlt: "Visual Studio Code Logo", SkillImageFallback: "VScode", Skilllevel: 60 },
    { SkillTitle: "Apple Xcode 14+", SkillBadges: ["Development", "Apple", "2 Jahre"], SkillImage: "/pictures/lebenslauf/skills/xcode.svg", SkillImageAlt: "Apple Xcode Logo", SkillImageFallback: "XCODE", Skilllevel: 70 },
    { SkillTitle: "Apple macOS", SkillBadges: ["Betriebsystem", "Apple", "2 Jahre"], SkillImage: printing ? "/pictures/lebenslauf/skills/macos.svg" : "/pictures/lebenslauf/skills/macos-dark.svg", SkillImageAlt: "macOS Logo", SkillImageFallback: "macOS", Skilllevel: 90 },
    { SkillTitle: "Apple iOS", SkillBadges: ["Betriebsystem", "Apple", "3 Jahre"], SkillImage: printing ? "/pictures/lebenslauf/skills/ios.svg" : "/pictures/lebenslauf/skills/ios-dark.svg", SkillImageAlt: "iOS Logo", SkillImageFallback: "iOS", Skilllevel: 80 },
    { SkillTitle: "Apple iPadOS", SkillBadges: ["Betriebsystem", "Apple", "3 Jahre"], SkillImage: printing ? "/pictures/lebenslauf/skills/ios.svg" : "/pictures/lebenslauf/skills/ios-dark.svg", SkillImageAlt: "iOS Logo", SkillImageFallback: "iOS", Skilllevel: 80 },
    { SkillTitle: "Apple vissionOS", SkillBadges: ["Betriebsystem", "Apple", "1 Jahre"], SkillImage: printing ? "/pictures/lebenslauf/skills/ios.svg" : "/pictures/lebenslauf/skills/ios-dark.svg", SkillImageAlt: "iOS Logo", SkillImageFallback: "iOS", Skilllevel: 80 },
    { SkillTitle: "Linux", SkillBadges: ["Betriebsystem", "5 Jahre"], SkillImage: "/pictures/lebenslauf/skills/linux.svg", SkillImageAlt: "Linux Logo", SkillImageFallback: "L", Skilllevel: 60 },
    { SkillTitle: "Windows", SkillBadges: ["Betriebsystem", "Microsoft", "3 Jahre"], SkillImage: "/pictures/lebenslauf/skills/windows.svg", SkillImageAlt: "Windows Logo", SkillImageFallback: "WIN", Skilllevel: 60 },
    { SkillTitle: "Microsoft Teams", SkillBadges: ["Office", "Microsoft", "4 Jahre"], SkillImage: "/pictures/lebenslauf/skills/teams.svg", SkillImageAlt: "Microsoft Teams Logo", SkillImageFallback: "Teams", Skilllevel: 60 },
    { SkillTitle: "Eclipse", SkillBadges: ["Development", "2 Jahre"], SkillImage: "/pictures/lebenslauf/skills/eclipse.svg", SkillImageAlt: "Eclipse Logo", SkillImageFallback: "JDK", Skilllevel: 60 },
    { SkillTitle: "MySQL", SkillBadges: ["Development", "1 Jahre"], SkillImage: "/pictures/lebenslauf/skills/mysql.svg", SkillImageAlt: "MySQL Logo", SkillImageFallback: "SQL", Skilllevel: 80 },
    { SkillTitle: "MySQL Comunity Server", SkillBadges: ["Development", "1 Jahre"], SkillImage: "/pictures/lebenslauf/skills/mysql.svg", SkillImageAlt: "MySQL Logo", SkillImageFallback: "SQL", Skilllevel: 60 },
    { SkillTitle: "MySQLWorckbench", SkillBadges: ["Development", "1 Jahre"], SkillImage: "/pictures/lebenslauf/skills/mysql.svg", SkillImageAlt: "MySQL Logo", SkillImageFallback: "SQL", Skilllevel: 60 },
    { SkillTitle: "Ansible", SkillBadges: ["Automation", "2 Monate"], SkillImage: printing ?  "/pictures/lebenslauf/skills/ansible.svg" : "/pictures/lebenslauf/skills/ansible-dark.svg", SkillImageAlt: "Ansible Logo", SkillImageFallback: "A", Skilllevel: 60 },
    { SkillTitle: "Rust", SkillBadges: ["Development", "2 Monate"], SkillImage: printing ?  "/pictures/lebenslauf/skills/rust.svg": "/pictures/lebenslauf/skills/rust-dark.svg", SkillImageAlt: "Rust Logo", SkillImageFallback: "R", Skilllevel: 30 },
    { SkillTitle: "C", SkillBadges: ["C98", "C11", "Development", "1 Jahr"], SkillImage: "/pictures/lebenslauf/skills/c.svg", SkillImageAlt: "C Logo", SkillImageFallback: "C", Skilllevel: 30 },
    { SkillTitle: "C++", SkillBadges: ["C++23", "Development", "1 Monat"], SkillImage: "/pictures/lebenslauf/skills/cpp.svg", SkillImageAlt: "C++ Logo", SkillImageFallback: "C++", Skilllevel: 30 },
    { SkillTitle: "Emacs", SkillBadges: ["Development", "Text Editor", "Multifunctional", "GNU", "1 Monat"], SkillImage: "/pictures/lebenslauf/skills/emacs.svg", SkillImageAlt: "GNU Emacs Logo", SkillImageFallback: "Emacs", Skilllevel: 30 },
  ].sort((skillA: SkillCardProps, skillB: SkillCardProps) =>
    skillA.SkillTitle.localeCompare(skillB.SkillTitle)
  );

  useEffect(() => {
    const toastValues_printig_settings: {
      title: string;
      description: string;
    } = {
      title: t("Cv.recommendation.printingSettings.title"),
      description: t("Cv.recommendation.printingSettings.description"),
    };
    // Erste Empfehlung direkt anzeigen
    const { title, description } = toastValues_printig_settings;
    toast(title, { description });

    // Intervall für weitere Empfehlungen
    intervalId.current = setInterval(
      () => {
        const { title, description } = toastValues_printig_settings;
        toast(title, { description });
      },
      60_000, // 1 minute
    );

    // Clean-up beim Unmount
    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [t]);
  useEffect(() => {
    const toastValues_printing_notice: {
      title: string;
      description: string;
    } = {
      title: t("Cv.recommendation.printingNotice.title"),
      description: t("Cv.recommendation.printingNotice.description"),
    };
    // Erste Empfehlung direkt anzeigen
    const { title, description } = toastValues_printing_notice;
    toast(title, { description });

    // Intervall für weitere Empfehlungen
    // use a separate ref for this second interval
    intervalId2.current = setInterval(
      () => {
        const { title, description } = toastValues_printing_notice;
        toast(title, { description });
      },
      120_000, // 2 minutes
    );

    // Clean-up beim Unmount
    return () => {
      if (intervalId2.current) clearInterval(intervalId2.current);
    };
  }, [t]);

  const print = async () => {
    // /cv?printing=true

    setPrinting(true);
    // Warten, bis die Seite aktualisiert wurde
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await window.print();
    // Nach dem Drucken zurück zur ursprünglichen Ansicht
    setPrinting(false);
  };

  return (
    <div className="">
      <center>
        {t("Cv.about.title")}
        <br />
        <center>
          <a
            href="mailto:aps.fabian@mcpeapsunterstrichhd.dev"
            target="_blank"
            rel="noreferrer"
          >
            <p>{t("Cv.about.email")}: aps.fabian@mcpeapsunterstrichhd.dev</p>
          </a>
        </center>
        <center>
          <a href="tel:+4917645172171" target="_blank" rel="noreferrer">
            <p>{t("Cv.about.telnum")}: +4917645172171</p>
          </a>
        </center>
        <br />
        <center>
          <a
            href="https://maps.apple.com/?address=Ludwig-Renn-Stra%C3%9Fe%2033,%2012679%20Berlin,%20Deutschland&ll=52.551673,13.558337"
            target="_blank"
            rel="noreferrer"
          >
            <div className="py-1 text-lg">
              {t("Aboutme.name")}
              <br />
              Ludwig-Renn-Straße 33
              <br />
              12679 {t("Cv.about.address.berlin")}, {t("Cv.about.address.germany")}
            </div>
          </a>
        </center>
        <br />
        <center>{t("Cv.about.birthday")}: 06.06.2003</center>
      </center>

      <center>
        <h2 className="gap-8 font-bold text-3xl pt-8 pb-8">{t("Cv.education.title")}</h2>
      </center>



      <Timeline position="right" className="show-timeline-big flex flex-col justify-center">
        {education.map((e) => (
          <TimeLineElementBig
            key={e.key}
            TimeLineTitle={e.TimeLineTitle}
            TimeLineBadges={e.TimeLineBadges}
            TimeLineImage={e.TimeLineImage}
            TimeLineImageAlt={e.TimeLineImageAlt}
            TimeLineImageFallback={e.TimeLineImageFallback}
            startdate={e.startdate}
            enddate={e.enddate}
          >
            <p>{e.children}</p>
          </TimeLineElementBig>
        ))}
      </Timeline>

      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
        className="show-timeline-small flex flex-col justify-center"
      >
        {education.map((e) => (
          <TimeLineElementSmall
            key={e.key}
            TimeLineTitle={e.TimeLineTitle}
            TimeLineBadges={e.TimeLineBadges}
            TimeLineImage={e.TimeLineImage}
            TimeLineImageAlt={e.TimeLineImageAlt}
            TimeLineImageFallback={e.TimeLineImageFallback}
            startdate={e.startdate}
            enddate={e.enddate}
          >
            <p>{e.children}</p>
          </TimeLineElementSmall>
        ))}
      </Timeline>

      <center>
        <h2 className="gap-8 font-bold text-3xl pt-8 pb-8">Erfahrung</h2>
      </center>

      {/* Experience: data-driven rendering */}
      {/* eslint-disable-next-line react-hooks/rules-of-hooks */}


      <Timeline position="right" className="show-timeline-big flex flex-col justify-center">
        {experience.map((ex) => (
          <TimeLineElementBig
            key={ex.key}
            TimeLineTitle={ex.TimeLineTitle}
            TimeLineBadges={ex.TimeLineBadges}
            TimeLineImage={ex.TimeLineImage}
            TimeLineImageAlt={ex.TimeLineImageAlt}
            TimeLineImageFallback={ex.TimeLineImageFallback}
            startdate={ex.startdate}
            enddate={ex.enddate}
          >
            <p>{ex.children}</p>
          </TimeLineElementBig>
        ))}
      </Timeline>

      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
        className="show-timeline-small flex flex-col justify-center"
      >
        {experience.map((ex) => (
          <TimeLineElementSmall
            key={ex.key}
            TimeLineTitle={ex.TimeLineTitle}
            TimeLineBadges={ex.TimeLineBadges}
            TimeLineImage={ex.TimeLineImage}
            TimeLineImageAlt={ex.TimeLineImageAlt}
            TimeLineImageFallback={ex.TimeLineImageFallback}
            startdate={ex.startdate}
            enddate={ex.enddate}
          >
            <p>{ex.children}</p>
          </TimeLineElementSmall>
        ))}
      </Timeline>

      <center>
        <h2 className="gap-8 font-bold text-3xl pt-8 pb-8">Fähigkeiten</h2>
      </center>
      <div className="w-[calc(100vw-64px)] gap-8 m-8">
        <MasonryGrid variant={Variants.skills}>
          {skills.map((s) => (
                <SkillCard
                  key={s.SkillTitle}
                  SkillTitle={s.SkillTitle}
                  SkillBadges={s.SkillBadges}
                  SkillImage={s.SkillImage}
                  SkillImageAlt={s.SkillImageAlt}
                  SkillImageFallback={s.SkillImageFallback}
                  Skilllevel={s.Skilllevel}
                />
              ))}
        </MasonryGrid>
      </div>
      <Button
        onClick={print}
        className="fixed bottom-2 right-2 z-50 print:hidden"
        type="button"
      >
        <div className="flex flex-row gap-2 justify-center items-center">
          <div className="nf nf-oct-download" />
          <p>PDF</p>
        </div>
      </Button>
    </div>
  );
}
