import { configureStore } from "@reduxjs/toolkit";
import reducers from "./redux/index";

const store = configureStore({ reducer: reducers });

export default store;
