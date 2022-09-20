import { createStore, combineReducers, applyMiddleware } from 'react-redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import { checkCategory } from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: checkCategory,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
