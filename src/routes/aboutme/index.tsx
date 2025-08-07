import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/aboutme/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/aboutme/"!</div>
}
