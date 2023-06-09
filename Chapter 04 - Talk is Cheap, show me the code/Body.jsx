import React from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Utility/Shimmer";
import { useState } from "react";
import { useEffect } from "react";
import { swiggy_api_URL } from "./Utility/Constant";
import { Link } from "react-router-dom";
import Helper from "./Utility/Helper";
import useCheckOnline from "./Utility/Hooks/useCheckOnline";
const Body = () => {
  console.log("render");
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");
  const inputhandleChange = (event) => {
    setSearchText(event.target.value);
  };
  const searchHandler = () => {
    setFilteredRestaurants(Helper(allRestaurants, searchText));
  };

  useEffect(() => {
    getRestaurants();
  }, []);
  const getRestaurants = async () => {
    const data = await fetch(swiggy_api_URL);
    console.log(data);
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards?.at(2)?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards?.at(2)?.data?.data?.cards);
  };
  const online = useCheckOnline();
  if (!online) {
    return <h1>Please check your internet connection</h1>;
  }
  return (
    <React.Fragment>
      <div className="body">
        <div className="search-container">
          <input
            type="text"
            value={searchText}
            className="search-input"
            placeholder="Search a restaurant you want..."
            onChange={(e) => inputhandleChange(e)}
          />
          <button className="search-btn" onClick={searchHandler}>
            Search
          </button>
        </div>
        {allRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="res-container">
            {filteredRestaurants.length === 0 && allRestaurants.length !== 0 ? (
              <p>No Restaurant found your filter</p>
            ) : (
              filteredRestaurants?.map((item, index) => (
                <Link
                  to={`/restaurant/${filteredRestaurants[index].data.id}`}
                  key={filteredRestaurants[index].data.id}
                >
                  <RestaurantCard
                    restaurantList={filteredRestaurants}
                    index={index}
                  />
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
export default Body;
