import { CartCard } from "../components/Cart/CartCard";

export const Cart = () => {
  const cartItems = localStorage.getItem("cart");
  const cartList = cartItems ? JSON.parse(cartItems) : [];
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div>
        <h1 className="text-3xl font-bold"> Shopping Bag</h1>
        <p className="text-lg mt-2">
          <span className="font-semibold">{cartList.length} items</span> in your
          Bag
        </p>
      </div>
      <div className="p-10 shadow-lg rounded-4xl ">
        <div className="grid grid-cols-6 gap-4 pb-4 mb-4 font-semibold ">
          <p className="col-span-3">Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total Price</p>
        </div>
        <div></div>
        {cartList.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartList.map((product) => <CartCard product={product} />)
        )}
      </div>
    </div>
  );
};
