import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Blog } from "../components/Blog";
import { IoIosPerson, IoIosSettings, IoMdSearch } from "react-icons/io";
import Clouds from "../Ads/Clouds.jpg";

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
      <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr]">
        <div className="p-2">
          <div className="border w-fit max-h-2xs"></div>
          <div className="pt-4 h-fit comic-relief-regular">
            <button className="border p-2 rounded-md mb-2 bg-white/80 h-fit flex items-center">
              <IoIosPerson /> <span>About Writer</span>
            </button>
            <button className="border p-2 rounded-md mb-2 bg-white/80 h-fit flex items-center">
              <IoIosPerson /> <span>My Profile</span>
            </button>
            <button className="border p-2 rounded-md mb-2 bg-white/80 h-fit flex items-center">
              <IoIosSettings /> <span>Settings</span>
            </button>
          </div>
        </div>

        <div className="">
          <Outlet />
        </div>

        <div className="p-2 flex justify-end">
          <div className="flex gap-2 border border-neutral-500 items-center flex-start py-0 px-2 rounded-md bg-white/80 h-fit comic-relief-regular w-full">
            <div className="w-4 h-4">
              <IoMdSearch className="w-4 h-4" />
            </div>
            <input className="w-fit" type="text" placeholder="search" />
          </div>
        </div>
      </div>
    </div>
  );
}
