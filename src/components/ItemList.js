import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
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
            <p className="text-xs pb-2">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-full rounded-lg"
            />
            <div>
              <button
                className="p-2 px-3 bg-[#8DC73F] text-white rounded-lg absolute bottom-0 left-1/2 transform -translate-x-8 hover:bg-[#63c132] transition duration-300 ease-in-out"
                onClick={() => addItemHandler(item)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
