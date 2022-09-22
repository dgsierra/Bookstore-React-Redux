import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBook } from '../redux/books/books';

export default function BookForm() {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setBook(
      {
        gender: e.target.children[1].value,
        author: e.target.children[0].value,
        bookName: '',
        currentChapter: '1',
        chapterName: '',
        token: '',
      },
    ));
    console.log(e.target.children[1].value);
  };
  const { author, gender } = useSelector((state) => state.books);
  return (
    <div>
      <h1>
        ADD NEW BOOK
        {author}
        {gender}
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
