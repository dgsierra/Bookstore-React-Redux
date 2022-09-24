/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { produce } from 'immer';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kG7wZjYvsuc5XekVgisx/books/';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  item_id: '',
  title: '',
  author: '',
  category: '',
};

// const booksSlice2 = createSlice({
//   name: 'books',
//   initialState,

// });
export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBook: (state, action) => produce(state, (draft) => {
      draft.item_id = action.payload.token;
      draft.title = action.payload.title;
      draft.author = action.payload.author;
      draft.category = action.payload.gender;
    }),
    unsetBook(state) {
      produce(state, (draft) => {
        draft.item_id = '';
        draft.title = '';
        draft.author = '';
        draft.category = '';
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      console.log('action', action.payload);
      state = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      console.log('state', state);
      return state;
    });
  },
});

export const { setBook, unsetBook } = booksSlice.actions;
export default booksSlice.reducer;
