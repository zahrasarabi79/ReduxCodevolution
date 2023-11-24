//5-import configure store 
const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice.js");
//4-import icecreamSlice as icecreamReducer
const icecreamReducer = require("../features/icecream/icecreamSlice.js");
//6-use configure function that work like "combine Reducder function" in redux
const store = configureStore({ reducer: { cake: cakeReducer, icecream: icecreamReducer } });
//7-export store 
module.exports = store;
