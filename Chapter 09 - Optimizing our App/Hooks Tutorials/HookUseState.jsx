import { useState } from "react";

const HookUseState = () => {
  const [count, setCount] = useState({
    num: 89,
    age: "gfgf"
  });
  const handleClick = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1
      };
    });
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{count.num}</h2>
      <button onClick={handleClick}>click here</button>
    </div>
  );
};
export default HookUseState;
