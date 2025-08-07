import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lebenslauf/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/lebenslauf/"!</div>
}
