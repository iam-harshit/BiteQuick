import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const restaurantMenu = useRestaurantMenu(resId);

  if (!restaurantMenu || restaurantMenu.length === 0) {
    return <RestaurantMenuShimmer />;
  }

  if (restaurantMenu == null) return;

  const { name, cuisines } = restaurantMenu?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  const categories =
    restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold mt-8 text-2xl">{name}</h1>
      <p className="font-bold text-lg mb-8">{cuisines.join(", ")}</p>
      {/* Categories accordion */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {
            setShowIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
