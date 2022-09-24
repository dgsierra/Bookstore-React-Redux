import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/books';

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
      <div key={Math.random() * 10000}>
        <h3 className="book-category">{data.category}</h3>
        <h2 className="book-title">{data.title}</h2>
        <h3 className="book-author">{data.author}</h3>
        <div className="book-buttons">
          <button type="button" className="book-button">Comments</button>
          <button
            type="button"
            onClick={() => removeHandler(data.item)}
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
            {bookProgress}
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
