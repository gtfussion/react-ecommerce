import React from "react";
export const CartCard = ({ product }) => {
  const [quantity, setQuantity] = React.useState(product.quantity || 1);
  const total = product.price * (quantity || 1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  //update the local storage

  return (
    <div className="grid grid-cols-6 gap-4 pb-4 mb-4  border-b-2 border-gray-200">
      <div className="col-span-3 ">
        <div className="flex gap-4">
          <img className=" w-2/5 rounded-xl" src={product.thumbnail} />
          <div className="flex flex-col justify-start items-start">
            <strong>{product.title}</strong>
            <p className="text-start">{product.description}</p>
          </div>
        </div>
      </div>

      <div>$ {product.price}</div>
      <div className="flex justify-center items-center">
        <button
          onClick={decreaseQuantity}
          className="p-2 justify-center flex items-center m-2 border-1 h-10 w-10 rounded-md bg-slate-100"
        >
          -
        </button>
        <input
          type="text"
          className="w-8 text-center outline-none"
          value={quantity}
        />
        <button
          onClick={increaseQuantity}
          className="p-2 justify-center flex items-center m-2 border-1 h-10 w-10 rounded-md bg-slate-100"
        >
          +
        </button>
      </div>
      <div>${total.toFixed(2)}</div>
    </div>
  );
};
