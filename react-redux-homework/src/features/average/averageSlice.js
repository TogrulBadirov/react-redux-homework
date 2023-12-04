import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  averageNum: 0,
};

export const averageSlice = createSlice({
  name: "average",
  initialState,
  reducers: {
    addToList: (state, action) => {
      action.payload.inpval !== "" ? state.value.push(action.payload) : "";
      state.averageNum = (
        state.value.reduce(
          (sum, currentValue) => sum + parseInt(currentValue.inpval),
          0
        ) / state.value.length
      ).toFixed(2);
    },
    clearList: (state, action) => {
      state.value = [];
      state.averageNum = 0;
    },
    removeFromList: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToList, removeFromList, clearList } = averageSlice.actions;

export default averageSlice.reducer;
