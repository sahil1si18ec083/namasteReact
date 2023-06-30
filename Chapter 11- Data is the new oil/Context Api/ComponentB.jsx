import { useContext } from "react";
import myContext from "./useContext";
const ComponentB = () => {
  // const data = useContext(myContext);

  return (
    <>
      <myContext.Consumer>
        {(value) => <h3>{value.age} </h3>}
      </myContext.Consumer>
    </>
  );
};
export default ComponentB;
