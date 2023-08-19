import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";
import emptyCart from "../asset/empty-cart.png";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col w-6/12 m-auto text-center mt-10 pb-10">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Cart</h1>
        <button
          className="bg-[#8DC73F] hover:bg-[#63c132] text-white rounded-md px-4 py-2 transition duration-300 ease-in-out"
          onClick={clearCartHandler}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 && (
        <div>
          <img src={emptyCart} alt="" />
        </div>
      )}
      <div className="w-full pt-10">
        {cartItems.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <br />
                <span className="text-sm">
                  {" "}
                  ₹{" "}
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
            </div>
            <div className="py-4">
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="w-[100px] h-[100px] rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
