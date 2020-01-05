import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookItem = ({ book }) => {
  const { dispatch } = useContext(BookContext);

  const handleClick = () => {
    // removeBook(book.id);
    dispatch({ type: 'REMOVE_BOOK', id: book.id });
  };

  return (
    <li className="book-item" onClick={handleClick}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookItem;
