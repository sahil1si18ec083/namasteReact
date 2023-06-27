import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "DummyName",
    email: "sahil.1si18eco83@gmail.com",
  },
});
export default UserContext;
