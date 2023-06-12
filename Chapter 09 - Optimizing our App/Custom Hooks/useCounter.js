const useCounter = (count, setCount) => {
  const increament = () => {
    setCount((prev) => prev + 1);
  };
  const decreament = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return [increament, decreament, reset];
};
export default useCounter;
