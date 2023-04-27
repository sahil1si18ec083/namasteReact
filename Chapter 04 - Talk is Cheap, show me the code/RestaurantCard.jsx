import React from "react";
const RestaurantCard = ({ restaurantList, index }) => {
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
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        alt="res-logo"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")} </h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo / 100}</h4>
      <h4>{`${deliveryTime} minutes`}</h4>
    </div>
  );
};
export default RestaurantCard;
