const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
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
const fetchUsersSuccss = () => {
  return { type: FETCH_USER_SUCCSEEDED, payload: users };
};
const fetchUsersFailed = () => {
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
const store = createStore(reducer);
console.log("initialState", store.getState());
