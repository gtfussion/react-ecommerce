import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Sidebar } from "../components/Sidebar";

export const RootLayout = () => {
  return (
    <div className="h-screen">
      <Header />
      <Outlet />
    </div>
  );
};
