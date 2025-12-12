import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import { FaShoppingCart } from "react-icons/fa";
import { useUserStore } from "../store/UserStore";
//@ts-check
export const Header = () => {
  const sessionId = useUserStore((state) => state.sessionId);
  const user = useUserStore((state) => state.user);

  return (
    <div className="flex justify-between p-4 bg-slate-800 ">
      <img src={logo} />
      <div className="gap-20 hidden md:flex ">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        {sessionId && (
          <Link title="Go to Cart" to="/cart">
            <FaShoppingCart size={20} />
          </Link>
        )}
        {!sessionId ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/logout">Logout</Link>
        )}
        {sessionId && <span className="text-green-500">{user()?.name}</span>}
      </div>
    </div>
  );
};
