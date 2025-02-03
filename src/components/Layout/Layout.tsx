import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
export default function Layout() {
  return (
    <div className="flex ">
      <SideBar />
      <div className="flex flex-col ml-16 md:ml-56 w-full h-screen bg-gray-50 dark:bg-gray-900  dark:text-gray-300">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
