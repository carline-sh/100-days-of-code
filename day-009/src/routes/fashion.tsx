import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fashion')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/fashion"!</div>
}
