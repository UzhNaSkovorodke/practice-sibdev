import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestApi } from 'src/api';
import { API_URLS } from 'src/consts';

const balanceRequest = createAsyncThunk('balance/balanceRequest', async () => {
  const responseBalance = await requestApi.GET(`${API_URLS.transactions}balance`);
  return responseBalance.balance;
});

export default balanceRequest;
