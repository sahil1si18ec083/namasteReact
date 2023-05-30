import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { swiggyDetailApi } from "../Chapter 04 - Talk is Cheap, show me the code/Utility/Constant";
import { restoImageUrl } from "../Chapter 04 - Talk is Cheap, show me the code/Utility/Constant";
import Shimmer from "../Chapter 04 - Talk is Cheap, show me the code/Utility/Shimmer";
const RestrauntMenu = () => {
  useEffect(() => {
    getResoInfo();
  }, []);
  const { id } = useParams();
  const [resData, setResData] = useState(null);
  const getResoInfo = () => {
    fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9569911&lng=77.6027732&restaurantId=${id}&submitAction=ENTER`
    )
      .then((data) => {
        return data.json();
      })
      .then((json) => {
        console.log(json);
        setResData(json);
      });
  };
  console.log(resData);
  return resData === null ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <div>
          <h1>Restaurant id: {id}</h1>
          <h2>{resData?.data?.cards?.at(0)?.card?.card?.info?.name}</h2>
          <img
            src={`${restoImageUrl}${
              resData?.data?.cards?.at(0)?.card?.card?.info?.cloudinaryImageId
            }`}
            alt=""
          />
          <h1>{resData?.data?.cards?.at(0)?.card?.card?.info?.areaName}</h1>
          <h3>{resData?.data?.cards?.at(0)?.card?.card?.info?.avgRating}</h3>
        </div>
        <div>
          {resData?.data?.cards
            ?.at(2)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.at(1)
            ?.card?.card?.itemCards?.map((val) => {
              return <li>{val?.card?.info?.name}</li>;
            })}
        </div>
      </div>
    </>
  );
};

export default RestrauntMenu;
