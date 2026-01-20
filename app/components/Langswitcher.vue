<template>
  <ClientOnly>
    <Collapsible
      v-model:open="open"
      :class="['group/collapsible', sidebar ? '' : 'relative']"
    >
      <div :class="containerClasses" :style="{ minWidth }">
        <template v-if="sidebar">
          <Tooltip>
            <TooltipTrigger as-child>
              <button class="shrink-0 outline-none cursor-pointer" @click="open = true">
                <Globe class="size-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">
              {{ currentLanguage?.name }} ({{ currentLanguage?.country }})
            </TooltipContent>
          </Tooltip>
        </template>
        <template v-else>
          <Globe class="size-4 shrink-0 text-muted-foreground" />
        </template>

        <div :class="inputWrapperClasses">
          <Search v-if="open" class="size-3.5 shrink-0 opacity-50" />
          <input
            type="text"
            :placeholder="t('Sidebar.searchLanguage')"
            :value="open ? search : `${currentLanguage?.name} (${currentLanguage?.country})`"
            @input="handleSearchInput"
            @focus="handleFocus"
            class="h-auto p-0 border-0 focus-visible:ring-0 focus:outline-none bg-transparent w-full cursor-pointer placeholder:text-muted-foreground/70 text-inherit"
          />
        </div>

        <CollapsibleTrigger as-child>
          <button class="ml-auto cursor-pointer p-0.5 rounded-sm hover:bg-muted/50 outline-none focus-visible:ring-2">
            <component
              :is="ChevronIcon"
              :class="['size-4 transition-transform duration-200', chevronRotationClass, sidebar ? 'group-data-[collapsible=icon]:hidden' : '', 'shrink-0 opacity-50']"
            />
          </button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent>
        <component :is="ListWrapper" :class="listClasses">
            <span v-if="filteredLanguages.length === 0" class="py-2 text-center text-xs text-muted-foreground">
              {{ t('Sidebar.noLanguageFound') }}
            </span>
            <template v-else>
              <button
                v-for="lang in filteredLanguages"
                :key="lang.code"
                type="button"
                @click="setLanguage(lang)"
                :class="[buttonClasses, 'flex items-center justify-between']"
              >
                <span :class="lang.code === locale ? 'font-bold' : ''">
                  {{ lang.name }} ({{ lang.country }})
                </span>
                <Dot v-if="lang.code === locale" class="text-primary" :size="32" :stroke-width="6" />
              </button>
            </template>
        </component>
      </CollapsibleContent>
    </Collapsible>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  SidebarMenuSub,
} from '@/components/ui/sidebar'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { languages, type Language } from '@/lib/lang'
import { ChevronRight, ChevronDown, Globe, Search, Dot } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useLocalePath, useSwitchLocalePath } from '#imports'

const props = withDefaults(defineProps<{
  sidebar?: boolean
}>(), {
  sidebar: false
})

const { t, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const open = ref(false)
const search = ref("")

const currentLanguage = computed(() => languages.find((lang) => lang.code === locale.value))

const longestLabelLength = computed(() => {
  return Math.max(...languages.map((lang) => `${lang.name} (${lang.country})`.length))
})

const handleSearchInput = (e: Event) => {
  search.value = (e.target as HTMLInputElement).value
  if (!open.value) open.value = true
}

const handleFocus = () => {
    open.value = true
    search.value = ""
}

const setLanguage = (lang: Language) => {
  router.push(switchLocalePath(lang.code))
  open.value = false
  search.value = ""
}

// Auto-select logic for exact matches
watch(search, (newSearch) => {
  if (!newSearch) return
  const lowerSearch = newSearch.toLowerCase()
  const exactMatch = languages.find(
    (lang) =>
      lang.code.toLowerCase() === lowerSearch ||
      `${lang.name} (${lang.country})`.toLowerCase() === lowerSearch
  )
  if (exactMatch) {
    setLanguage(exactMatch)
  }
})

const filteredLanguages = computed(() => {
  return languages.filter((lang) => {
    if (!search.value) return true
    const searchValue = `${lang.name} (${lang.country}) ${lang.code}`.toLowerCase()
    return searchValue.includes(search.value.toLowerCase())
  })
})

const ChevronIcon = computed(() => props.sidebar ? ChevronRight : ChevronDown)

const containerClasses = computed(() => props.sidebar
  ? "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground gap-2 rounded-[calc(var(--radius-sm)+2px)] p-2 text-left text-xs transition-[width,height,padding] group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 flex w-full items-center overflow-hidden outline-hidden"
  : "gap-2 rounded-md border border-border/50 bg-card/50 backdrop-blur-sm p-2 text-left text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground focus-visible:ring-2 flex items-center outline-hidden cursor-pointer"
)

const minWidth = computed(() => !props.sidebar ? `${longestLabelLength.value + 9}ch` : undefined)

const inputWrapperClasses = computed(() => props.sidebar
  ? "flex flex-1 min-w-0 items-center gap-1.5 group-data-[collapsible=icon]:hidden"
  : "flex flex-1 min-w-0 items-center gap-1.5"
)

const ListWrapper = computed(() => props.sidebar ? SidebarMenuSub : "div")

const listClasses = computed(() => props.sidebar
  ? "px-2 py-1.5 max-h-[300px] overflow-y-auto flex flex-col gap-2"
  : "absolute bottom-full left-0 right-0 mb-1 px-2 py-1.5 max-h-[200px] overflow-y-auto flex flex-col gap-2 bg-card/95 backdrop-blur-sm border border-border/50 rounded-md shadow-lg z-50"
)

const buttonClasses = computed(() => props.sidebar
  ? "cursor-pointer px-2 py-1.5 h-8 text-xs rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-left w-full"
  : "cursor-pointer px-2 py-1.5 h-8 text-sm rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-left w-full"
)

const chevronRotationClass = computed(() => {
    if (props.sidebar) return open.value ? "rotate-90" : ""
    else return open.value ? "" : "-rotate-90"
})

</script>
