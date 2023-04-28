import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "./Utility/applicationConfig";
import { useState } from "react";
const Body = () => {
  console.log(restaurantList);
  const [arestaurantList, setRestaurantList] = useState(restaurantList);
  const filterHandler = (event) => {
    console.log(event);

    setRestaurantList(
      arestaurantList.filter(
        (item, index) => Number(item.data.avgRating) >= 4.5
      )
    );
  };
  return (
    <React.Fragment>
      <div className="body">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={(event) => filterHandler(event)}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="res-container">
          {arestaurantList.map((item, index) => (
            <RestaurantCard
              restaurantList={restaurantList}
              index={index}
              key={restaurantList[index].data.id}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Body;
