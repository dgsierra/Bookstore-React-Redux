/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { produce } from 'immer';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kG7wZjYvsuc5XekVgisx/books/';

export const fetchBooks = createAsyncThunk('books/fetchBooks/GET', async () => {
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);
  const books = Object.keys(data).map((item) => ({ item, ...data[item][0] }));
  return books;
});

const addBook = createAsyncThunk('books/fetchBooks/ADD', async (newBook, thunkAPI) => {
  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
  }).then(() => thunkAPI.dispatch(fetchBooks()));
  return newBook;
});

// const removeBook = createAsyncThunk('books/fetchBooks/REMOVE', async (id, thunkAPI) => {
//   await fetch(`${URL}/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then(() => thunkAPI.dispatch(fetchBooks()));
//   return id;
// });

const initialState = {
  status: 'test',
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = 'completed';
      console.log('action', action.payload);
      state.books = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = 'failed';
    });
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = 'pending';
    });
  },
});

// export { addBook, removeBook };
export default booksSlice.reducer;
