import { createFileRoute } from "@tanstack/react-router";
import { Blog } from "../components/Blog";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Blog />;
}
