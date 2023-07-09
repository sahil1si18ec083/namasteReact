If we click on a button , it will dispatch an action and then that will call a function which will modify the store.

we are installing npm install @reduxjs/toolkit for installing redux toolit
We are installing npm install react-redux for making bridge between react and redux

Create a store.js

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({});
export default store;

Now go to App.js and wrap it with Provider
Wrap it like this
<Provider store={store}>
