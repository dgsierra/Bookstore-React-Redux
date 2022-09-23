import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function BooksList() {
  const { bookName, gender } = useSelector((state) => state.books);
  const [stateBooks, addBook] = useState([]);
  const bookProgress = Math.floor(Math.random() * 100);
  const newBook = [...stateBooks, {
    gender,
    author: '',
    bookName,
    currentChapter: '1',
    chapterName: '',
    progress: bookProgress,
    token: '',
  }];
  useEffect(() => {
    console.log('useEffect');
    addBook(newBook);
  }, [bookName, gender]);

  console.log(stateBooks);
  return (
    stateBooks.map((data) => {
      console.log(data);
      return (
        <div key={Math.random() * 10000}>
          <h3 className="book-category">{data.gender}</h3>
          <h2 className="book-title">{data.bookName}</h2>
          <h3 className="book-author">Book Author</h3>
          <div className="book-buttons">
            <button type="button" className="book-button">Comments</button>
            <button type="button" className="book-button">Remove</button>
            <button type="button" className="book-button">Edit</button>
          </div>
          <div className="book-progress">
            <div className="book-progress-bar">Bar</div>
            <div className="book-progress-bar-fill">Progress</div>
            <div className="book-progress-percentage">
              {data.progress}
              %
            </div>
          </div>
          <div className="book-chapter">
            <h3 className="book-chapter-title">Current Chapter</h3>
            <h3 className="book-chapter-number">Chapter 1</h3>
            <button type="button" className="book-button">UPDATE PROGRESS</button>
          </div>

        </div>
      );
    })
  );
}
