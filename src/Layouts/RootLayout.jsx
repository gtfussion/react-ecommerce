import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Sidebar } from "../components/Sidebar";

export const RootLayout = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="bg-white h-[calc(100vh-64px)] overflow-auto text-black">
        <Outlet />
      </div>
    </div>
  );
};
