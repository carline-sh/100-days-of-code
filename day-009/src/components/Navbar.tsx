import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center px-4 py-2 bg-linear-to-b from-emerald-200 to-emerald-400 text-neutral-800 border comic-relief-regular text-lg flex-wrap md:flex-nowrap">
        {[
          { path: "/", label: "Home" },
          { path: "/news", label: "News" },
          { path: "/fashion", label: "Fashion" },
          { path: "/movies", label: "Movies" },
          { path: "/series", label: "Series" },
          { path: "/music", label: "Music" },
        ].map((item) => (
          <Link to={item.path} className="px-2 py-1  hover:underline">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
