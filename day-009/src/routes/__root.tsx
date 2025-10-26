import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";

import { IoIosPerson, IoIosSettings, IoMdSearch } from "react-icons/io";
import Clouds from "../Ads/Clouds.jpg";
import { HiCursorArrowRays } from "react-icons/hi2";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div
      className="bg-center bg-cover p-8 bg-fixed bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${Clouds})` }}
    >
      <div className="pb-0 pt-0">
        <div className="bg-linear-to-b from-fuchsia-200 to-fuchsia-400 text-fuchsia-700 flex justify-center items-center p-6 flex-row gap-4 border border-b-0">
          <h1 className="irish-grover-regular text-4xl text-shadow-lg drop-shadow-lg">
            Blogue
          </h1>
        </div>
      </div>
      <Navbar />
      <div className="w-full gap-4 flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-[2fr_5fr_2fr]">
        <div className="p-2">
          <div className=" max-h-2xs"></div>
          <div className="pt-4 h-fit comic-relief-regular">
            <button className="border p-2 rounded-md mb-2 bg-white/30 border-neutral-300 h-fit w-full flex items-center hover:underline backdrop-blur-sm hover:border-neutral-400 transition-all duration-200 ">
              <IoIosPerson /> <span>About Writer</span>
            </button>
            <button className="border p-2 rounded-md mb-2 bg-white/30 border-neutral-300 h-fit w-full flex items-center hover:underline backdrop-blur-sm hover:border-neutral-400 transition-all duration-200 ">
              <IoIosPerson /> <span>My Profile</span>
            </button>
            <button className="border p-2 rounded-md mb-2 bg-white/30 border-neutral-300 h-fit w-full flex items-center hover:underline backdrop-blur-sm hover:border-neutral-400 transition-all duration-200 ">
              <IoIosSettings /> <span>Settings</span>
            </button>

            <div className="space-y-2">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/cmSbXsFE3l8?list=RDcmSbXsFE3l8"
                title="Anna Kendrick - Cups (Pitch Perfect’s “When I’m Gone”) (Director&#39;s Cut)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="space-y-2 border p-4 border-neutral-300 rounded-md bg-white/30 backdrop-blur-sm hover:border-neutral-400 transition-all duration-200 hover:bg-white/50">
                <a href="https://carline.sh" target="_blank">
                  <div className="flex items-center justify-between gap-2 w-full">
                    <div>This is not an ad.</div>
                    <div className="text-xl">
                      <HiCursorArrowRays />
                    </div>
                  </div>
                  <div className="w-full aspect-square">
                    <img
                      src="https://placecats.com/300/200"
                      alt="cat"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <Outlet />
        </div>

        <div className="p-2 space-y-2">
          <div className="flex gap-2 border border-neutral-500 items-center flex-start py-0 px-2 rounded-md bg-white/80 h-fit comic-relief-regular w-full">
            <div className="w-4 h-4">
              <IoMdSearch className="w-4 h-4" />
            </div>
            <input className="w-fit" type="text" placeholder="search" />
          </div>
          <a
            href="https://carline.sh"
            target="_blank"
            className="bg-white/30 border border-neutral-300 block space-y-2 hover:border-neutral-400 comic-relief-regular p-4 rounded-md text-center cursor-pointer hover:bg-white/50 transition-all duration-200 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <div>This is not an ad.</div>
              <div className="text-xl">
                <HiCursorArrowRays />
              </div>
            </div>
            <div className="w-full aspect-square">
              <img
                src="https://placecats.com/300/300"
                alt="cat"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
