/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { addBook } from '../redux/books/books';

export default function BookForm() {
  const dispatch = useDispatch();
  const {
    register, handleSubmit, reset,
  } = useForm();
  const onSubmit = (data) => {
    const newBook = {
      item_id: uuidv4(),
      title: data.title,
      author: data.author,
      category: data.category,
    };
    dispatch(addBook(newBook));
    reset();
  };
  return (
    <div>
      <h1 className="section__title">
        ADD NEW BOOK
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" defaultValue="" {...register('title', { required: true })} placeholder="Book Title" />
        <input type="text" {...register('author', { required: true })} placeholder="Book Author" />
        <select defaultValue="" {...register('category')}>
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
