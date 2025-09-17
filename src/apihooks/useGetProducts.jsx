import { useProducts } from "../store/ProductStore";
import axios from "axios";
import { URL } from "../api/constants";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = (page) => {
  const skip = page * 10 - 10;
  return axios.get(URL.getProducts + `?limit=12&skip=${skip}`); //fetcher
};
export const useGetProducts = (page) => {
  const setProductList = useProducts((state) => state.setProductList);
  const setLoading = useProducts((state) => state.setLoading);

  const { data, isLoading, ...rest } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProducts(page),
    select: (data) => {
      return data.data;
    },
    onSuccess: () => {},
  });

  if (data && isLoading == false) {
    setProductList(data.products);
  }
  setLoading(isLoading);

  return { data, isLoading, ...rest };
};
