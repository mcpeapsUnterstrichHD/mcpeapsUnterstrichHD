import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import NotFound from '@/components/NotFound'
import React, { Suspense } from 'react'

const ClientLayout = React.lazy(() => import('@/components/ClientLayout'))

import appCss from '../styles.css?url'
import { useLocale } from '@/hooks/useTranslations'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Fabian Aps - ITler, DJ & Producer',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  component: RootComponent,
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const locale = useLocale()

  return (
    <html lang={locale} className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        {import.meta.env.DEV && (
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        )}
        <Scripts />
      </body>
    </html>
  )
}

function RootComponent() {
  return (
    <Suspense fallback={null}>
      <ClientLayout>
        <Outlet />
      </ClientLayout>
    </Suspense>
  )
}
