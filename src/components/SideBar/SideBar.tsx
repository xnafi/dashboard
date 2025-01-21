import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaProjectDiagram,
  FaUserTie,
  FaCog,
} from "react-icons/fa";

export default function SideBar() {
  type SidebarLink = {
    name: string;
    path: string;
    icon: JSX.Element;
  };

  const sidebarLinks: SidebarLink[] = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Members", path: "/members", icon: <FaUsers /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    { name: "Clients", path: "/clients", icon: <FaUserTie /> },
    { name: "Settings", path: "/settings", icon: <FaCog /> },
  ];

  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 bg-slate-500 h-screen">
      <nav className="flex flex-col space-y-4 px-2 md:px-4 py-4">
        {sidebarLinks.map((link) => (
          <NavLink
            to={link.path}
            key={link.name}
            className={({ isActive }) =>
              `flex items-center space-x-4 px-4 py-2 rounded-lg ${
                isActive ? "bg-blue-600" : "hover:bg-gray-700"
              }`
            }
          >
            {/* Icon */}
            <span className="text-xl">{link.icon}</span>

            {/* Text (Hidden on smaller screens) */}
            <span className="hidden md:block">{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
