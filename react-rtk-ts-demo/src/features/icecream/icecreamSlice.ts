import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";
type IinitialState = { numOfIcecream: number };

const initialState: IinitialState = { numOfIcecream: 20 };

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },
    restoked: (state, action: PayloadAction<number>) => {
      state.numOfIcecream += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecream--;
    });
  },
});
export default icecreamSlice.reducer;
export const { ordered, restoked } = icecreamSlice.actions;
