import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import BooksList from './Books';
import Categories from './Categories';
import BookForm from './BooksForm';
import '../css/Navbar.css';

export default function Navbar() {
  return (
    <>
      <div className="nav-container">
        <nav className="navbar">
          <h2 className="navbar-logo">Bookstore CMS</h2>
          <ul className="navbar-elements">
            <li className="navbar-element"><Link className="navtext" to="/">Books</Link></li>
            <li className="navbar-element"><Link className="navtext" to="/categories">Categories</Link></li>
          </ul>
        </nav>
        <div className="user">
          <FaUser />
        </div>
      </div>
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
