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
    notification?: number;
  };

  const mainLinks: SidebarLink[] = [
    { name: "Dashboard", path: "/", icon: <FaHome />, notification: 3 },
    { name: "Analytics", path: "/analytics", icon: <FaUsers /> },
    { name: "CRM", path: "/crm", icon: <FaProjectDiagram /> },
    { name: "eCommerce", path: "/ecommerce", icon: <FaUserTie /> },
  ];

  const appsAndPagesLinks: SidebarLink[] = [
    { name: "Calendar", path: "/calendar", icon: <FaCog /> },
    { name: "Invoice", path: "/invoice", icon: <FaCog />, notification: 2 },
    { name: "Users", path: "/users", icon: <FaUsers /> },
    { name: "Roles & Permissions", path: "/roles", icon: <FaProjectDiagram /> },
    { name: "Pages", path: "/pages", icon: <FaUserTie /> },
    { name: "Authentications", path: "/auth", icon: <FaCog /> },
  ];

  return (
    <div className="w-64 fixed left-0 top-0 bg-white h-screen shadow-lg z-[999]">
      {/* Sidebar Header */}
      <div className="flex items-center px-4 py-6">
        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
          V
        </div>
        <h1 className="text-xl font-bold ml-3">Vuexy</h1>
      </div>

      {/* Navigation Links */}
      <nav className="mt-6">
        {/* Main Links */}
        <ul className="space-y-1">
          {mainLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-md ${
                    isActive
                      ? "bg-purple-100 text-purple-700 font-semibold"
                      : "hover:bg-gray-100 text-gray-700"
                  }`
                }
              >
                <span className="text-xl">{link.icon}</span>
                <span className="ml-3 flex-1">{link.name}</span>
                {link.notification && (
                  <span className="bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {link.notification}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Apps & Pages Section */}
        <div className="mt-8 px-4 text-gray-500 text-sm font-semibold uppercase">
          Apps & Pages
        </div>
        <ul className="space-y-1 mt-2">
          {appsAndPagesLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-md ${
                    isActive
                      ? "bg-purple-100 text-purple-700 font-semibold"
                      : "hover:bg-gray-100 text-gray-700"
                  }`
                }
              >
                <span className="text-xl">{link.icon}</span>
                <span className="ml-3 flex-1">{link.name}</span>
                {link.notification && (
                  <span className="bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {link.notification}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
