import React from "react";

const useDocumentTitle = (count) => {
  React.useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);
};
export default useDocumentTitle;
