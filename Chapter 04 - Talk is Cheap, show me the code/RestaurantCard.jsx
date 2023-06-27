import React from "react";
import { restoImageUrl } from "./Utility/Constant";
const RestaurantCard = ({ restaurantList, index, user }) => {
console.log(user)
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  
  } = restaurantList[index].data;
  return (
    <div
      className="res-card"
      style={{
        background: "rgb(144,144,144)",
      }}
    >
      <img
        src={`${restoImageUrl}${cloudinaryImageId}`}
        alt="res-logo"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")} </h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo / 100}</h4>
      <h4>{`${deliveryTime} minutes`}</h4>
      <h5>{user.name}</h5>
    </div>
  );
};
export default RestaurantCard;
