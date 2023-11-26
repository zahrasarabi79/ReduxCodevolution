//8-import store and SliceActions(here is cakeAction & icecreamAction)
const store = require("./app/store.js");
const cakeActions = require("./features/cake/cakeSlice.js").cakeActions;
const icecreamActions = require("./features/icecream/icecreamSlice.js").icecreamActions;
const fetchUsers = require("./features/user/userSlice.js").fetchUsers;
//8-log initialvalue of each slice
console.log("initial state", store.getState());
//9-log update value after each action
const unsubscribe = store.subscribe(() => {});
//10-use dispatch to call action
store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restoked(3));
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restoked(2));
//11-call it to log each valu after action
unsubscribe();
