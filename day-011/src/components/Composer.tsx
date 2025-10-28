import { BiPoll } from "react-icons/bi";
import { FaRegImage } from "react-icons/fa";
import { HiOutlineGif } from "react-icons/hi2";

export const Composer = () => {
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
          <input
            className="grow p-2 rounded-3xl bg-neutral-200 focus:outline-none"
            type="text"
            placeholder="What's happening?"
          />
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
