import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useGetProductsDetails } from "../apihooks/useGetProductDetails";
import { TextInput } from "../components/TextInput";

export const ProductDetails = () => {
  //   const { state } = useLocation();
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImage] = useState(0);

  const { productDetails: data, loading: loadingProdcutDetails } =
    useGetProductsDetails(id);

  const calculateDiscountedAmount = (price, discountPercentage) =>
    price - (price * discountPercentage) / 100;

  if (loadingProdcutDetails && data) return <>Loading.... </>;
  return (
    <div className="bg-amber-50 text-black px-32 py-14">
      <h1 className="text-3xl font-bold ">{data.title}</h1>
      <hr className="my-6 " />
      <div className="grid grid-cols-2 gap-20">
        <div className="flex flex-col items-center">
          <div className="w-3/4">
            <img src={data.images?.[selectedImageIndex]} />
          </div>
          <div className="flex gap-4 ">
            {data?.images?.map((eachImage, index) => (
              <div
                onClick={() => setSelectedImage(index)}
                key={index}
                className={` relative h-40 w-40 cursor-pointer  ${
                  index === selectedImageIndex ? "border border-green-500" : ""
                } rounded-sm`}
              >
                <div className="absolute h-full w-full bg-transparent hover:bg-green-300 opacity-20 "></div>
                <img src={eachImage} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p>
            Brand : <strong>{data.brand}</strong>{" "}
          </p>
          <p>{data.description}</p>

          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <span className="text-red-500 font-bold text-2xl">
                $
                {calculateDiscountedAmount(
                  data.price,
                  data.discountPercentage
                ).toFixed(2)}
              </span>
              <span className="line-through"> ${data?.price}</span>

              <span className="text-white bg-red-500  px-2 py-1 rounded-sm">
                {data.discountPercentage} %
              </span>
            </div>
            <FaStar />
          </div>
          <div className="flex gap-4">
            <TextInput
              type="number"
              className={"border-1 rounded-none"}
              placeholder="Quantity"
            />
            <button className="w-full text-white bg-black rounded-2xl px-4 py-2 flex justify-center items-center">
              Add to cart
            </button>
            <button className="w-full text-black border  rounded-2xl px-4 py-2 flex justify-center items-center">
              Favourite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
