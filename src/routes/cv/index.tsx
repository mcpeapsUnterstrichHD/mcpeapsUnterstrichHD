import SkillCard from "@/components/skill-card";
import {
  TimeLineElementBig,
  TimeLineElementSmall,
} from "@/components/timeline-element";
import { Button } from "@/components/ui/button.tsx";
import Timeline from "@mui/lab/Timeline";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";


// firms
import kfwLogo from "@/assets/pictures/lebenslauf/firms/kfw_logo.svg";
import pfennigfeifferLogo from "@/assets/pictures/lebenslauf/firms/Pfennigpfeiffer_logo.jpg";
import toSaLogo from "@/assets/pictures/lebenslauf/firms/ToSa_logo.jpg";
import adkLogo from "@/assets/pictures/lebenslauf/firms/adkberlin_logo.jpg";
// logos
// schools
import cvlLogo from "@/assets/pictures/lebenslauf/schools/cvl_logo.png";
import oszimtLogo from "@/assets/pictures/lebenslauf/schools/oszimt_logo.png";
// skills
import ansibleLogoDark from "@/assets/pictures/lebenslauf/skills/ansible-dark.svg";
import ansibleLogo from "@/assets/pictures/lebenslauf/skills/ansible.svg";
import ciscoLogo from "@/assets/pictures/lebenslauf/skills/cisco.svg";
import eclipseLogo from "@/assets/pictures/lebenslauf/skills/eclipse.svg";
import javaLogo from "@/assets/pictures/lebenslauf/skills/java.svg";
import linuxLogo from "@/assets/pictures/lebenslauf/skills/linux.svg";
import macosLogo from "@/assets/pictures/lebenslauf/skills/macos.svg";
import macosLogoDark from "@/assets/pictures/lebenslauf/skills/macos-dark.svg";
import iosLogo from "@/assets/pictures/lebenslauf/skills/ios.svg";
import iosLogoDark from "@/assets/pictures/lebenslauf/skills/ios-dark.svg";
import ms365Logo from "@/assets/pictures/lebenslauf/skills/ms365.svg";
import mysqlLogo from "@/assets/pictures/lebenslauf/skills/mysql.svg";
import swiftLogo from "@/assets/pictures/lebenslauf/skills/swift.svg";
import teamsLogo from "@/assets/pictures/lebenslauf/skills/teams.svg";
import vscodeLogo from "@/assets/pictures/lebenslauf/skills/vscode.svg";
import windowsLogo from "@/assets/pictures/lebenslauf/skills/windows.svg";
import xcodeLogo from "@/assets/pictures/lebenslauf/skills/xcode.svg";
import rustLogo from "@/assets/pictures/lebenslauf/skills/rust-light.svg";
import rustLogoDark from "@/assets/pictures/lebenslauf/skills/rust-dark.svg"

