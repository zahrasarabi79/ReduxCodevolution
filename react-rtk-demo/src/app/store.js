import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice.js";
import icecreamReducer from "../features/icecream/icecreamSlice.js";
import userReducer from "../features/user/userSlice.js";
const store = configureStore({ reducer: { cake: cakeReducer, icecream: icecreamReducer, user: userReducer } });
//7-export store
export default store;
