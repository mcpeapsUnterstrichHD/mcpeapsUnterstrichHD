<template>
  <Tooltip>
    <TooltipTrigger as-child>
      <button
        @click="toggleSidebar"
        :class="[baseClasses, variantClasses]"
      >
        <PanelLeft class="h-4 w-4" />
        <span class="group-data-[collapsible=icon]:hidden">
          {{ t("Sidebar.toggleSidebar") }}
        </span>
      </button>
    </TooltipTrigger>
    <TooltipContent side="right">
      {{ t("Sidebar.toggleSidebar") }}
    </TooltipContent>
  </Tooltip>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSidebar } from '@/components/ui/sidebar'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { PanelLeft } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const props = withDefaults(defineProps<{
  variant?: "header" | "sidebar"
}>(), {
  variant: "sidebar"
})

const { toggleSidebar } = useSidebar()
const { t } = useI18n()

const baseClasses = "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground gap-2 rounded-[calc(var(--radius-sm)+2px)] p-2 text-left text-xs transition-[width,height,padding] focus-visible:ring-2 flex items-center overflow-hidden outline-hidden cursor-pointer"

const variantClasses = computed(() => props.variant === "header"
  ? "rounded-sm text-foreground bg-card/50 backdrop-blur-sm"
  : "w-full group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2!"
)
</script>
