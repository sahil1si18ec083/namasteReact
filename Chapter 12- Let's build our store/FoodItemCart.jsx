import React from "react";
import { restoImageUrl } from "../Chapter 04 - Talk is Cheap, show me the code/Utility/Constant";

const FoodItemCart = ({ Cartitem }) => {
  return (
    <div
      className="w-56 p-4 m-3 h-72 border border-gray-100 bg-gray rounded-md  hover:shadow-lg bg-gray-50"
      // style={{
      //   background: "rgb(144,144,144)",
      // }}
    >
      <img
        src={`${restoImageUrl}${Cartitem?.imageId}`}
        alt="res-logo"
        className="rounded-md"
      />
      <h2 className="text-xl font-semibold py-1">{Cartitem?.name}</h2>
      {/* <h3 className="cuisines text-sm text-gray-500 break-words">
        {cuisines.join(",")}{" "}
      </h3> */}
      <h4 className="text-sm pt-2"> Rs.{Cartitem?.price / 100} </h4>
    </div>
  );
};
export default FoodItemCart;
