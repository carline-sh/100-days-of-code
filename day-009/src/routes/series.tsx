import { createFileRoute } from "@tanstack/react-router";
import { BLOGPOSTS } from "../data";
import { PostPreview } from "../components/postpreview";

export const Route = createFileRoute("/series")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="border border-t-0 comic-relief-regular p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-linear-to-b from-orange-200 to-orange-400 text-neutral-800 text-lg">
      <PostPreview post={BLOGPOSTS[4]} />
    </div>
  );
}
