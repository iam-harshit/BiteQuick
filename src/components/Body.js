import RestaurantCard, { withLabelPromoted } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RESTARURANTS_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [loading, setLoading] = useState(true);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurantData, setFilterRestaurantData] = useState([]);
  const RestaurantCardPromoted = withLabelPromoted();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.allorigins.win/raw?url=' + encodeURIComponent(RESTARURANTS_API));
      const output = await response.json();
      setListOfRestaurants(
        output?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterRestaurantData(
        output?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body px-4 md:px-8 lg:px-16 py-8">
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="flex items-center space-x-2 md:space-x-1 bg-white border p-2 rounded-md shadow-lg w-full md:w-[400px] lg:w-1/3">
          <input
            className="flex-grow outline-none px-2 py-1"
            type="text"
            placeholder="Search restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-[#8DC73F] hover:bg-[#63c132] text-white rounded-md px-2 md:px-4 py-1 md:py-2 transition duration-300 ease-in-out"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterRestaurantData(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="mt-6 md:mt-0">
          <button
            className="border w-full md:w-auto p-2 rounded-md bg-[#8DC73F] text-white shadow-lg hover:bg-[#63c132] transition duration-300 ease-in-out"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) => {
                return res?.info?.avgRating > 4;
              });
              setFilterRestaurantData(filteredRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container flex flex-wrap justify-center items-center mb-10">
        {loading ? (
          <Shimmer />
        ) : (
          filterRestaurantData?.map((restaurant) => {
            return (
              <Link
                key={restaurant?.info.id}
                to={"/restaurants/" + restaurant?.info.id}
              >
                {restaurant?.info?.promoted ? (
                  <RestaurantCardPromoted restaurantData={restaurant?.info} />
                ) : (
                  <RestaurantCard restaurantData={restaurant?.info} />
                )}
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
