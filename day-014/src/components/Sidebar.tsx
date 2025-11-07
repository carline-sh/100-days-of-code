import { Link } from "@tanstack/react-router";

export const Sidebar = () => {
  return (
    <div className="flex w-full flex-col">
      <header className="bg-neutral-800 p-4 flex space-between gap-8 grow text-neutral-400">
        <h1 className="font-bold text-white">BitWiser</h1>
        <Link to="/">Daily Microlearning</Link>
        <Link to="/history">History</Link>
      </header>
    </div>
  );
};
