import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookItem from './BookItem';

const BookList = () => {
  const { books } = useContext(BookContext);
  const bookList = books.map(book => {
    return <BookItem book={book} key={book.id} />;
  });

  return books.length ? <ul className="book-list">{bookList}</ul> : <p>No books to read :)</p>;
};

export default BookList;
