import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
//@ts-check
export const Header = () => {
  return (
    <div className="flex justify-between p-4 ">
      <img src={logo} />
      <div className="gap-2 flex">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};
