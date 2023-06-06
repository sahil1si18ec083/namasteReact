import { useState, useEffect } from "react";
const useRestaurant = (id) => {
  const [resData, setResData] = useState(null);
  const getResoInfo = (id) => {
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
  useEffect(() => {
    getResoInfo(id);
  }, []);
  return resData;
};

export default useRestaurant;
