import React from 'react';
import { useSelector } from 'react-redux';
import BookForm from './BooksForm';

export default function BooksList() {
  const { bookName, gender } = useSelector((state) => state.books);
  return (
    <div>
      <h3 className="book-category">{gender}</h3>
      <h2 className="book-title">{bookName}</h2>
      <h3 className="book-author">Book Author</h3>
      <div className="book-buttons">
        <button type="button" className="book-button">Comments</button>
        <button type="button" className="book-button">Remove</button>
        <button type="button" className="book-button">Edit</button>
      </div>
      <div className="book-progress">
        <div className="book-progress-bar">
          <div className="book-progress-bar-fill" />
        </div>
        <div className="book-progress-percentage"> 0%</div>
      </div>
      <div className="book-chapter">
        <h3 className="book-chapter-title">Current Chapter</h3>
        <h3 className="book-chapter-number">Chapter 1</h3>
        <button type="button" className="book-button">UPDATE PROGRESS</button>
      </div>
      <BookForm />
    </div>
  );
}
