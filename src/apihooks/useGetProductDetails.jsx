import axios from "axios";
import { URL } from "../api/constants";
import { useQuery } from "@tanstack/react-query";

const fetchProductDetails = (id) => {
  //fetcher
  return axios.get(URL.getProductDetail(id));
};
export const useGetProductsDetails = (id) => {
  return useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => fetchProductDetails(id),
    select: (data) => data.data,
  });
};
