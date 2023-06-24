import { useMemo, useState } from "react";

const HookUseMemo = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const handleClick1 = () => {
    setCounter1(counter1 + 1);
  };
  const handleClick2 = () => {
    setCounter2(counter2 + 1);
  };

  const isEven= useMemo(()=>{
    console.log("function called");
    for (let i = 0; i < 2000; i++) {}
    return counter1 % 2 === 0 ? "even" : "odd";
  },[counter1])
  return (
    <>
      <button onClick={handleClick1}>
        Button 1 <div>{counter1}</div>{" "}
      </button>
      <button onClick={handleClick2}>
        Button 2 <div>{counter2}</div>{" "}
      </button>
      {isEven}
    </>
  );
};
export default HookUseMemo;
