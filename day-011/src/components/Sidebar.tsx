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
      <div className="mx-auto w-full max-w-xs">
        <div className="space-y-2 p-4 font-bold mt-8">
          {[
            { label: "Home", icon: <FaHome /> },
            { label: "Explore", icon: <FaSearch /> },
            { label: "Notifications", icon: <FaBell /> },
            { label: "Messages", icon: <FaMessage /> },
            { label: "Bookmarks", icon: <FaBookmark /> },
            { label: "Lists", icon: <FaList /> },
            { label: "Profile", icon: <FaUser /> },
            { label: "More", icon: <FaEllipsisH /> },
            { label: "Tweet", icon: <FaTwitter /> },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 py-2">
              {item.icon} <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
