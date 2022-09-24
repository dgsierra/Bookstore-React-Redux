import React from 'react';
import { useDispatch } from 'react-redux';
import { setBook } from '../redux/books/books';

export default function BookForm() {
  const dispatch = useDispatch();
  function submitHandler(e) {
    e.preventDefault();
    dispatch(setBook(
      {
        gender: e.target.children[1].value,
        author: 'New Author',
        bookName: e.target.children[0].value,
        currentChapter: '1',
        chapterName: 'Intro',
        token: '',
      },
    ));
  }
  return (
    <div>
      <h1>
        ADD NEW BOOK
      </h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="book-title" placeholder="Book Title" />
        <select>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Kids">Kids</option>
          <option value="Learning">Learning</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
