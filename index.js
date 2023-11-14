const redux = require("redux");
const createStore = redux.createStore;

// Define action type as a variable
const CAKE_ORDERED = "CAKE_ORDERED";

// Action creator function
const orderCake = () => ({ type: CAKE_ORDERED, quantity: 1 });

// Initial state
const initialState = { numOfCake: 10 };

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { numOfCake: state.numOfCake - action.quantity };
    default:
      return state;
  }
};

// Create Redux store with the reducer
const store = createStore(reducer);

// Log initial state
console.log("initialState", store.getState());

// Subscribe to state changes
const unsubscribe = store.subscribe(() => console.log("Updated State", store.getState()));

// Dispatch actions
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

// Unsubscribe from state changes
unsubscribe();
