/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { produce } from 'immer';

const initialState = {
  categories: '',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategorie: (state) => produce(state, (draft) => {
      draft.categories = 'COMMING SOON';
    }),
  },
});

export const { setCategorie } = categoriesSlice.actions;

export default categoriesSlice.reducer;
