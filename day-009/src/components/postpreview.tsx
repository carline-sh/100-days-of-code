import { Link } from "@tanstack/react-router";
import type { BLOGPOSTS } from "../data";

type Post = (typeof BLOGPOSTS)[number];

export const PostPreview = ({ post }: { post: Post }) => {
  return (
    <div className="bg-neutral-200 text-neutral-800 p-4 rounded-md w-full">
      <Link
        to="/posts/$slug"
        params={{ slug: post.slug }}
        className="font-bold hover:italic hover:underline"
      >
        {post.title}
      </Link>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full aspect-video max-h-48 object-cover border rounded-md"
        />
      )}
      <div className="border text-sm text-neutral-600 p-2">
        {post.content.slice(0, 100)}...
      </div>
    </div>
  );
};
