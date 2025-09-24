import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsByCategory } from "../apihooks/useGetProductsByCategory";
import { Product } from "../components/Product";
import { Sidebar } from "../components/Sidebar";
// import { useState } from "react";

export const CategoryProducts = () => {
  // const filters = useProducts((state) => state.filters);
  // const loading = useProducts((state) => state.loading);
  // const productList = useProducts((state) => state.productList);
  const [page, setPage] = useState(1);
  const { catId } = useParams();
  // useGetProducts(page);
  const { data, isLoading: loading } = useGetProductsByCategory(catId);
  const productList = data?.products;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          {productList.map((product) => {
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
