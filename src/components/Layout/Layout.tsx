import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
export default function Layout() {
  return (
    <>
      <SideBar />
      <div className="flex flex-col ml-28 md:ml-52">
        <Header />
        <Outlet />
      </div>
    </>
  );
}
