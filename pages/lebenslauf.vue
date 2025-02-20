<template>
  <div class="gap-2 p-2">
    <div class="gap-2 p-2">
    <div class="flex flex-col items-center justify-center gap-2 p-2">
      <h1 className="gap-8 font-bold text-4xl">Fabian Aps</h1>

        <div className="mb-10 text-justify">
          Ich bin ein IT-Assistent.
          <br />
          <div className="flex flex-col items-start">
            <div className="flex flex-row items-center">
              <NuxtLink
                to="mailto:aps.fabian@outlook.com"
                external
              >
                <p className="cursor-context-menu">
                  E-Mail: aps.fabian@outlook.com
                </p>
              </NuxtLink>
            </div>
            <div className="flex flex-row items-center">
              <NuxtLink to="tel:+4917645172171" external>
                <p className="cursor-context-menu">
                  Telefonnummer: +4917645172171
                </p>
              </NuxtLink>
            </div>
          </div>
          <br />
          <NuxtLink
            to="https://maps.apple.com/?address=Ludwig-Renn-Stra%C3%9Fe%2033,%2012679%20Berlin,%20Deutschland&ll=52.551673,13.558337"
            external
          >
            <div className="py-1 text-lg">
              Aps, Fabian
              <br />
              Ludwig-Renn-Straße 33
              <br />
              12679 Berlin, Deutschland
            </div>
          </NuxtLink>
          <br />
          Geburtsdatum: 06.06.2003
        </div>
    </div>
    <h2 class="gap-8 font-bold text-3xl text-center pt-8 pb-8">Ausbildung</h2>
    <div class="time-line">
      <TimelineCard
      title="Ausbuildungsplatzsuchend"
      from="07.2024"
      to="-"
      image=""
      imageAlt=""
      imageFallback="/"
      :badges="[]"
      >
        Ausbuildungsplatzsuchend
      </TimelineCard>
      <TimelineCard
      title="Oberstufenzentrum Informations- & Medizientechnik (OSZ IMT)"
      from="08.2021"
      to="07.2024"
      image="/pictures/lebenslauf/schools/oszimt_logo.png"
      imageAlt="OSZ IMT Logo"
      imageFallback="OSZ IMT"
      :badges="['Berlin','Ausbildung','Fachabitur','IT','3 Jahre']"
      >
        Ausbildung mit Dopelqualifikatin zum IT-Assistenten mit Fachabitur
      </TimelineCard>
      <TimelineCard
      title="Carl-von-Linné-Schule"
      from="08.2010"
      to="07.2021"
      image="/pictures/lebenslauf/schools/cvl_logo.png"
      imageAlt="Carl-von-Linné-Schule Logo"
      imageFallback="CVL"
      :badges="['Berlin','MSA(OG)']"
      >
        Algemeine Schule Grundschule + Sekundarstufe I
      </TimelineCard>
    </div>
    <h2 class="gap-8 font-bold text-3xl text-center pt-8 pb-8">Erfahrungen</h2>
    <div class="time-line">
      <TimelineCard
      title="KfW Bankengruppe"
      from="27.11.2023"
      to="02.02.2024"
      image="/pictures/lebenslauf/firms/kfw_logo.png"
      imageAlt="KfW Logo"
      imageFallback="KfW"
      :badges="['Berlin','IT ','Betriebspraktikum','9 Wochen']"
      >
        Betribspraktikum als IT-Assistent im Rahmen der Ausbildung am OSZ IMT <br />
        Automatisierungen mit Ansible + Dokumentation für Ansible in Confluence der KfW
      </TimelineCard>
      <TimelineCard
      title="Akademie der Künste (ADK)"
      from="02.2020"
      to="02.2020"
      image="/pictures/lebenslauf/firms/adkberlin_logo.jpg"
      imageAlt="ADK Logo"
      imageFallback="ADK"
      :badges="['Berlin','Musik','Schülerpraktikum','3 Wochen']"
      >
        Syntezizerentwiklung
      </TimelineCard>
      <TimelineCard
      title="Tosa Security & Service GmbH & Co KG"
      from="01.2019"
      to="01.2019"
      image="/pictures/lebenslauf/firms/ToSa_logo.jpg"
      imageAlt="Tosa Security & Service GmbH & Co KG Logo"
      imageFallback="TSS"
      :badges="['Trebin','Security','Service','Schülerpraktikum','3 Tage']"
      >
        Bürotätigkeiten
      </TimelineCard>
      <TimelineCard
      title="Pfennigpfeiffer"
      from="08.2010"
      to="07.2021"
      image="/pictures/lebenslauf/firms/Pfennigpfeiffer_logo.jpg"
      imageAlt="Pfennigpfeiffer Logo"
      imageFallback="P"
      :badges="['Berlin','Einzelhandel','Schülerpraktikum','1 Tag']"
      >
        Regale einräumen
      </TimelineCard>
    </div>
    <h2 class="gap-8 font-bold text-3xl text-center pt-8 pb-8">Fähigkeiten</h2>

  <div class="my-Skill-grid-4">
    <SkillCard
      skill-title="Java"
      :skill-badges="['Development', '3 Jahre']"
      skill-image="/pictures/lebenslauf/skills/java.png"
      skill-image-alt="Java Logo"
      skill-image-fallback="JDK"
      :skill-level="80"
    />
    <SkillCard
      skill-title="Swift (SwiftUI)"
      :skill-badges="['Development', 'Frontend', 'Apple', '2 Jahre']"
      skill-image="/pictures/lebenslauf/skills/swift.png"
      skill-image-alt="Swift Logo"
      skill-image-fallback="SUI"
      :skill-level="60"
    />
    <SkillCard
      skill-title="Cisco IOS"
      :skill-badges="['Konfiguration', '1 Jahre']"
      skill-image="/pictures/lebenslauf/skills/cisco.png"
      skill-image-alt="Cisco Logo"
      skill-image-fallback="IOS"
      :skill-level="50"
    />
    <SkillCard
      skill-title="Microsoft 365"
      :skill-badges="['Office', '365', 'Microsoft', '5 Jahre']"
      skill-image="/pictures/lebenslauf/skills/ms365.png"
      skill-image-alt="Microsoft 365 Logo"
      skill-image-fallback="MS365"
      :skill-level="70"
    />
    <SkillCard
      skill-title="Visual Studio Code"
      :skill-badges="['Development', 'Microsoft', '4 Jahre']"
      skill-image="/pictures/lebenslauf/skills/vscode.png"
      skill-image-alt="Visual Studio Code Logo"
      skill-image-fallback="VScode"
      :skill-level="60"
    />
    <SkillCard
      skill-title="Apple Logic Pro"
      :skill-badges="['Musik', '2 Jahre']"
      skill-image="/pictures/lebenslauf/skills/logicpro.png"
      skill-image-alt="Apple Logic Pro Logo"
      skill-image-fallback="ALP"
      :skill-level="60"
    />
    <SkillCard
      skill-title="Apple Xcode 14+"
      :skill-badges="['Development', 'Apple', '2 Jahre']"
      skill-image="/pictures/lebenslauf/skills/xcode.png"
      skill-image-alt="Apple Xcode Logo"
      skill-image-fallback="XCODE"
      :skill-level="70"
    />
    <SkillCard
      skill-title="Apple macOS"
      :skill-badges="['Betriebssystem', 'Apple', '2 Jahre']"
      skill-image="/pictures/lebenslauf/skills/macos.png"
      skill-image-alt="macOS Logo"
      skill-image-fallback="macOS"
      :skill-level="90"
    />
    <SkillCard
      skill-title="Apple iOS"
      :skill-badges="['Betriebssystem', 'Apple', '3 Jahre']"
      skill-image="/pictures/lebenslauf/skills/ios.png"
      skill-image-alt="iOS Logo"
      skill-image-fallback="iOS"
      :skill-level="80"
    />
    <SkillCard
      skill-title="Apple iPadOS"
      :skill-badges="['Betriebssystem', 'Apple', '3 Jahre']"
      skill-image="/pictures/lebenslauf/skills/ios.png"
      skill-image-alt="iOS Logo"
      skill-image-fallback="iOS"
      :skill-level="80"
    />
    <SkillCard
      skill-title="Apple visionOS"
      :skill-badges="['Betriebssystem', 'Apple', '1 Jahre']"
      skill-image="/pictures/lebenslauf/skills/ios.png"
      skill-image-alt="iOS Logo"
      skill-image-fallback="iOS"
      :skill-level="80"
    />
    <SkillCard
      skill-title="Linux"
      :skill-badges="['Betriebssystem', '5 Jahre']"
      skill-image="/pictures/lebenslauf/skills/linux.png"
      skill-image-alt="Linux Logo"
      skill-image-fallback="L"
      :skill-level="60"
    />
    <SkillCard
      skill-title="Windows"
      :skill-badges="['Betriebssystem', 'Microsoft', '3 Jahre']"
      skill-image="/pictures/lebenslauf/skills/windows.png"
      skill-image-alt="Windows Logo"
      skill-image-fallback="WIN"
      :skill-level="60"
    />
    <SkillCard
      skill-title="Microsoft Teams"
      :skill-badges="['Office', 'Microsoft', '4 Jahre']"
      skill-image="/pictures/lebenslauf/skills/teams.png"
      skill-image-alt="Microsoft Teams Logo"
      skill-image-fallback="Teams"
      :skill-level="60"
    />
    <SkillCard
      skill-title="Eclipse"
      :skill-badges="['Development', '2 Jahre']"
      skill-image="/pictures/lebenslauf/skills/eclipse.png"
      skill-image-alt="Eclipse Logo"
      skill-image-fallback="JDK"
      :skill-level="60"
    />
    <SkillCard
      skill-title="MySQL"
      :skill-badges="['Development', '1 Jahre']"
      skill-image="/pictures/lebenslauf/skills/mysql.png"
      skill-image-alt="MySQL Logo"
      skill-image-fallback="SQL"
      :skill-level="80"
    />
    <SkillCard
      skill-title="MySQL Community Server"
      :skill-badges="['Development', '1 Jahre']"
      skill-image="/pictures/lebenslauf/skills/mysql.png"
      skill-image-alt="MySQL Logo"
      skill-image-fallback="SQL"
      :skill-level="60"
    />
    <SkillCard
      skill-title="MySQL Workbench"
      :skill-badges="['Development', '1 Jahre']"
      skill-image="/pictures/lebenslauf/skills/mysql.png"
      skill-image-alt="MySQL Logo"
      skill-image-fallback="SQL"
      :skill-level="60"
    />
    <SkillCard
      skill-title="Ansible"
      :skill-badges="['Automation', '2 Monate']"
      skill-image="/pictures/lebenslauf/skills/ansible.png"
      skill-image-alt="Ansible Logo"
      skill-image-fallback="A"
      :skill-level="60"
    />
  </div>
  </div>
      <Button
        @click="print"
        class="fixed bottom-2 right-2 z-50 print:hidden" type="button"
      >
        <div class="flex flex-row gap-2 justify-center items-center">
        <div class="nf nf-oct-download" />
        <p>PDF</p>
      </div>
      </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { toast } from "vue-sonner";
