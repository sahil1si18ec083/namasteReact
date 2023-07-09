there are two layers
One is ui layer which we see on screen. Second is data layer
Data layer is consisting of states and props.
The passing of states from parent to child and then to another child is called prop drilling
parent-> children-> grandchildren-> great-grandchildren
The data flows from parent to child
In React, passing props is a fundamental concept that enables a parent component to share data with its child components as well as other components within an application.

In many cases, passing props can be an effective way to share data between different parts of your application. But passing props down a chain of multiple components to reach a specific component can make your code overly cumbersome.
Prop drilling can make your code more difficult to read and maintain, and can also make it harder to refactor your components later on.

This is where the Context API comes in. With Context API, you can store data at the top level of the component tree and make it available to all other components that need it without passing props.
With Context API, you can create a “context” that holds the user’s shopping information, like their cart and order history. Then, you can use that context in both the shopping cart and the order history component, without having to pass the information down through props.
Basically, Context API consists of two main components: the context provider and the context consumer. The provider is responsible for creating and managing the context, which holds the data to be shared between components.
On the other hand, the consumer is used to access the context and its data from within a component.
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
