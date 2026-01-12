import "./App.css";

export const App = () => {
  return (
    <div className="min-h-screen w-full py-8">
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
            <div className="rounded-full bg-slate-300 hover:bg-slate-400 p-2 w-15 text-center"></div>
            <div className="rounded-full bg-slate-300 hover:bg-slate-400 p-2 w-20 text-center"></div>
            <div className="rounded-full bg-slate-300 hover:bg-slate-400 p-2 w-14 text-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
