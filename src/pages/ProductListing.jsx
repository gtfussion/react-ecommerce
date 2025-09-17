import { Product } from "../components/Product";
import { Sidebar } from "../components/Sidebar";
import { useProducts } from "../store/ProductStore";
import { useGetProducts } from "../apihooks/useGetProducts";
import { useState } from "react";
// import { useState } from "react";

export const ProductListing = () => {
  // const filters = useProducts((state) => state.filters);
  const loading = useProducts((state) => state.loading);
  // const [page, setPage] = useState(0);
  const productList = useProducts((state) => state.productList);
  const [page, setPage] = useState(1);
  useGetProducts(page);
  if (loading)
    return (
      <div className="w-full h-full flex justify-center items-center">
        Loading...
      </div>
    );
  return (
    <div className="grid grid-cols-5 h-[92%]">
      <div className="hidden md:block col-span-1 p-4">
        <Sidebar />
      </div>
      <div className="col-span-4 bg-amber-50  text-black">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 grid-cols-1 bg-slate-200 p-8">
          {productList
            // .filter(
            //   (product) =>
            //     (filters.category == ""
            //       ? true
            //       : product.category === filters.category) &&
            //     parseInt(product.rating) === filters.rating &&
            //     (product.title
            //       .toLowerCase()
            //       .includes(filters.searchText.toLowerCase()) ||
            //       product.description
            //         .toLowerCase()
            //         .includes(filters.searchText.toLowerCase()))
            // )
            .map((product) => {
              return <Product data={product} />;
            })}
        </div>
        <div className="flex justify-center items-center gap-4 my-4">
          <button onClick={() => setPage(1)}>1</button>
          <button onClick={() => setPage(2)}>2</button>
          <button onClick={() => setPage(3)}>3</button>
          <button onClick={() => setPage(4)}>4</button>
          <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </div>
    </div>
  );
};
