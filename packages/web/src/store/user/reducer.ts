import { createReducer } from '@reduxjs/toolkit';

import { UserStore } from './types';

const initialState: UserStore = {
  userData: null,
  loading: false
};

const userReducer = createReducer(initialState, (builder) => {
  console.log(builder);
});

export default userReducer;
