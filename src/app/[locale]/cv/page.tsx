"use client"
import SkillCard, { type SkillCardProps } from "@/components/skill-card";
import {
  TimeLineElementBig,
  TimeLineElementSmall,
  type TimeLineElementProps
} from "@/components/timeline-element";
import MasonryGrid, { Variants } from "@/components/MasonryGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Timeline from "@mui/lab/Timeline";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import {
  GraduationCap,
  Briefcase,
  Wrench,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar
} from "lucide-react";

export default function CVPage() {
  const t = useTranslations();
  const [printing, setPrinting] = useState(false);
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const intervalId2 = useRef<NodeJS.Timeout | null>(null);

  // Education data
  const education: (TimeLineElementProps & { key: string })[] = [
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

  // Experience data
  const experience: (TimeLineElementProps & { key: string })[] = [
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
          <p>Betribspraktikum als IT-Assistent im Rahmen der Ausbildung am OSZ IMT</p>
          <br />
          <p>Automatisierungen mit Ansible + Dokumentation für Ansible in Confluence der KfW</p>
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

  // Skills data
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
    { SkillTitle: "Ansible", SkillBadges: ["Automation", "2 Monate"], SkillImage: printing ? "/pictures/lebenslauf/skills/ansible.svg" : "/pictures/lebenslauf/skills/ansible-dark.svg", SkillImageAlt: "Ansible Logo", SkillImageFallback: "A", Skilllevel: 60 },
    { SkillTitle: "Rust", SkillBadges: ["Development", "2 Monate"], SkillImage: printing ? "/pictures/lebenslauf/skills/rust.svg" : "/pictures/lebenslauf/skills/rust-dark.svg", SkillImageAlt: "Rust Logo", SkillImageFallback: "R", Skilllevel: 30 },
    { SkillTitle: "C", SkillBadges: ["C98", "C11", "Development", "1 Jahr"], SkillImage: "/pictures/lebenslauf/skills/c.svg", SkillImageAlt: "C Logo", SkillImageFallback: "C", Skilllevel: 30 },
    { SkillTitle: "C++", SkillBadges: ["C++23", "Development", "1 Monat"], SkillImage: "/pictures/lebenslauf/skills/cpp.svg", SkillImageAlt: "C++ Logo", SkillImageFallback: "C++", Skilllevel: 30 },
    { SkillTitle: "Emacs", SkillBadges: ["Development", "Text Editor", "Multifunctional", "GNU", "1 Monat"], SkillImage: "/pictures/lebenslauf/skills/emacs.svg", SkillImageAlt: "GNU Emacs Logo", SkillImageFallback: "Emacs", Skilllevel: 30 },
  ].sort((skillA: SkillCardProps, skillB: SkillCardProps) =>
    skillA.SkillTitle.localeCompare(skillB.SkillTitle)
  );

  // Toast notifications for printing tips
  useEffect(() => {
    const toastValues = {
      title: t("Cv.recommendation.printingSettings.title"),
      description: t("Cv.recommendation.printingSettings.description"),
    };
    toast(toastValues.title, { description: toastValues.description });

    intervalId.current = setInterval(() => {
      toast(toastValues.title, { description: toastValues.description });
    }, 60_000);

    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [t]);

  useEffect(() => {
    const toastValues = {
      title: t("Cv.recommendation.printingNotice.title"),
      description: t("Cv.recommendation.printingNotice.description"),
    };
    toast(toastValues.title, { description: toastValues.description });

    intervalId2.current = setInterval(() => {
      toast(toastValues.title, { description: toastValues.description });
    }, 120_000);

    return () => {
      if (intervalId2.current) clearInterval(intervalId2.current);
    };
  }, [t]);

  const handlePrint = async () => {
    setPrinting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await window.print();
    setPrinting(false);
  };

  return (
    <div className="flex flex-col gap-6 px-4 py-6 max-w-9xl mx-auto">
      {/* Header / Personal Info */}
      <Card className="bg-card/50 backdrop-blur-sm print:bg-white print:shadow-none">
        <CardHeader className="text-center pb-2">
          <h1 className="text-3xl md:text-4xl font-bold">{t("Aboutme.name")}</h1>
          <p className="text-lg text-muted-foreground">{t("Cv.about.title")}</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-1 gap-4 text-sm">
            {/* Contact Info */}
            <div className="flex flex-col gap-2">
              <a
                href="mailto:aps.fabian@mcpeapsunterstrichhd.dev"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                aps.fabian@mcpeapsunterstrichhd.dev
              </a>
              <a
                href="tel:+4917645172171"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +49 176 45172171
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {t("Cv.about.birthday")}: 06.06.2003
              </div>
            </div>
            {/* Address */}
            <a
              href="https://maps.apple.com/?address=Ludwig-Renn-Stra%C3%9Fe%2033,%2012679%20Berlin,%20Deutschland"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                Ludwig-Renn-Straße 33<br />
                12679 {t("Cv.about.address.berlin")}, {t("Cv.about.address.germany")}
              </div>
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2 mb-4">
          <GraduationCap className="w-6 h-6 text-primary print:text-black" />
          {t("Cv.education.title")}
        </h2>

        {/* Large Timeline */}
        <Timeline position="right" className="show-timeline-big">
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

        {/* Small Timeline */}
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
          className="show-timeline-small"
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
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2 mb-4">
          <Briefcase className="w-6 h-6 text-primary print:text-black" />
          {t("Cv.experience.title")}
        </h2>

        {/* Large Timeline */}
        <Timeline position="right" className="show-timeline-big">
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
              <div>{ex.children}</div>
            </TimeLineElementBig>
          ))}
        </Timeline>

        {/* Small Timeline */}
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
          className="show-timeline-small"
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
              <div>{ex.children}</div>
            </TimeLineElementSmall>
          ))}
        </Timeline>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2 mb-4">
          <Wrench className="w-6 h-6 text-primary print:text-black" />
          {t("Cv.skills.title")}
        </h2>
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
      </section>

      {/* Print Button */}
      <Button
        onClick={handlePrint}
        className="fixed bottom-4 right-4 z-50 print:hidden gap-2 shadow-lg"
        size="lg"
      >
        <Download className="w-4 h-4" />
        PDF
      </Button>
    </div>
  );
}
