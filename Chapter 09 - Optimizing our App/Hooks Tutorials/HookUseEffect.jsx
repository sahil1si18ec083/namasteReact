import { useEffect, useState } from "react";

const HookUseEffect = () => {
  const [count, setCount] = useState({
    num: 89,
    age: "gfgf"
  });
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const handleClick = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1
      };
    });
  };
  useEffect(() => {
    console.log("useEffect is called");
    setCount((prev) => {
      return {
        ...prev,
        num: 7781
      };
    });
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{count.num}</h2>
      <p>window width is {windowSize} </p>
      <button onClick={handleClick}>click here</button>
    </div>
  );
};
export default HookUseEffect;