import { Link } from "@tanstack/react-router";

export const Navbar = () => {
  return (
    <div className="">
      <div className="bg-neutral-700 min-h-screen w-full text-blue-500 p-4">
        <Link className="block text-2xl font-bold" to="/">
          TailRain
        </Link>
        <div className="text-white space-y-2 p-4">
          <Link className="block" to="/spacing">
            Spacing
          </Link>
          <Link className="block" to="/flex">
            Flex
          </Link>
          <div>Grid</div>
          <Link className="block" to="/colors">
            Colors
          </Link>
        </div>
      </div>
    </div>
  );
};
