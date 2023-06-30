import { createContext, useState } from "react";
import ComponentB from "./ComponentB";
import myContext from "./useContext";
const ComponentA = () => {
  const [name, setName] = useState("Sahil");
  return (
    <>
      <myContext.Provider value={name}>
        <ComponentB />
      </myContext.Provider>
    </>
  );
};

export default ComponentA;
