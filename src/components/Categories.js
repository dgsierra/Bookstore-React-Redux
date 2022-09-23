import React, { useState } from 'react';
import { setCategorie } from '../redux/categories/categories';

export default function Categories() {
  const [categories, setCategories] = useState('');
  const checkCategories = () => {
    console.log('working');
  };
  return (
    <div>
      <h1>{categories}</h1>
      <button value="category" onClick={() => checkCategories()} type="submit">ADD NEW CATEGORY</button>
    </div>
  );
}
