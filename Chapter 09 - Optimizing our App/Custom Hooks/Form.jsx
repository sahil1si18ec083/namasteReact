import { useState } from "react";
import useInput from "./useInput";
const Form = () => {
  const firstName = useInput("");
  console.log(firstName);
  const lastName = useInput("");

  const submitHandler = (event) => {
    console.log(firstName);
    event.preventDefault();
    alert(`first mame is ${firstName[0]} and last name is ${lastName[0]}`);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input type="text" value={firstName[0]} onChange={firstName[1]} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" value={lastName[0]} onChange={lastName[1]} />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
export default Form;
