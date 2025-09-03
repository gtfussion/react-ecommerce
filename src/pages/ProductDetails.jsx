import { useParams } from "react-router-dom";
import { useGetProductsDetails } from "../apihooks/useGetProductDetails";

export const ProductDetails = () => {
  //   const { state } = useLocation();
  const { id } = useParams();

  const { productDetails: data, loading: loadingProdcutDetails } =
    useGetProductsDetails(id);

  if (loadingProdcutDetails) return <>Loading.... </>;
  return <div>{JSON.stringify(data)}</div>;
};
