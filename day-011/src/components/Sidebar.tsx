import {
  FaBell,
  FaBookmark,
  FaEllipsisH,
  FaHome,
  FaList,
  FaSearch,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export const Sidebar = () => {
  return (
    <div className="min-h-screen min-w-fit">
      <div className="mx-auto w-full max-w-xs mt-8">
        <div className="text-blue-500 text-2xl p-4 max-w-xs">
          <FaTwitter className="w-8 h-8" />
        </div>
        <div className="space-y-2 p-4 font-bold">
          {[
            { label: "Home", icon: <FaHome /> },
            { label: "Explore", icon: <FaSearch /> },
            { label: "Notifications", icon: <FaBell /> },
            { label: "Messages", icon: <FaMessage /> },
            { label: "Bookmarks", icon: <FaBookmark /> },
            { label: "Lists", icon: <FaList /> },
            { label: "Profile", icon: <FaUser /> },
            { label: "More", icon: <FaEllipsisH /> },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 py-2">
              {item.icon} <span>{item.label}</span>
            </div>
          ))}
        </div>

        <button className="text-center justify-center bg-blue-500 px-4 py-2 text-white p-2 rounded-full w-full flex items-center gap-2">
          Tweet
        </button>
      </div>
    </div>
  );
};
