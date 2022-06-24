import { configureStore } from '@reduxjs/toolkit';

import { categoriesReducer, transactionsReducer, userReducer } from './slices';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    transactions: transactionsReducer,
    user: userReducer,
  },
});

export default store;
