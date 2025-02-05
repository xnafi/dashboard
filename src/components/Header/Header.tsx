import { useEffect, useState } from "react";
import { Search, Bell, Moon, Sun, Languages, Grid2x2Plus } from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="fixed top-0 left-60 w-[calc(100%-14rem)] h-[60px] bg-white dark:bg-gray-800 dark:text-white mt-4 mb-4 ml-8 max-w-[1055px] flex items-center px-6 justify-between z-50">
      {/* Left Section: Search Bar */}
      <div className="relative flex items-center w-[300px] px-4 py-2">
        <Search className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 w-full bg-transparent outline-none text-sm text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>

      {/* Right Section: Icons & Profile */}
      <div className="flex items-center space-x-6 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg">
        <Languages className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer hover:text-gray-800 dark:hover:text-gray-100" />
        <Grid2x2Plus className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer hover:text-gray-800 dark:hover:text-gray-100" />
        
        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <Sun className="w-5 h-5 text-gray-300 cursor-pointer hover:text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer hover:text-gray-800 dark:hover:text-gray-100" />
          )}
        </button>

        <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer hover:text-gray-800 dark:hover:text-gray-100" />

        {/* Profile Image */}
        <img
          src="https://randomuser.me/api/portraits/men/50.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full cursor-pointer border-2 border-gray-300 dark:border-gray-600"
        />
      </div>
    </div>
  );
}
