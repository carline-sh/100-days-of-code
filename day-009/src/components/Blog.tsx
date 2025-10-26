import { Link } from "@tanstack/react-router";
import { BLOGPOSTS } from "../data";

export function Blog() {
  return (
    <div className="">
      <div className="flex justify-center items-center p-2 bg-linear-to-b from-orange-200 to-orange-400 text-neutral-800 text-lg  w-full mx-auto border md:border-t-0 comic-relief-regular">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto w-full">
          {BLOGPOSTS.map((post) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
