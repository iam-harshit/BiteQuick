//In this way we can import named export component
import { CDN_URL } from "../utils/constants";
import {AiFillStar} from "react-icons/ai";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const {
    name,
    cuisines,
    costForTwo,
    deliveryTime,
    avgRating,
    cloudinaryImageId,
  } = restaurantData;

  return (
    <div className="restaurant-card m-4 border w-[250px] h-[400px] overflow-hidden rounded-lg hover:shadow-xl">
      <div className="h-[150px] flex items-center justify-center overflow-hidden rounded-t-md bg-gray-200"> {/* This div has a fixed height and will center its content */}
        <img
          className="res-img w-full h-full object-cover" 
          src={CDN_URL + cloudinaryImageId}
          alt="res-food"
        />
      </div>
      <div className="p-3">
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        <h4 className="mb-2">{cuisines.join(", ")}</h4>
        <h4 className="mb-2">{costForTwo}</h4>
        <div className="flex items-center">
        <h4 className="mb-2">{avgRating}</h4>
        <AiFillStar className= "text-yellow-400 mb-1 ml-1"/>
        </div>
      </div>
    </div>
  );
};

// Higher Order Component
export const withLabelPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
