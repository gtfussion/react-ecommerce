import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export const About = () => {
  return (
    <div>
      About
      <Outlet />
    </div>
  );
};
