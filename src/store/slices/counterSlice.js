import { createSlice } from '@reduxjs/toolkit';

import { balanceRequest } from 'src/store/slices/userActions';

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  extraReducers: {
    [balanceRequest.fulfilled]: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export { balanceRequest };
export default counterSlice.reducer;
