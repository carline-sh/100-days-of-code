import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="min-h-screen w-full bg-neutral-700 flex flex-col">
        <Sidebar />
        <Outlet />
        <Footer />
      </div>
    </React.Fragment>
  );
}
