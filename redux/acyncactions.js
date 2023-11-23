const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const applyMiddleware = redux.applyMiddleware;
const initialState = {
  loading: false,
  users: [],
  error: "",
};
const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USER_SUCCSEEDED = "FETCH_USER_SUCCSEEDED";
const FETCH_USER_FAILED = "FETCH_USER_FAILED";
const fetchUsersRequested = () => {
  return { type: FETCH_USER_REQUESTED };
};
const fetchUsersSuccss = (users) => {
  return { type: FETCH_USER_SUCCSEEDED, payload: users };
};
const fetchUsersFailed = (error) => {
  return { type: FETCH_USER_FAILED, payload: error };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUESTED":
      return { ...state, loading: true };
    case "FETCH_USER_SUCCSEEDED":
      return { ...state, loading: false, users: action.payload, error: " " };
    case "FETCH_USER_FAILED":
      return { ...state, loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequested());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccss(users)); // Pass users to the action creator
      })
      .catch((error) => {
        dispatch(fetchUsersFailed(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
console.log("initialState", store.getState());
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());
