// this is our custom that will return a boolean if it is online then return true otherwise false
import React from "react";

const useCheckOnline = () => {
  const [isOnline, setIsOnline] = React.useState(true);
  const handleOnline = () => {
    setIsOnline(true);
  };
  const handleOffline = () => {
    setIsOnline(false);
  };
  React.useEffect(() => {
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};
export default useCheckOnline;
