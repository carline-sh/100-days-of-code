import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/flex')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/flex"!</div>
}
