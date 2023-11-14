const redux = require("redux");
const createStore = redux.createStore;

// Define action type as a variable
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
// Action creator function
const orderCake = () => ({ type: CAKE_ORDERED, quantity: 1 });
const restockCake = (qty = 1) => ({ type: CAKE_RESTOCKED, quantity: qty });

// Initial state
const initialState = { numOfCake: 10 };

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { numOfCake: state.numOfCake - action.quantity };
    case CAKE_RESTOCKED:
      return { numOfCake: state.numOfCake + action.quantity };
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
store.dispatch(restockCake(3));

// Unsubscribe from state changes
unsubscribe();
