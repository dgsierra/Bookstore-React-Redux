import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { fetchBooks, removeBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';
import '../css/Books.css';

export default function BooksList() {
  const { books } = useSelector((state) => state.books);
  const [stateBooks, addBook] = useState([{ title: 'test', author: 'test' }]);
  const dispatch = useDispatch();
  const bookProgress = Math.floor(Math.random() * 100);
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  useEffect(() => {
    addBook(books);
  }, [books]);
  const removeHandler = (id) => {
    console.log(id);
    dispatch(removeBook(id));
  };
  return (
    stateBooks.map((data) => (
      <div className="panel-bg" key={Math.random() * 10000}>
        <div className="books-left">
          <div className="container-text">
            <h3 className="book-category">{data.category}</h3>
            <h2 className="book-title">{data.title}</h2>
            <h3 className="book-author">{data.author}</h3>
          </div>
          <div className="book-buttons">
            <button type="button" className="book-button">Comments</button>
            <button
              type="button"
              onClick={() => removeHandler(data.item)}
              className="book-button middle-button"
            >
              Remove
            </button>
            <button type="button" className="book-button">Edit</button>
          </div>
        </div>
        <div className="book-progress">
          <div className="book-progress-bar-fill">
            <CircularProgressbar value={bookProgress} text="" />
          </div>
          <div className="book-progress-percentage">
            {bookProgress}
            %
          </div>
          <div className="book-progress-bar">Completed</div>
        </div>
        <div className="book-chapter">
          <h3 className="book-chapter-title">CURRENT CHAPTER</h3>
          <h3 className="book-chapter-number">Chapter 17</h3>
          <button type="button" className="progress-button">UPDATE PROGRESS</button>
        </div>

      </div>
    ))
  );
}
