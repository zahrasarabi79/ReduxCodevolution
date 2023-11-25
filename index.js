const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
// Define action type as a variable
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// Action creator function
const orderCake = () => ({ type: CAKE_ORDERED, quantity: 1 });
const restockCake = (qty = 1) => ({ type: CAKE_RESTOCKED, quantity: qty });
const orderIceCream = (qty = 1) => ({ type: ICECREAM_ORDERED, quantity: qty });
const restockIceCeram = (qty = 1) => ({ type: ICECREAM_RESTOCKED, quantity: qty });

// Initial state
// const initialState = { numOfCake: 10, numOfIceCream: 20 };
// initial state for combine Reducer
const initialStateCake = { numOfCake: 10 };
const initialStateIceCream = { numOfIceCream: 20 };

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, numOfCake: state.numOfCake - action.quantity };
    case CAKE_RESTOCKED:
      return { ...state, numOfCake: state.numOfCake + action.quantity };
    case ICECREAM_ORDERED:
      return { ...state, numOfIceCream: state.numOfIceCream - action.quantity };
    case ICECREAM_RESTOCKED:
      return { ...state, numOfIceCream: state.numOfIceCream + action.quantity };
    default:
      return state;
  }
};
// reducer functions for combine reducer
const cakeReducer = (state = initialStateCake, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, numOfCake: state.numOfCake - action.quantity };
    case CAKE_RESTOCKED:
      return { ...state, numOfCake: state.numOfCake + action.quantity };
    default:
      return state;
  }
};
const iceCreamReducer = (state = initialStateIceCream, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return { ...state, numOfIceCream: state.numOfIceCream - action.quantity };
    case ICECREAM_RESTOCKED:
      return { ...state, numOfIceCream: state.numOfIceCream + action.quantity };
    case CAKE_ORDERED:
      return { ...state, numOfIceCream: state.numOfIceCream - 1 };
    default:
      return state;
  }
};
// combine reducer
const rootReducer = combineReducers({ cake: cakeReducer, iceCream: iceCreamReducer });

// Create Redux store with the rootReducer
// const store = createStore(rootReducer);
// Create Redux store with the rootReducer for middleware
const store = createStore(rootReducer, applyMiddleware(logger));
// Create Redux store with the reducer
// const store = createStore(reducer);
// Log initial state
console.log("initialState", store.getState());

// Subscribe to state changes
// const unsubscribe = store.subscribe(() => console.log("Updated State", store.getState()));
// Subscribe to state changes for middle ware
const unsubscribe = store.subscribe(() => {});
// Dispatch actions
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3));
//  instead of dispatch actions
const action = bindActionCreators({ orderCake, restockCake, restockIceCeram, orderIceCream }, store.dispatch);
action.orderCake();
action.orderCake();
action.orderCake();
action.restockCake(3);
action.orderIceCream();
action.orderIceCream();
action.restockIceCeram(3);
// Unsubscribe from state changes
unsubscribe();
