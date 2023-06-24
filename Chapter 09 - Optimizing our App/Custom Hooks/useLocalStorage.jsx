import React, { useEffect } from "react";
const useLocalStorage = (key, defaultValue) => {
  // default value is the value that has been sent
  let value = JSON.parse(localStorage.getItem(key));
  if (!value) {
    value = defaultValue;
  }

  const [localStorageValue, setLocalStorageValue] = React.useState(value);

  // const setLocalStorageValue = () => {
  //   localStorage.setItem(key, JSON.parse(defaultValue));
  // };
  useEffect(() => {
    localStorage.setItem(key, localStorageValue);
  }, [localStorageValue]);

  return [localStorageValue, setLocalStorageValue];
};

export default useLocalStorage;
