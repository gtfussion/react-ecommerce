import axios from "axios";
import { useEffect, useState } from "react";
import { URL } from "../api/constants";

export const useGetProductsDetails = (id) => {
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchProductDetails = async (id) => {
    setLoading(true);
    let { data } = await axios.get(URL.getProductDetail(id));
    setProductDetails(data);
    setLoading(false);
  };

  useEffect(() => {
    if (id) fetchProductDetails(id);
  }, [id]);

  return { productDetails, loading };
};
