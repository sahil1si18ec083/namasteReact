import React from "react";
import { restoImageUrl } from "./Utility/Constant";
import { useContext } from "react";
import UserContext from "../Chapter 10- Jo dikhta hai vo bikta hai/utils/userContext";
const RestaurantCard = ({ restaurantList, index, user }) => {
  console.log(restaurantList[index]);
  console.log(user);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    lastMileTravelString,
  } = restaurantList[index].data;
  const { userObj } = useContext(UserContext);
  console.log(userObj);
  return (
    <div
      className="w-56 p-4 m-3 h-72 border border-gray-100 bg-gray rounded-md  hover:shadow-lg bg-gray-50"
      // style={{
      //   background: "rgb(144,144,144)",
      // }}
    >
      <img
        src={`${restoImageUrl}${cloudinaryImageId}`}
        alt="res-logo"
        className="rounded-md"
      />
      <h2 className="text-xl font-semibold py-1">{name}</h2>
      <h3 className="cuisines text-sm text-gray-500 break-words">
        {cuisines.join(",")}{" "}
      </h3>
      <h4 className="text-sm pt-2">📍 {lastMileTravelString} away</h4>
      {/* <h4>{avgRating}</h4>
      <h4>{costForTwo / 100}</h4>
      <h4>{`${deliveryTime} minutes`}</h4>
      <h5>{userObj.name}</h5> */}
    </div>
  );
};
export default RestaurantCard;
