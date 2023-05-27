import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <p>
        {err.status} {err.statusText}
      </p>
    </>
  );
};

export default Error;
