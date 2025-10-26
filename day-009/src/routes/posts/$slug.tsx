import { createFileRoute } from "@tanstack/react-router";
import { BLOGPOSTS } from "../../data";

export const Route = createFileRoute("/posts/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();

  const post = BLOGPOSTS.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="border comic-relief-regular p-4 space-y-2 border-t-0 bg-linear-to-b from-orange-200 to-orange-400 text-neutral-800">
      <div className="text-2xl font-bold">{post.title}</div>
      <div className="space-y-2">
        {post.content.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}
