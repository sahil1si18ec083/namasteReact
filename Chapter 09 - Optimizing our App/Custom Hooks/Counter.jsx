import useCounter from "./useCounter";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [increament, decreament, reset] = useCounter(count, setCount);

  return (
    <>
      <h2>{count} </h2>
      <button onClick={increament}> Increase </button>
      <button onClick={decreament}> Decrease </button>
      <button onClick={reset}> Reset </button>
    </>
  );
};
export default Counter;
