import { Search, Bell, Moon, Languages, Grid2x2Plus } from "lucide-react";

export default function Header() {
  return (
    <div className="fixed top-0 left-60 w-[calc(100%-14rem)] h-[60px] bg-white mt-4 mb-4 ml-4 mr-4 max-w-[1100px] flex items-center px-6 justify-between z-50">
      {/* Left Section: Search Bar */}
      <div className="relative flex items-center w-[300px]  px-4 py-2 ">
        <Search className="w-5 h-5 text-gray-600" />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
        />
      </div>

      {/* Right Section: Icons & Profile */}
      <div className="flex items-center space-x-6 bg-white px-4 py-2 rounded-lg ">
        <Languages className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
        <Grid2x2Plus className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
        <Moon className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800" />

        {/* Profile Image */}
        <img
          src="https://randomuser.me/api/portraits/men/50.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full cursor-pointer border-2 border-gray-300"
        />
      </div>
    </div>
  );
}
