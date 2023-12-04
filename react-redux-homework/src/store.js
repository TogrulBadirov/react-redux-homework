import { configureStore } from '@reduxjs/toolkit'
import calculatorSlice from './features/calculator/calculatorSlice'
import todoSlice from './features/todo/todoSlice'
import averageSlice from './features/average/averageSlice'

export const store = configureStore({
  reducer: {
    calculator:calculatorSlice,
    todo:todoSlice,
    average:averageSlice
  },
})