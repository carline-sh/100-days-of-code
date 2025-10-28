import { useState } from "react";
import { BiPoll } from "react-icons/bi";
import { FaRegImage } from "react-icons/fa";
import { HiOutlineGif } from "react-icons/hi2";

export const Composer = () => {
  const [content, setContent] = useState("");
  return (
    <div className="border-b w-full p-4">
      <div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-200">
            <img
              src={"https://placekittens.com/200/200?u=" + 1}
              className="w-full h-full object-cover"
              alt="placeholder"
            />
          </div>
          <div className="flex items-center gap-2 grow px-4 py-2 rounded-3xl bg-neutral-200">
            <input
              className="focus:outline-none grow"
              type="text"
              placeholder="What's happening?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            {content.length > 5 && (
              <button
                className="text-xs px-2 py-1 bg-blue-500 text-white rounded-full"
                onClick={() => {
                  //
                  fetch("/api/posts", {
                    method: "POST",
                    body: JSON.stringify({
                      content,
                      username: "John Doe",
                      id: Date.now(),
                    }),
                  });
                  setContent("");
                }}
              >
                Tweet
              </button>
            )}
          </div>
          <div className="text-2xl text-blue-500 flex items-center gap-2">
            <FaRegImage />
            <HiOutlineGif />
            <BiPoll />
          </div>
        </div>
      </div>
    </div>
  );
};
