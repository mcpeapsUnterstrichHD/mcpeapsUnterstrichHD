<template>
  <div>
    <div class="flex flex-col m-2 items-center justify-center">
    <h2 class="gap-8 font-bold text-3xl pt-8 pb-8">Fähigkeiten</h2>

  <div class="my-Skill-grid-4 gap-8">
    <SkillCard
      skill-title="Java"
      :skill-badges="['Development', '3 Jahre']"
      skill-image="/pictures/java.png"
      skill-image-alt="Java Logo"
      skill-image-fallback="JDK"
      :skill-level="80"
    />
    <SkillCard
      skill-title="Swift (SwiftUI)"
      :skill-badges="['Development', 'Frontend', 'Apple', '2 Jahre']"
      skill-image="/pictures/swift.png"
      skill-image-alt="Swift Logo"
      skill-image-fallback="SUI"
      :skill-level="60"
    />
    <SkillCard
      skill-title="Cisco IOS"
      :skill-badges="['Konfiguration', '1 Jahre']"
      skill-image="/pictures/cisco.png"
      skill-image-alt="Cisco Logo"
      skill-image-fallback="IOS"
      :skill-level="50"
    />
    <SkillCard
      skill-title="Microsoft 365"
      :skill-badges="['Office', '365', 'Microsoft', '5 Jahre']"
      skill-image="/pictures/ms365.png"
      skill-image-alt="Microsoft 365 Logo"
      skill-image-fallback="MS365"
      :skill-level="70"
    />
    <SkillCard
      skill-title="Visual Studio Code"
      :skill-badges="['Development', 'Microsoft', '4 Jahre']"
      skill-image="/pictures/vscode.png"
      skill-image-alt="Visual Studio Code Logo"
      skill-image-fallback="VScode"
      :skill-level="60"
    />
    <SkillCard
      skill-title="Apple Logic Pro"
      :skill-badges="['Musik', '2 Jahre']"
      skill-image="/pictures/logicpro.png"
      skill-image-alt="Apple Logic Pro Logo"
      skill-image-fallback="ALP"
      :skill-level="60"
    />
    <SkillCard
      skill-title="Apple Xcode 14+"
      :skill-badges="['Development', 'Apple', '2 Jahre']"
      skill-image="/pictures/xcode.png"
      skill-image-alt="Apple Xcode Logo"
      skill-image-fallback="XCODE"
      :skill-level="70"
    />
    <SkillCard
      skill-title="Apple macOS"
      :skill-badges="['Betriebssystem', 'Apple', '2 Jahre']"
      skill-image="/pictures/macos.png"
      skill-image-alt="macOS Logo"
      skill-image-fallback="macOS"
      :skill-level="90"
    />
    <SkillCard
      skill-title="Apple iOS"
      :skill-badges="['Betriebssystem', 'Apple', '3 Jahre']"
      skill-image="/pictures/ios.png"
      skill-image-alt="iOS Logo"
      skill-image-fallback="iOS"
      :skill-level="80"
    />
    <SkillCard
      skill-title="Apple iPadOS"
      :skill-badges="['Betriebssystem', 'Apple', '3 Jahre']"
      skill-image="/pictures/ios.png"
      skill-image-alt="iOS Logo"
      skill-image-fallback="iOS"
      :skill-level="80"
    />
    <SkillCard
      skill-title="Apple visionOS"
      :skill-badges="['Betriebssystem', 'Apple', '1 Jahre']"
      skill-image="/pictures/ios.png"
      skill-image-alt="iOS Logo"
      skill-image-fallback="iOS"
      :skill-level="80"
    />
    <SkillCard
      skill-title="Linux"
      :skill-badges="['Betriebssystem', '5 Jahre']"
      skill-image="/pictures/linux.png"
      skill-image-alt="Linux Logo"
      skill-image-fallback="L"
      :skill-level="60"
    />
    <SkillCard
      skill-title="Windows"
      :skill-badges="['Betriebssystem', 'Microsoft', '3 Jahre']"
      skill-image="/pictures/windows.png"
      skill-image-alt="Windows Logo"
      skill-image-fallback="WIN"
      :skill-level="60"
    />
    <SkillCard
      skill-title="Microsoft Teams"
      :skill-badges="['Office', 'Microsoft', '4 Jahre']"
      skill-image="/pictures/teams.png"
      skill-image-alt="Microsoft Teams Logo"
      skill-image-fallback="Teams"
      :skill-level="60"
    />
    <SkillCard
      skill-title="Eclipse"
      :skill-badges="['Development', '2 Jahre']"
      skill-image="/pictures/eclipse.png"
      skill-image-alt="Eclipse Logo"
      skill-image-fallback="JDK"
      :skill-level="60"
    />
    <SkillCard
      skill-title="MySQL"
      :skill-badges="['Development', '1 Jahre']"
      skill-image="/pictures/mysql.png"
      skill-image-alt="MySQL Logo"
      skill-image-fallback="SQL"
      :skill-level="80"
    />
    <SkillCard
      skill-title="MySQL Community Server"
      :skill-badges="['Development', '1 Jahre']"
      skill-image="/pictures/mysql.png"
      skill-image-alt="MySQL Logo"
      skill-image-fallback="SQL"
      :skill-level="60"
    />
    <SkillCard
      skill-title="MySQL Workbench"
      :skill-badges="['Development', '1 Jahre']"
      skill-image="/pictures/mysql.png"
      skill-image-alt="MySQL Logo"
      skill-image-fallback="SQL"
      :skill-level="60"
    />
    <SkillCard
      skill-title="Ansible"
      :skill-badges="['Automation', '2 Monate']"
      skill-image="/pictures/ansible.png"
      skill-image-alt="Ansible Logo"
      skill-image-fallback="A"
      :skill-level="60"
    />
  </div>
  </div>
    <ClientOnly>
      <Button @click="async() => {await window.print()}" class="fixed bottom-2 right-2 z-50 print:hidden" type="button">
        <div class="flex flex-row gap-2 justify-center items-center">
        <div class="nf nf-oct-download" />
        <p>PDF</p>
      </div>
      </Button>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<style>
.my-Skill-grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
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