import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addition: (state, action) => {
      state.value =
        parseInt(action.payload.val1) + parseInt(action.payload.val2);
    },
    subtraction: (state, action) => {
      state.value =
        parseInt(action.payload.val1) - parseInt(action.payload.val2);
    },
    multiplication: (state, action) => {
      state.value =
        parseInt(action.payload.val1) * parseInt(action.payload.val2);
    },
    division: (state, action) => {
      state.value =
        parseInt(action.payload.val1) / parseInt(action.payload.val2);
    },
  },
});

export const { addition, subtraction, multiplication, division } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
