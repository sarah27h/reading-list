import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';
export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    console.log(localData);
    return localData ? JSON.parse(localData) : [];
  });

  // user enter new book will update books state, and then code in useEffect() will run
  // add book in local storage in useEffect
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return <BookContext.Provider value={{ books, dispatch }}>{props.children}</BookContext.Provider>;
};

export default BookContextProvider;
