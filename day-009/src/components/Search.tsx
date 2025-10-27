import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { BLOGPOSTS } from "../data";
import { Link } from "@tanstack/react-router";

export const Search = () => {
  const [search, setSearch] = useState("");

  const results = BLOGPOSTS.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-2">
      <div className="flex gap-2 border border-neutral-500 items-center flex-start py-0 px-2 rounded-md bg-white/80 h-fit comic-relief-regular w-full">
        <div className="w-4 h-4">
          <IoMdSearch className="w-4 h-4" />
        </div>
        <input
          className="w-fit"
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {search.length > 0 ? (
        <div className="border py-1 px-2">
          <div>You searched for: {search}</div>
          <div className="space-y-1">
            {results.map((post) => (
              <Link
                to="/posts/$slug"
                params={{ slug: post.slug }}
                key={post.slug}
                className="block border rounded-sm p-1 hover:bg-neutral-200 transition-all duration-200 cursor-pointer comic-relief-regular"
              >
                {post.title}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div>Type to start searching</div>
      )}
    </div>
  );
};
