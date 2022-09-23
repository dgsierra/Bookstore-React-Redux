import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import BooksList from './Books';
import Categories from './Categories';
import BookForm from './BooksForm';

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h2 className="navbar-logo">Bookstore CMS</h2>
        <ul className="navbar-elements">
          <li className="navbar-element"><Link className="navtext" to="/">Books</Link></li>
          <li className="navbar-element"><Link className="navtext" to="/categories">Categories</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={(
            <div>
              <BooksList />
              <BookForm />
            </div>
        )}
        />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}
