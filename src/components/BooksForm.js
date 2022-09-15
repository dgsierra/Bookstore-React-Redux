import React from 'react';

export default function BookForm() {
  return (
    <div>
      <h1>ADD NEW BOOK</h1>
      <form>
        <input type="text" placeholder="Book Title" />
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
