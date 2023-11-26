//5-import configure store
const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice.js");

//4-import icecreamSlice as icecreamReducer
const icecreamReducer = require("../features/icecream/icecreamSlice.js");
//6-use configure function that work like "combine Reducder function" in redux
const userReducer = require("../features/user/userSlice.js");
const logger = reduxLogger.createLogger();
const store = configureStore({ reducer: { cake: cakeReducer, icecream: icecreamReducer, user: userReducer }, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) });
//7-export store
module.exports = store;
