import { createFileRoute } from "@tanstack/react-router";
import { Content } from "../components/Content";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Content />;
}