import { onMounted, onUnmounted } from "vue";

const toastValues: {
  title: string;
  description: string;
  interval: number;
} = {
  title: 'Best Settings for printing',
  description: 'Scale: 59%, Margins: default, Background graphics: on',
  interval: 1 * 60 * 1000, // 1 minute(s) in milliseconds
};

let intervalId: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  // Show toast immediately on mount
		toast(toastValues.title, {
			description: toastValues.description,
		});

  // Set up interval to show toast every 60 seconds
		intervalId = setInterval(() => {
			toast(toastValues.title, {
				description: toastValues.description,
			});
		}, toastValues.interval);
});

// Clean up interval when component unmounts
onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});


const print = async () => {
  if (process.client) {
		await window.print();
	}
}
</script>

<style>
.time-line {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @apply gap-2;
  justify-content: center; /* Zentriert das Grid horizontal */
  align-items: center; /* Zentriert das Grid vertikal (falls nötig) */
  margin: 0.5rem auto; /* Sorgt dafür, dass das Grid in der Mitte bleibt */
}
.my-Skill-grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @apply gap-2;
  justify-content: center; /* Zentriert das Grid horizontal */
  align-items: center; /* Zentriert das Grid vertikal (falls nötig) */
  margin: 0.5rem auto; /* Sorgt dafür, dass das Grid in der Mitte bleibt */
}

@media (max-width: 1024px) {
  .my-Skill-grid-4 {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .my-Skill-grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .my-Skill-grid-4 {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>