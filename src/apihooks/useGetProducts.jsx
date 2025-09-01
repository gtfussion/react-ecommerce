import React, { useEffect } from "react";
import { useProducts } from "../store/ProductStore";
import axios from "axios";

export const useGetProducts = () => {
  const setProductList = useProducts((state) => state.setProductList);
  const setLoading = useProducts((state) => state.setLoading);

  const fetchProducts = async () => {
    setLoading(true);
    let { data } = await axios.get("https://dummyjson.com/products");
    setProductList(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return null;
};
