import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center px-4 py-2 bg-linear-to-b from-emerald-200 to-emerald-400 text-neutral-800 border comic-relief-regular text-lg">
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/fashion">Fashion</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/series">Series</Link>
        <Link to="/music">Music</Link>
      </div>
    </div>
  );
}
