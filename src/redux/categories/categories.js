/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: '',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategorie: (state) => {
      state.categories = 'COMMING SOON';
    },
  },
});

export const { setCategorie } = categoriesSlice.actions;

export default categoriesSlice.reducer;
