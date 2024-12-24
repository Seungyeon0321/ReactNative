import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ExpenseState {
  totalExpense: number;
}

const initialState: ExpenseState = {
  totalExpense: 0,
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    totalExpense: (state, action: PayloadAction<number>) => {
      state.totalExpense += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { totalExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
