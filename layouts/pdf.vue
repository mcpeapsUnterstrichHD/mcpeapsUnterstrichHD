<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex flex-1">
      <main class="flex-1 flex flex-col items-center justify-center">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style>

:root {
    /* Light Theme */
    --background: 0 0% 100% 0; /* Vollständig transparent */
    --foreground: 220 16% 22%; /* nord1 - Dunkler Vordergrund */
    --muted: 0 0% 100% 0; /* Vollständig transparent */
    --muted-foreground: 220 16% 22%; /* nord1 - Dunkler Vordergrund */
    --popover: 222 16% 28%; /* nord2 */
    --popover-foreground: 220 16% 22%; /* nord1 - Dunkler Vordergrund */
    --card: 0 0% 100% 0; /* Vollständig transparent */
    --card-foreground: 220 16% 22%; /* nord1 - Dunkler Vordergrund */
    --border: 354 42% 56%; /* nord11 */
    --input: 220 16% 22%; /* nord1 */

    /* Primärfarbe: Nord Light Grün (Nord 14) */
    --primary: 92 28% 65%; /* nord14 */
    --primary-foreground: 220 16% 22%; /* nord1 */

    /* Sekundärfarbe: Rot (Nord 11) */
    --secondary: 354 42% 56%; /* nord11 */
    --secondary-foreground: 218 27% 94%; /* nord6 */

    --accent: 210 34% 63%; /* nord9 */
    --accent-foreground: 218 27% 94%; /* nord6 */
    --destructive: 354 42% 56%; /* nord11 */
    --destructive-foreground: 218 27% 94%; /* nord6 */
    --ring: 92 28% 65%; /* nord14 */

    /* Sidebar-Anpassungen */
    --sidebar-background: 220 16% 22%; /* nord1 */
    --sidebar-foreground: 218 27% 80%; /* nord4 */
    --sidebar-primary: 92 28% 65%; /* nord14 */
    --sidebar-primary-foreground: 218 27% 94%; /* nord6 */
    --sidebar-accent: 210 34% 63%; /* nord9 */
    --sidebar-accent-foreground: 218 27% 94%; /* nord6 */
    --sidebar-border: 224 16% 32%; /* nord3 */
    --sidebar-ring: 92 28% 65%; /* nord14 */
  }

  .dark {
    /* Dark Theme */
    --background: 0 0% 100% 0; /* Vollständig transparent */
    --foreground: 220 16% 22%; /* nord1 - Dunkler Vordergrund */
    --muted: 0 0% 100% 0; /* Vollständig transparent */
    --muted-foreground: 220 16% 22%; /* nord1 - Dunkler Vordergrund */
    --popover: 222 16% 28%; /* nord2 */
    --popover-foreground: 220 16% 22%; /* nord1 - Dunkler Vordergrund */
    --card: 0 0% 100% 0; /* Vollständig transparent */
    --card-foreground: 220 16% 22%; /* nord1 - Dunkler Vordergrund */
    --border: 354 42% 56%; /* nord11 */
    --input: 220 16% 22%; /* nord1 */

    /* Primärfarbe: Nord Light Grün (Nord 14) */
    --primary: 92 28% 65%; /* nord14 */
    --primary-foreground: 220 16% 22%; /* nord1 */

    /* Sekundärfarbe: Rot (Nord 11) */
    --secondary: 354 42% 56%; /* nord11 */
    --secondary-foreground: 218 27% 94%; /* nord6 */

    --accent: 210 34% 63%; /* nord9 */
    --accent-foreground: 218 27% 94%; /* nord6 */
    --destructive: 354 42% 56%; /* nord11 */
    --destructive-foreground: 218 27% 94%; /* nord6 */
    --ring: 92 28% 65%; /* nord14 */

    /* Sidebar-Anpassungen */
    --sidebar-background: 220 16% 22%; /* nord1 */
    --sidebar-foreground: 218 27% 80%; /* nord4 */
    --sidebar-primary: 92 28% 65%; /* nord14 */
    --sidebar-primary-foreground: 218 27% 94%; /* nord6 */
    --sidebar-accent: 210 34% 63%; /* nord9 */
    --sidebar-accent-foreground: 218 27% 94%; /* nord6 */
    --sidebar-border: 224 16% 32%; /* nord3 */
    --sidebar-ring: 92 28% 65%; /* nord14 */
  }
</style>