import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";
const DocTitleOne = () => {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);
  return (
    <>
      <button onClick={() => setCount(count + 1)}> {count} </button>
    </>
  );
};
export default DocTitleOne;
