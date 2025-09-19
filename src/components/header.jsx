import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import { FaShoppingCart } from "react-icons/fa";
//@ts-check
export const Header = () => {
  return (
    <div className="flex justify-between p-4 bg-slate-800 ">
      <img src={logo} />
      <div className="gap-2 flex">
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
        <Link title="Go to Cart" to="/cart">
          <FaShoppingCart size={20} />
        </Link>
      </div>
    </div>
  );
};
