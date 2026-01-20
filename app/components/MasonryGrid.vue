<template>
  <div :class="['masonry-grid', className, columnClasses]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { Variants } from '@/types/masonry'


interface BreakpointValues {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

interface Variant {
  cols: BreakpointValues;
  gaps: BreakpointValues;
}

const projects: Variant = {
  cols: { xs: 1, sm: 2, md: 3, lg: 4, xl: 4 },
  gaps: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }
}

const pinned_Projects: Variant = {
  cols: { xs: 1, sm: 2, md: 3, lg: 3, xl: 3 },
  gaps: { xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }
}

const skills: Variant = {
  cols: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
  gaps: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }
}

const links: Variant = {
  cols: { xs: 1, sm: 2, md: 3, lg: 4, xl: 4 },
  gaps: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }
}

const getVariant = (variant: Variants): Variant => {
  switch (variant) {
    case Variants.projects: return projects;
    case Variants.pinned_projects: return pinned_Projects;
    case Variants.skills: return skills;
    case Variants.links: return links;
    default: return projects;
  }
}

const props = withDefaults(defineProps<{
  className?: string
  variant?: Variants
}>(), {
  className: '',
  variant: Variants.projects
})

// CSS Columns implementation
// We need to map the variant cols to CSS classes or style
// Using Tailwind arbitrary values or style binding would be tricky for breakpoints.
// But we can generate a style block or use classes if we had them.
// A simple way is to use `columns-[count]` classes from Tailwind?
// Tailwind supports `columns-1`, `columns-2`, `columns-3`, etc.
// Gap supports `gap-4` etc.
// But we need responsive control.
// `sm:columns-2 md:columns-3 lg:columns-4xl`
// I'll dynamically compute the class string based on the variant config.

const vari = computed(() => getVariant(props.variant))

const gridClass = computed(() => {
  const v = vari.value
  return `
    columns-${v.cols.xs} gap-${v.gaps.xs * 4}
    sm:columns-${v.cols.sm} sm:gap-${v.gaps.sm * 4}
    md:columns-${v.cols.md} md:gap-${v.gaps.md * 4}
    lg:columns-${v.cols.lg} lg:gap-${v.gaps.lg * 4}
    xl:columns-${v.cols.xl} xl:gap-${v.gaps.xl * 4}
  `
})

// However, Tailwind class names must be complete to be scanned typically.
// Dynamic classes like `columns-${v.cols.xs}` might not work if not safelisted.
// Safest bet is to lookup complete strings or use style.
// CSS columns property is standard.

/*
const gridStyle = computed(() => ({
  columnCount: 3, // fallback
  columnGap: '1rem'
}))
*/
// Let's use Tailwind classes strictly mapped.

const columnClasses = computed(() => {
   const v = vari.value
   // Map number to class name if needed, or just standard `columns-N`
   // assuming Tailwind default config supports columns-1 to columns-12
   return [
     `columns-${v.cols.xs}`, `gap-${v.gaps.xs}`, // gap-1 is 0.25rem
     `sm:columns-${v.cols.sm}`, `sm:gap-${v.gaps.sm}`,
     `md:columns-${v.cols.md}`, `md:gap-${v.gaps.md}`,
     `lg:columns-${v.cols.lg}`, `lg:gap-${v.gaps.lg}`,
     `xl:columns-${v.cols.xl}`, `xl:gap-${v.gaps.xl}`,
   ].join(' ')
})

</script>

<style scoped>
.masonry-grid :deep(> *) {
  break-inside: avoid;
  margin-bottom: 1rem; /* standard gap visual comp */
}
</style>
