//1-import createSlice from toolkit library
const createSlice = require("@reduxjs/toolkit").createSlice;
//2-creat slice with createSlice function for features(here is icecream)
//2-1-choose a neme for Slice
//2-2-define initial value fo these Slice
const initialState = { numOfIcecream: 20 };
//2-3-define reducers
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },
    restoked: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
});
//3-export reducer as export default and action as name export
module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
