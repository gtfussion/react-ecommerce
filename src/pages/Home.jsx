//@ts-check

import { Link } from "react-router-dom";
import { Header } from "../components/header";
import { HomeSlider } from "../components/HomeSlider";
import { HorizontalProductView } from "../components/HomepageContents/HorizontalProductView";

export const Home = () => {
  return (
    <div>
      <HomeSlider />
      <div className="max-w-5xl w-full mx-auto bg-white mt-24">
        <HorizontalProductView />
        <HorizontalProductView cat={"smartphones"} />
        <HorizontalProductView cat={"groceries"} />
        <HorizontalProductView cat={"furniture"} />
      </div>
    </div>
  );
};
