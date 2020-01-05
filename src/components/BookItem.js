import React from 'react';

const BookItem = ({ book, removeBook }) => {
  const handleClick = () => {
    removeBook(book.id);
  };

  return (
    <li className="book-item" onClick={handleClick}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookItem;
