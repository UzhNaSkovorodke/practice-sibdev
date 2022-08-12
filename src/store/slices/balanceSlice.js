import { createSlice } from '@reduxjs/toolkit';

import { balanceRequest } from 'src/store/slices/userActions';

const initialState = {
  balance: 0,
};

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  extraReducers: {
    [balanceRequest.fulfilled]: (state, action) => {
      state.balance = action.payload;
    },
  },
});

export { balanceRequest };
export default balanceSlice.reducer;
