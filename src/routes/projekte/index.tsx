import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projekte/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/projekte/"!</div>
}
