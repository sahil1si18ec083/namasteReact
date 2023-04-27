import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "./applicationConfig";
const Body = () => {
  console.log(restaurantList);
  return (
    <React.Fragment>
      <div className="body">
        <div className="Search">Search</div>
        <div className="res-container">
          {restaurantList.map((item, index) => (
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
