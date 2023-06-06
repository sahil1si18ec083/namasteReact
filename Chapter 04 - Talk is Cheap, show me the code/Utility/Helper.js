const Helper = (allRestaurants, searchText) => {
  return allRestaurants.filter((restaurantItem, restaurantindex) =>
    restaurantItem.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
};
export default Helper;
