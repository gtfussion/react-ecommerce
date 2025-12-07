import axios, { AxiosResponse } from "axios";
import { URL } from "../api/constants";
import { useQuery } from "@tanstack/react-query";
import { ProductType } from "../types/productModel";

const fetchProductDetails = (id: string) => {
  //fetcher
  return axios.get(URL.getProductDetail(id));
};
export const useGetProductsDetails = (id: string) => {
  return useQuery<AxiosResponse<ProductType, number>>({
    queryKey: ["productDetails", id],
    queryFn: () => fetchProductDetails(id),
  });
};
