import RestaurantCard, { withLabelPromoted } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurantData, setFilterRestaurantData] = useState([]);
  const netwrokStatus = useNetworkStatus();
  const RestaurantCardPromoted = withLabelPromoted();
  const { loggedInUser, setUserName } = useContext(UserContext);

  //Note for state variable: Whenever state variable update, react triggers a reconciliation cycle (re-renders the component).

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const output = await response.json();
    //Optional chaining
    setListOfRestaurants(
      // output?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      // ?.restaurants
      output?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRestaurantData(
      // output?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      //   ?.restaurants
      output?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //If no dependency array => useEffect is called on every render when our component is render.
  //If dependency array is empty = [] => useEffect is called on inital render (means just once).
  //If dependecy array have some dependency like listOfRestaurants => useEffect is called on everytime when listOfRestaurants is updated.
  useEffect(() => {
    fetchData();
  }, []);

  //This is called conditional rendering
  // if(listOfRestaurants.length === 0){
  //   // return <Shimmer/>
  // }

  if (netwrokStatus === false) {
    return "Looks like you're offline. Please check your internet connection";
  }

  // console.log(listOfRestaurants);

  return (
    <div className="body">
      <div className="flex justify-between m-10">
        <div className="flex items-center space-x-6 bg-white border p-2 rounded-md shadow-lg">
          <input
            className="flex-grow outline-none"
            type="text"
            placeholder="Search restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-[#8DC73F] hover:bg-[#63c132] text-white rounded-md px-4 py-2 transition duration-300 ease-in-out"
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
        <br />

        {/* <div className="search-btn">
          <label>Username Input: </label>
          <input
            className="border border-black p-1"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div> */}

        <br />
        <div>
          <button
            className="border p-2 rounded-md bg-[#8DC73F] text-white shadow-lg hover:bg-[#63c132] transition duration-300 ease-in-out"
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
      <div className="restaurant-container flex items-center justify-center flex-wrap mb-10">
        {filterRestaurantData?.map((restaurant) => {
          return (
            <Link
              key={restaurant?.info.id}
              to={"/restaurants/" + restaurant?.info.id}
            >
              {/* If the restaurant is promoted then add a promoted label to it. 
                TODO
                Change swiggy api
              */}
              {restaurant?.info?.promoted ? (
                <RestaurantCardPromoted restaurantData={restaurant?.info} />
              ) : (
                <RestaurantCard restaurantData={restaurant?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
