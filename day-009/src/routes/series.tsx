import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/series')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/series"!</div>
}
