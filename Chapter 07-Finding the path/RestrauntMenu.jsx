import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { restoImageUrl } from "../Chapter 04 - Talk is Cheap, show me the code/Utility/Constant";
import { swiggyDetailApi } from "../Chapter 04 - Talk is Cheap, show me the code/Utility/Constant";
import Shimmer from "../Chapter 04 - Talk is Cheap, show me the code/Utility/Shimmer";
import useRestaurant from "../Chapter 04 - Talk is Cheap, show me the code/Utility/Hooks/useRestaurant";
import RestaurantMenuBody from "./RestaurantMenuBody";
const RestrauntMenu = () => {
  const { id } = useParams();
  const resData = useRestaurant(id); // this useRestaurant is a custom hook

  return resData === null ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <div className="flex  p-16 space-x-6 justify-center mt-24 bg-gray-900 text-gray-100">
          {/* <h1>Restaurant id: {id}</h1>
          <h2>{resData?.data?.cards?.at(0)?.card?.card?.info?.name}</h2> */}
          <img
            className="w-96 rounded-md"
            src={`${restoImageUrl}${
              resData?.data?.cards?.at(0)?.card?.card?.info?.cloudinaryImageId
            }`}
            alt=""
          />
          <div className="justify-center space-y-1">
            <h1 className="text-4xl font-semibold ">
              {resData?.data?.cards?.at(0)?.card?.card?.info?.name}{" "}
            </h1>
            <h3 className="text-2xl">
              📍 {resData?.data?.cards?.at(0)?.card?.card?.info?.areaName},{" "}
              {resData?.data?.cards?.at(0)?.card?.card?.info?.city}
            </h3>
            <h3 className="text-2xl">
              🌟{" "}
              {resData?.data?.cards?.at(0)?.card?.card?.info?.avgRatingString +
                " " +
                "stars"}
            </h3>
            <h3 className="text-2xl">
              🍲 ₹{resData?.data?.cards[0].card.card.info.costForTwo / 100} for
              two
            </h3>
          </div>
        </div>

        <RestaurantMenuBody resData={resData} />
      </div>
    </>
  );
};

export default RestrauntMenu;
