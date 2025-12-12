import { HorizontalProductView } from "../components/HomepageContents/HorizontalProductView";
import { HomeSlider } from "../components/HomeSlider";

export const Home = () => {
  return (
    <div>
      <HomeSlider />
      <div className="max-w-5xl w-full mx-auto bg-white md:mt-24">
        <HorizontalProductView />
        <HorizontalProductView cat={"smartphones"} />
        <HorizontalProductView cat={"groceries"} />
        <HorizontalProductView cat={"furniture"} />
      </div>
    </div>
  );
};
