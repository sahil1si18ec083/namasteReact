import React from "react";
const useOnline = () => {
  const [isOnline, setIsOnline] = React.useState(true);
  const handleOnline = () => {
    setIsOnline(true);
  };
  const handleOffline = () => {
    setIsOnline(false);
  };
  window.addEventListener("online", handleOnline);
  window.addEventListener("offline", handleOffline);
  return {
    isOnline,
    setIsOnline
  };
};
export default useOnline;
