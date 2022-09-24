import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { unsetBook } from '../redux/books/books';

export default function BooksList() {
  const { title, category } = useSelector((state) => state.books);
  const [stateBooks, addBook] = useState([]);
  const dispatch = useDispatch();
  const authors = ['Sthephen King', 'J.K. Rowling', 'George R.R. Martin', 'Suzanne Collins', 'Harper Lee', 'J.R.R. Tolkien', 'C.S. Lewis', 'Mark Twain', 'Charles Dickens', 'Suzanne Collins'];
  const bookProgress = Math.floor(Math.random() * 100);
  const bookId = uuidv4();
  console.log(title, category);
  useEffect(() => {
  }, []);
  const removeBook = (id) => {
    dispatch(unsetBook());
    const oldArray = [...stateBooks];
    const newArray = oldArray.filter((book) => book.token !== id);
    addBook(newArray);
  };
  return (
    stateBooks.map((data) => (
      <div key={Math.random() * 10000}>
        <h3 className="book-category">{data.category}</h3>
        <h2 className="book-title">{data.title}</h2>
        <h3 className="book-author">{data.author}</h3>
        <div className="book-buttons">
          <button type="button" className="book-button">Comments</button>
          <button type="button" onClick={() => removeBook(data.token)} className="book-button">Remove</button>
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
