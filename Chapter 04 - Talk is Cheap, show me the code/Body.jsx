import React from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Utility/Shimmer";
import { useState } from "react";
import { useEffect } from "react";
import { swiggy_api_URL } from "./Utility/Constant";
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
    setFilteredRestaurants(
      allRestaurants.filter((restaurantItem, restaurantindex) =>
        restaurantItem.data.name
          .toLowerCase()
          .includes(searchText.toLowerCase())
      )
    );
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
                <RestaurantCard
                  restaurantList={filteredRestaurants}
                  index={index}
                  key={filteredRestaurants[index].data.id}
                />
              ))
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
export default Body;
