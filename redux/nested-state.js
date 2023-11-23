const redux = require("redux");
const produce = require("immer").produce;

const initialState = { name: "zahra", address: { street: "square", city: "tehran", contry: "iran" } };
const STREET_UPDATE = "STREET_UPDATE";
const updateStreet = (street) => ({ type: STREET_UPDATE, payload: street });
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      //   return { ...state, address: { ...state.address, street: action.payload } };
      //   use producer from immer library
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};
const store = redux.createStore(reducer);
console.log("initialState", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated State", store.getState()));

// Dispatch actions
store.dispatch(updateStreet("456 main st"));
unsubscribe();

// run npm i immer
