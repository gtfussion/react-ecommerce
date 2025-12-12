import { Link } from "react-router-dom";
import { useGetProductsByCategory } from "../../apihooks/useGetProductsByCategory";
import { Product } from "../Product";

const capitalize = (value = "") => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const HorizontalProductView = ({ cat = "fragrances" }) => {
  const { data, isLoading } = useGetProductsByCategory(cat);
  if (isLoading && !data) {
    <div>loading</div>;
  }
  return (
    <div className="">
      <div className="flex justify-between my-4 px-4">
        <p className="text-2xl font-bold ">{capitalize(cat)}</p>
        <Link to={`products/category/${cat}`} className="underline">
          Show all
        </Link>
      </div>
      <div className="flex  gap-4 overflow-x-scroll  no-scrollbar">
        {data?.products.map((product, index) => (
          <div className=" max-w-72 min-w-[200px] md:w-full " id={index}>
            <Product data={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
