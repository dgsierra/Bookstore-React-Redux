/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { produce } from 'immer';

const initialState = {
  gender: '',
  author: '',
  bookName: '',
  currentChapter: '1',
  chapterName: '',
  token: '',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBook: (state, action) => produce(state, (draft) => {
      draft.gender = action.payload.gender;
      draft.author = action.payload.author;
      draft.bookName = action.payload.bookName;
      draft.currentChapter = action.payload.currentChapter;
      draft.chapterName = action.payload.chapterName;
      draft.token = action.payload.token;
    }),
    unsetBook(state) {
      produce(state, (draft) => {
        draft.gender = '';
        draft.author = '';
        draft.bookName = '';
        draft.currentChapter = '1';
        draft.chapterName = '';
        draft.token = '';
      });
    },
  },
});

export const { setBook, unsetBook } = booksSlice.actions;

export default booksSlice.reducer;
