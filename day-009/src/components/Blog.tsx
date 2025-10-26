import { BLOGPOSTS } from "../data";
import { PostPreview } from "./postpreview";

export function Blog() {
  return (
    <div className="">
      <div className="flex justify-center items-center p-2 bg-linear-to-b from-orange-200 to-orange-400 text-neutral-800 text-lg  w-full mx-auto border md:border-t-0 comic-relief-regular">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto w-full">
          {BLOGPOSTS.map((post) => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
