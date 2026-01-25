import { createFileRoute, redirect } from '@tanstack/react-router'
import { defaultLocale } from '@/lib/lang'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    throw redirect({
      to: '/$locale',
      params: { locale: defaultLocale },
    })
  },
})
