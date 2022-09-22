/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

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
    setBook: (state, action) => {
      state.gender = action.payload.gender;
      state.author = action.payload.author;
      state.bookName = action.payload.bookName;
      state.currentChapter = action.payload.currentChapter;
      state.chapterName = action.payload.chapterName;
      state.token = action.payload.token;
    },
    unsetBook(state) {
      state.gender = '';
      state.author = '';
      state.bookName = '';
      state.currentChapter = '1';
      state.chapterName = '';
      state.token = '';
    },
  },
});

export const { setBook, unsetBook } = booksSlice.actions;

export default booksSlice.reducer;
