import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user/reducer';

const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: [thunk]
});

export default store;
