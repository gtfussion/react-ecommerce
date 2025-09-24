import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "../api/constants";

const fetchProducts = (category) => {
  return axios.get(URL.getProductsByCat(category) + `?limit=10`); //fetcher
};
export const useGetProductsByCategory = (category) => {
  return useQuery({
    queryKey: ["products/category", category],
    queryFn: () => fetchProducts(category),
    select: (data) => {
      return data.data;
    },
  });
};
