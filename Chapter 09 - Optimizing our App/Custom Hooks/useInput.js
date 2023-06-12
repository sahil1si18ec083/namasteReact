import { useState } from "react";

const useInput = (initialValue) => {
  const [val, setVal] = useState(initialValue);
  const handleChange = (event) => {
    setVal(event.target.value);
  };
  return [val, handleChange];
};

export default useInput;
