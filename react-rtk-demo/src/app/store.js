import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice.js";
import icecreamReducer from "../features/icecream/icecreamSlice.js";
import userReducer from "../features/user/userSlice.js";
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const store = configureStore({ reducer: { cake: cakeReducer, icecream: icecreamReducer, user: userReducer }, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) });
//7-export store
export default store;
