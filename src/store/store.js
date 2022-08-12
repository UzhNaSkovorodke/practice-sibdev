import { configureStore } from '@reduxjs/toolkit';

import { categoriesReducer, balanceReducer, transactionsReducer, userReducer } from './slices';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    transactions: transactionsReducer,
    user: userReducer,
    balance: balanceReducer,
  },
});

export default store;
