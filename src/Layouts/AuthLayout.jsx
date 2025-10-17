import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components/header";
import { useUserStore } from "../store/UserStore";
import { useEffect } from "react";

export const AuthLayout = () => {
  const navigate = useNavigate();
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="h-screen">
      <Header />
      <div className="bg-white h-[calc(100vh-64px)] overflow-auto text-black">
        <Outlet />
      </div>
    </div>
  );
};
