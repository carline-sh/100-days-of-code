import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="bg-neutral-800 min-h-screen w-full">
        <div className="grid grid-cols-[1fr_3fr_1fr]">
          <Navbar />
          <div className="h-screen overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
