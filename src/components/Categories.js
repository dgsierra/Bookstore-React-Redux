import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategorie } from '../redux/categories/categories';

export default function Categories() {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [currentCategorie, setCategories] = useState('');
  const checkCategories = () => {
    dispatch(setCategorie());
  };
  useEffect(() => {
    setCategories(categories);
  }, [categories]);
  return (
    <div>
      <h1>{currentCategorie}</h1>
      <button className="book-button" value="category" onClick={() => checkCategories()} type="submit">Check Status</button>
    </div>
  );
}
