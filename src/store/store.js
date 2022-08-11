import { configureStore } from '@reduxjs/toolkit';

import { categoriesReducer, counterReducer, transactionsReducer, userReducer } from './slices';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    transactions: transactionsReducer,
    user: userReducer,
    counter: counterReducer,
  },
});

export default store;
