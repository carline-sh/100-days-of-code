import type { FC } from "react";
import type { PostType } from "./Timeline";
import { BiRepost, BiShare } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export const Post: FC<{ post: PostType }> = ({ post }) => {
  return (
    <div className="border-b p-4 flex gap-4">
      <div>
        <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200">
          <img
            className="w-full h-full object-cover"
            src={"https://placekittens.com/200/200?u=" + post.id}
            alt="placeholder"
          />
        </div>
      </div>
      <div className="w-full space-y-2">
        <span className="font-bold">{post.username}</span>
        <h1>{post.content}</h1>
        <div className="flex gap-2 justify-around w-full pt-2">
          <button>
            <FaRegComment />
          </button>
          <button>
            <BiRepost />
          </button>
          <button>
            <FaRegHeart />
          </button>
          <button>
            <BiShare />
          </button>
        </div>
      </div>
    </div>
  );
};
