import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

export default configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});
