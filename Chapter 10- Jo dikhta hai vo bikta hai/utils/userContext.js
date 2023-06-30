import { createContext } from "react";
const UserContext = createContext({
  userObj: {
    name: "DummyName",
    email: "sahil.1si18eco83@gmail.com",
  },
});
export default UserContext;
