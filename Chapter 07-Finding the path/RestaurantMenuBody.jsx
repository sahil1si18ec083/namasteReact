import React from "react";
import { restoImageUrl } from "../Chapter 04 - Talk is Cheap, show me the code/Utility/Constant";
import { NO_IMAGE_AVAILABLE } from "../Chapter 04 - Talk is Cheap, show me the code/Utility/Constant";

const RestaurantMenuBody = ({ resData }) => {
  const addFoodItem = () => {};
  console.log(resData);
  const resMenuListArray = resData?.data?.cards
    ?.at(2)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.at(1)?.card?.card?.itemCards;
  console.log(resMenuListArray[0]);
  return (
    <>
      <div className=" flex flex-col space-y-2 justify-center items-center">
        {resMenuListArray.map((item, index) => {
          return (
            <div
              key={index}
              className="flex  p-4 m-4 space-x-5   rounded-lg justify-between w-100 "
            >
              <div className="flex space-x-3 ">
                <img
                  src={
                    !item?.card?.info?.imageId
                      ? NO_IMAGE_AVAILABLE
                      : restoImageUrl + item?.card?.info?.imageId
                  }
                  className="w-48 rounded-md "
                />
                <div className="flex flex-col">
                  <h1 className="font-semibold text-xl">
                    {item?.card?.info?.name}
                  </h1>
                  <p className="font-normal">
                    ₹ {item?.card?.info?.price / 100}
                  </p>
                </div>
              </div>
              <button
                onClick={() => addFoodItem}
                className="bg-green-700 h-10 p-2 px-3 text-white rounded-md mr-0 hover:bg-green-600 "
              >
                Add
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RestaurantMenuBody;
