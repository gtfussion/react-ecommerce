import { FaStar } from "react-icons/fa6";
import camera from "../assets/camera.jpg";
import { useNavigate } from "react-router-dom";
export const Product = (props) => {
  const { data } = props;
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/product/${data.id}`, { state: { data } });
  };

  const addToCart = (e) => {
    e.stopPropagation();
    //get items from local storage
    const cartItems = localStorage.getItem("cart");
    const cardData = cartItems ? JSON.parse(cartItems) : [];

    // const userToken = localStorage.getItem('sessionId')
    // cardData[userToken]

    //"[prodcut1,product2 ,proct3]" preivous

    //"{
    // 'token1':[prodcut1,product2 ,proct3],
    // 'token2':[prodcut1,product2 ,proct3],
    // 'token3':[prodcut1,product2 ,proct3],
    // }"
//
    //find the item with the same id
    const itemIndex = cardData.findIndex((item) => item.id === data.id);

    //if found increase the quantity
    if (itemIndex !== -1) {
      cardData[itemIndex].quantity += 1;
    }
    //if not found add the item with quantity 1
    else {
      cardData.push({ ...data, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cardData));
  };

  return (
    <div
      onClick={onCardClick}
      className="flex flex-col justify-between w-full group rounded-2xl bg-white overflow-hidden shadow-md hover:shadow-lg hover:shadow-green-200 cursor-pointer"
    >
      <div className="min-h-48">
        <img
          className=" transform transition-all duration-300 group-hover:scale-105"
          src={data.images[0] ?? camera}
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <p className="font-bold text-xl">{data.title}</p>
        <p className="text-sm text-slate-400 truncate">{data.description}</p>
        <div className="flex justify-between">
          <p className=" transform transition-all duration-300 text-lg font-[600] group-hover:text-green-500 ">
            $ {data.price}
          </p>
          <span className="flex items-center">
            <FaStar className="text-amber-300" />
            {data.rating}/5
          </span>
        </div>
        <button
          onClick={addToCart}
          className="w-full text-white bg-black rounded-2xl px-4 py-2 flex justify-center"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
