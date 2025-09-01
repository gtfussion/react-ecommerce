//@ts-check

import { Link } from "react-router-dom";
import { Header } from "../components/header";

export const Home = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Link to={"about"}>About</Link>
    </div>
  );
};
