there are two layers
One is ui layer which we see on screen. Second is data layer
Data layer is consisting of states and props.
The passing of states from parent to child and then to another child is called prop drilling
parent-> children-> grandchildren-> great-grandchildren
The data flows from parent to child

React context

// How to create context

import { createContext } from "react";
const UserContext = createContext({
user: {
name: "DummyName",
email: "sahil.1si18eco83@gmail.com",
},
});
export default UserContext;

// How to use it

const user = useContext(UserContext);

Context is like useState for the entire application

The userContext value which will be created initially will be a default value and it can be modified with the help of provider
using <userContext.provider value={new value}>
</userContext.provider>
