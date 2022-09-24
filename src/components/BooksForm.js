import React from 'react';
import { useDispatch } from 'react-redux';

export default function BookForm() {
  const dispatch = useDispatch();
  function submitHandler(e) {
    e.preventDefault();
    dispatch();
  }
  return (
    <div>
      <h1>
        ADD NEW BOOK
      </h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="book-title" placeholder="Book Title" />
        <input type="text" name="book-author" placeholder="Author" />
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