export const Route = createFileRoute("/cv/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();
  const [printing, setPrinting] = useState(false);

  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const intervalId2 = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const toastValues_printig_settings: {
      title: string;
      description: string;
    } = {
      title: t("cv.recommendation.printingSettings.title"),
      description: t("cv.recommendation.printingSettings.description"),
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
      1 * 60 * 1000,
    ); // 1 Minute

    // Clean-up beim Unmount
    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, []);
  useEffect(() => {
    const toastValues_printing_notice: {
      title: string;
      description: string;
    } = {
      title: t("cv.recommendation.printingNotice.title"),
      description: t("cv.recommendation.printingNotice.description"),
    };
    // Erste Empfehlung direkt anzeigen
    const { title, description } = toastValues_printing_notice;
    toast(title, { description });

    // Intervall für weitere Empfehlungen
    intervalId.current = setInterval(
      () => {
        const { title, description } = toastValues_printing_notice;
        toast(title, { description });
      },
      2 * 60 * 1000,
    ); // 2 Minute

    // Clean-up beim Unmount
    return () => {
      if (intervalId2.current) clearInterval(intervalId2.current);
    };
  }, []);

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
        <h1 className="gap-8 font-bold text-4xl">{t("aboutme.name")}</h1>
        {t("cv.about.title")}
        <br />
        <center>
          <a
            href="mailto:aps.fabian@mcpeapsunterstrichhd.dev"
            target="_blank"
            rel="noreferrer"
          >
            <p>{t("cv.about.email")}: aps.fabian@mcpeapsunterstrichhd.dev</p>
          </a>
        </center>
        <center>
          <a href="tel:+4917645172171" target="_blank" rel="noreferrer">
            <p>{t("cv.about.telnum")}: +4917645172171</p>
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
              {t("aboutme.name")}
              <br />
              Ludwig-Renn-Straße 33
              <br />
              12679 {t("cv.about.address.berlin")}, {t("cv.about.address.germany")}
            </div>
          </a>
        </center>
        <br />
        <center>{t("cv.about.birthday")}: 06.06.2003</center>
      </center>

      <center>
        <h2 className="gap-8 font-bold text-3xl pt-8 pb-8">{t("cv.education.title")}</h2>
      </center>

      <Timeline
        position="right"
        className="show-timeline-big flex flex-col justify-center"
      >
        <TimeLineElementBig
          TimeLineTitle={t("cv.education.items.lookingForApprenticeship.name")}
          TimeLineBadges={[]}
          TimeLineImage=""
          TimeLineImageAlt={t("cv.education.items.lookingForApprenticeship.imgAlt")}
          TimeLineImageFallback="/"
          startdate="07.2024"
          enddate="10.2025"
        >
          <p>{t("cv.education.items.lookingForApprenticeship.name")}</p>
        </TimeLineElementBig>
        <TimeLineElementBig
          TimeLineTitle={t("cv.education.items.oszimt.name")}
          TimeLineBadges={[t("cv.about.address.berlin"),t("cv.education.badges.ausbildung"),t("cv.education.badges.fachabitur"),t("cv.education.badges.it"), t("cv.education.badges.years", {years: 3})]}
          TimeLineImage={oszimtLogo}
          TimeLineImageAlt={t("cv.education.items.oszimt.imgAlt")}
          TimeLineImageFallback="OSZimt"
          startdate="08.2021"
          enddate="07.2024"
        >
          <p>
            {t("cv.education.items.oszimt.description")}
          </p>
        </TimeLineElementBig>
        <TimeLineElementBig
          TimeLineTitle={t("cv.education.items.cvl.name")}
          TimeLineBadges={[t("cv.about.address.berlin"),t("cv.education.badges.msaMitOG")]}
          TimeLineImage={cvlLogo}
          TimeLineImageAlt={t("cv.education.items.cvl.imgAlt")}
          TimeLineImageFallback="CvL"
          startdate="08.2010"
          enddate="07.2021"
        >
          <p>{t("cv.education.items.cvl.description")}</p>
        </TimeLineElementBig>
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
        <TimeLineElementSmall
          TimeLineTitle={t("cv.education.items.lookingForApprenticeship.name")}
          TimeLineBadges={[]}
          TimeLineImage=""
          TimeLineImageAlt={t("cv.education.items.lookingForApprenticeship.imgAlt")}
          TimeLineImageFallback="/"
          startdate="07.2024"
          enddate="10.2025"
        >
          <p>{t("cv.education.items.lookingForApprenticeship.name")}</p>
        </TimeLineElementSmall>
        <TimeLineElementSmall
          TimeLineTitle={t("cv.education.items.oszimt.name")}
          TimeLineBadges={[t("cv.education.about.address.berlin"),t("cv.education.badges.ausbildung"),t("cv.education.badges.fachabitur"),t("cv.education.badges.it"), t("cv.education.badges.years", {years: 3})]}
          TimeLineImage={oszimtLogo}
          TimeLineImageAlt={t("cv.education.items.oszimt.imgAlt")}
          TimeLineImageFallback="OSZimt"
          startdate="08.2021"
          enddate="07.2024"
        >
          <p>
            {t("cv.education.items.oszimt.description")}
          </p>
        </TimeLineElementSmall>
        <TimeLineElementSmall
          TimeLineTitle={t("cv.education.items.cvl.name")}
          TimeLineBadges={[t("cv.education.about.address.berlin"),t("cv.education.badges.msaMitOG")]}
          TimeLineImage={cvlLogo}
          TimeLineImageAlt={t("cv.education.items.cvl.imgAlt")}
          TimeLineImageFallback="CvL"
          startdate="08.2010"
          enddate="07.2021"
        >
          <p>{t("cv.education.items.cvl.description")}</p>
        </TimeLineElementSmall>
      </Timeline>

      <center>
        <h2 className="gap-8 font-bold text-3xl pt-8 pb-8">Erfahrung</h2>
      </center>

      <Timeline
        position="right"
        className="show-timeline-big flex flex-col justify-center"
      >
        <TimeLineElementBig
          TimeLineTitle="KfW Bankengruppe"
          TimeLineBadges={["Berlin", "IT", "Betriebspraktikum", "9 Wochen"]}
          TimeLineImage={kfwLogo}
          TimeLineImageAlt="KfW Logo"
          TimeLineImageFallback="KfW"
          startdate="27.11.2023"
          enddate="02.02.2024"
        >
          <p>
            Betribspraktikum als IT-Assistent im Rahmen der Ausbildung am OSZ
            IMT
          </p>
          <br />
          <p>
            Automatisierungen mit Ansible + Dokumentation für Ansible in
            Confluence der KfW
          </p>
        </TimeLineElementBig>
        <TimeLineElementBig
          TimeLineTitle="Akademie der Künste (ADK)"
          TimeLineBadges={["Berlin", "Musik", "Schülerpraktikum", "3 Wochen"]}
          TimeLineImage={adkLogo}
          TimeLineImageAlt="ADK Logo"
          TimeLineImageFallback="ADK"
          startdate="02.2020"
          enddate="02.2020"
        >
          <p>Syntezizerentwiklung</p>
        </TimeLineElementBig>
        <TimeLineElementBig
          TimeLineTitle="Tosa Security & Service GmbH & Co KG"
          TimeLineBadges={[
            "Trebin",
            "Security",
            "Service",
            "Schülerpraktikum",
            "3 Tage",
          ]}
          TimeLineImage={toSaLogo}
          TimeLineImageAlt="Tosa Security & Service GmbH & Co KG Logo"
          TimeLineImageFallback="TSS"
          startdate="01.2019"
          enddate="01.2019"
        >
          <p>Bürotätigkeiten</p>
        </TimeLineElementBig>
        <TimeLineElementBig
          TimeLineTitle="Pfennigpfeiffer"
          TimeLineBadges={[
            "Berlin",
            "Einzelhandel",
            "Schülerpraktikum",
            "1 Tag",
          ]}
          TimeLineImage={pfennigfeifferLogo}
          TimeLineImageAlt="Pfennigpfeiffer Logo"
          TimeLineImageFallback="P"
          startdate="06.2018"
          enddate="06.2018"
        >
          <p>Regale einräumen</p>
        </TimeLineElementBig>
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
        <TimeLineElementSmall
          TimeLineTitle="KfW Bankengruppe"
          TimeLineBadges={["Berlin", "IT", "Betriebspraktikum", "9 Wochen"]}
          TimeLineImage={kfwLogo}
          TimeLineImageAlt="KfW Logo"
          TimeLineImageFallback="KfW"
          startdate="27.11.2023"
          enddate="02.02.2024"
        >
          <p>
            Betribspraktikum als IT-Assistent im Rahmen der Ausbildung am OSZ
            IMT
          </p>
          <br />
          <p>
            Automatisierungen mit Ansible + Dokumentation für Ansible in
            Confluence der KfW
          </p>
        </TimeLineElementSmall>
        <TimeLineElementSmall
          TimeLineTitle="Akademie der Künste (ADK)"
          TimeLineBadges={["Berlin", "Musik", "Schülerpraktikum", "3 Wochen"]}
          TimeLineImage={adkLogo}
          TimeLineImageAlt="ADK Logo"
          TimeLineImageFallback="ADK"
          startdate="02.2020"
          enddate="02.2020"
        >
          <p>Syntezizerentwiklung</p>
        </TimeLineElementSmall>
        <TimeLineElementSmall
          TimeLineTitle="Tosa Security & Service GmbH & Co KG"
          TimeLineBadges={[
            "Trebin",
            "Security",
            "Service",
            "Schülerpraktikum",
            "3 Tage",
          ]}
          TimeLineImage={toSaLogo}
          TimeLineImageAlt="Tosa Security & Service GmbH & Co KG Logo"
          TimeLineImageFallback="TSS"
          startdate="01.2019"
          enddate="01.2019"
        >
          <p>Bürotätigkeiten</p>
        </TimeLineElementSmall>
        <TimeLineElementSmall
          TimeLineTitle="Pfennigpfeiffer"
          TimeLineBadges={[
            "Berlin",
            "Einzelhandel",
            "Schülerpraktikum",
            "1 Tag",
          ]}
          TimeLineImage={pfennigfeifferLogo}
          TimeLineImageAlt="Pfennigpfeiffer Logo"
          TimeLineImageFallback="P"
          startdate="06.2018"
          enddate="06.2018"
        >
          <p>Regale einräumen</p>
        </TimeLineElementSmall>
      </Timeline>

      <center>
        <h2 className="gap-8 font-bold text-3xl pt-8 pb-8">Fähigkeiten</h2>
      </center>

      <div className="my-Skill-grid w-[calc(100vw-64px)] gap-8 m-8">
        <SkillCard
          SkillTitle="Java"
          SkillBadges={["Development", "3 Jahre"]}
          SkillImage={javaLogo}
          SkillImageAlt="Java Logo"
          SkillImageFallback="JDK"
          Skilllevel={80}
        />
        <SkillCard
          SkillTitle="Swift (SwiftUI)"
          SkillBadges={["Development", "Frontend", "Apple", "2 Jahre"]}
          SkillImage={swiftLogo}
          SkillImageAlt="Swift Logo"
          SkillImageFallback="SUI"
          Skilllevel={60}
        />
        <SkillCard
          SkillTitle="Cisco IOS"
          SkillBadges={["Konfiguration", "1 Jahre"]}
          SkillImage={ciscoLogo}
          SkillImageAlt="Cisco Logo"
          SkillImageFallback="IOS"
          Skilllevel={50}
        />
        <SkillCard
          SkillTitle="Microsoft 365"
          SkillBadges={["Office", "365", "Microsoft", "5 Jahre"]}
          SkillImage={ms365Logo}
          SkillImageAlt="Microsoft 365 Logo"
          SkillImageFallback="MS365"
          Skilllevel={70}
        />
        <SkillCard
          SkillTitle="Visual Studio Code"
          SkillBadges={["Development", "Microsoft", "4 Jahre"]}
          SkillImage={vscodeLogo}
          SkillImageAlt="Visual Studio Code Logo"
          SkillImageFallback="VScode"
          Skilllevel={60}
        />
        <SkillCard
          SkillTitle="Apple Xcode 14+                "
          SkillBadges={["Development", "Apple", "2 Jahre"]}
          SkillImage={xcodeLogo}
          SkillImageAlt="Apple Xcode Logo"
          SkillImageFallback="XCODE"
          Skilllevel={70}
        />
        <SkillCard
          SkillTitle="Apple macOS"
          SkillBadges={["Betriebsystem", "Apple", "2 Jahre"]}
          SkillImage={printing ? macosLogo : macosLogoDark}
          SkillImageAlt="macOS Logo"
          SkillImageFallback="macOS"
          Skilllevel={90}
        />
        <SkillCard
          SkillTitle="Apple iOS"
          SkillBadges={["Betriebsystem", "Apple", "3 Jahre"]}
          SkillImage={printing ? iosLogo : iosLogoDark}
          SkillImageAlt="iOS Logo"
          SkillImageFallback="iOS"
          Skilllevel={80}
        />
        <SkillCard
          SkillTitle="Apple iPadOS"
          SkillBadges={["Betriebsystem", "Apple", "3 Jahre"]}
          SkillImage={printing ? iosLogo : iosLogoDark}
          SkillImageAlt="iOS Logo"
          SkillImageFallback="iOS"
          Skilllevel={80}
        />
        <SkillCard
          SkillTitle="Apple vissionOS"
          SkillBadges={["Betriebsystem", "Apple", "1 Jahre"]}
          SkillImage={printing ? iosLogo : iosLogoDark}
          SkillImageAlt="iOS Logo"
          SkillImageFallback="iOS"
          Skilllevel={80}
        />
        <SkillCard
          SkillTitle="Linux"
          SkillBadges={["Betriebsystem", "5 Jahre"]}
          SkillImage={linuxLogo}
          SkillImageAlt="Linux Logo"
          SkillImageFallback="L"
          Skilllevel={60}
        />
        <SkillCard
          SkillTitle="Windows"
          SkillBadges={["Betriebsystem", "Microsoft", "3 Jahre"]}
          SkillImage={windowsLogo}
          SkillImageAlt="Windows Logo"
          SkillImageFallback="WIN"
          Skilllevel={60}
        />
        <SkillCard
          SkillTitle="Microsoft Teams"
          SkillBadges={["Office", "Microsoft", "4 Jahre"]}
          SkillImage={teamsLogo}
          SkillImageAlt="Microsoft Teams Logo"
          SkillImageFallback="Teams"
          Skilllevel={60}
        />
        <SkillCard
          SkillTitle="Eclipse"
          SkillBadges={["Development", "2 Jahre"]}
          SkillImage={eclipseLogo}
          SkillImageAlt="Eclipse Logo"
          SkillImageFallback="JDK"
          Skilllevel={60}
        />
        <SkillCard
          SkillTitle="MySQL"
          SkillBadges={["Development", "1 Jahre"]}
          SkillImage={mysqlLogo}
          SkillImageAlt="MySQL Logo"
          SkillImageFallback="SQL"
          Skilllevel={80}
        />
        <SkillCard
          SkillTitle="MySQL Comunity Server"
          SkillBadges={["Development", "1 Jahre"]}
          SkillImage={mysqlLogo}
          SkillImageAlt="MySQL Logo"
          SkillImageFallback="SQL"
          Skilllevel={60}
        />
        <SkillCard
          SkillTitle="MySQLWorckbench"
          SkillBadges={["Development", "1 Jahre"]}
          SkillImage={mysqlLogo}
          SkillImageAlt="MySQL Logo"
          SkillImageFallback="SQL"
          Skilllevel={60}
        />
        <SkillCard
          SkillTitle="Ansible"
          SkillBadges={["Automation", "2 Monate"]}
          SkillImage={printing ? ansibleLogo : ansibleLogoDark}
          SkillImageAlt="Ansible Logo"
          SkillImageFallback="A"
          Skilllevel={60}
        />
        <SkillCard
          SkillTitle="Rust"
          SkillBadges={["Automation", "2 Monate"]}
          SkillImage={printing ? rustLogo : rustLogoDark}
          SkillImageAlt="Ansible Logo"
          SkillImageFallback="A"
          Skilllevel={30}
        />
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
