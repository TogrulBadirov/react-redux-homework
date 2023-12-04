import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      action.payload.inpval !== "" ? state.value.push(action.payload) : "";
    },
    editTodo: (state, action) => {
      let index = state.value.findIndex(
        (item) => item.id === action.payload.editId
      );
      state.value[index].inpval = action.payload.inp;
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
