import { Product } from "../components/Product";
import { Sidebar } from "../components/Sidebar";
import { useProducts } from "../store/ProductStore";
import { useGetProducts } from "../apihooks/useGetProducts";

export const ProductListing = () => {
  useGetProducts();
  const filters = useProducts((state) => state.filters);
  const loading = useProducts((state) => state.loading);
  const productList = useProducts((state) => state.productList);
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
            .filter(
              (product) =>
                (filters.category == ""
                  ? true
                  : product.category === filters.category) &&
                parseInt(product.rating) === filters.rating &&
                (product.title
                  .toLowerCase()
                  .includes(filters.searchText.toLowerCase()) ||
                  product.description
                    .toLowerCase()
                    .includes(filters.searchText.toLowerCase()))
            )
            .map((product) => {
              return <Product data={product} />;
            })}
        </div>
      </div>
    </div>
  );
};
