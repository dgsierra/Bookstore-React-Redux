/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchBooks } from '../redux/books/books';

export default function BooksList() {
  const { status, books } = useSelector((state) => state.books);
  console.log(status);
  const [stateBooks, addBook] = useState([{ title: 'test', author: 'test' }]);
  const dispatch = useDispatch();
  const bookProgress = Math.floor(Math.random() * 100);
  const bookId = uuidv4();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  useEffect(() => {
    addBook(books);
  }, [books]);
  const removeBook = (id) => {
    console.log(id);
  };
  return (
    stateBooks.map((data) => (
      <div key={Math.random() * 10000}>
        <h3 className="book-category">{data.category}</h3>
        <h2 className="book-title">{data.title}</h2>
        <h3 className="book-author">{data.author}</h3>
        <div className="book-buttons">
          <button type="button" className="book-button">Comments</button>
          <button
            type="button"
            onClick={() => removeBook(data.item_id)}
            className="book-button"
          >
            Remove

          </button>
          <button type="button" className="book-button">Edit</button>
        </div>
        <div className="book-progress">
          <div className="book-progress-bar">Bar</div>
          <div className="book-progress-bar-fill">Progress</div>
          <div className="book-progress-percentage">
            99
            %
          </div>
        </div>
        <div className="book-chapter">
          <h3 className="book-chapter-title">{data.chapterName}</h3>
          <h3 className="book-chapter-number">{data.currentChapter}</h3>
          <button type="button" className="book-button">UPDATE PROGRESS</button>
        </div>

      </div>
    ))
  );
}
