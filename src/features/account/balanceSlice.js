import {createSlice} from "@reduxjs/toolkit";

const balanceSlice = createSlice({
  name: 'balance',
  initialState: 0,
  reducers: {
    deposit: (state, action) => state + action.payload,
    withdraw: (state, action) => state >= action.payload ? state - action.payload : state,
  }
})

// type: balance/deposit, type: balance/withdraw
export const { deposit, withdraw } = balanceSlice.actions;
export default balanceSlice.reducer;