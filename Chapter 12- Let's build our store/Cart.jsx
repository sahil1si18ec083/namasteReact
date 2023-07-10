import { useDispatch, useSelector } from "react-redux";
import FoodItemCart from "./FoodItemCart";
import { setItems } from "./redux/appReducer";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.appReducer.items);
  const fnClearCart = () => {
    dispatch(setItems([]));
  };
  return (
    <>
      <div className=" mt-24">
        <h1 class="text-3xl font-semibold p-2">Cart ({cartItems.length})</h1>
        <button
          class="p-2 m-2 bg-green-600 text-white rounded-md"
          onClick={() => fnClearCart()}
        >
          Clear Cart
        </button>
        <div className="flex">
          {cartItems.map((item, index) => {
            console.log(cartItems);
            return <FoodItemCart Cartitem={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Cart;
