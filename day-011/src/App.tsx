import { Composer } from "./components/Composer";
import { Search } from "./components/Search";
import { Sidebar } from "./components/Sidebar";
import { Timeline } from "./components/Timeline";

export const App = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-[1fr_2fr_1fr] bg-white">
      <Sidebar />
      <div className="flex-1 border-x">
        <div className="border-b w-full">
          <h1 className="text-neutral-700 text-2xl font-bold p-4">Home</h1>
        </div>
        <Composer />
        <Timeline />
      </div>
      <div className="p-4">
        <Search />
      </div>
    </div>
  );
};
