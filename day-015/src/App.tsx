import "./App.css";
import { useState } from "react";

export const App = () => {
  const [size, setSize] = useState("small");

  function handleSizeChange(size: string) {
    setSize(size);
  }
  return (
    <div className="min-h-screen w-full py-4">
      <div className="p-8 bg-neutral-100 text-neutral-800 w-fit mx-auto rounded-md">
        <div className="bg-slate-500 flex items-center justify-center p-4 text-xl font-bold rounded-md w-fit mx-auto">
          Hello There!
        </div>
        <h1 className="flex items-center justify-center p-4">
          What size pizza do you want today?
        </h1>
        <div className="bg-slate-200 p-4 w-fit mx-auto rounded-md">
          <p className="py-2 flex items-center justify-center">Select size.</p>
          <div className="py-2 flex items-center justify-center gap-4">
            <div className="rounded-full bg-slate-300 hover:bg-slate-400 p-2 w-15 text-center">
              small handleSizeChange("small") onClick=
              {() => handleSizeChange("small")}
            </div>
            <div className="rounded-full bg-slate-300 hover:bg-slate-400 p-2 w-20 text-center">
              medium handleSizeChange("medium") onClick=
              {() => handleSizeChange("medium")}
            </div>
            <div className="rounded-full bg-slate-300 hover:bg-slate-400 p-2 w-14 text-center">
              large handleSizeChange("large") onClick=
              {() => handleSizeChange("large")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
