const createSlice = required("@reduxjs/toolkit").createSlice;
const initialState = { numOfCakes: 10 };
const cakeSlice = createSlices({
  name: cake,
  initialState,
  reducer: {
    order: (state) => {
      state.numOfCakes--;
    },
    restoked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});
module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.action;
