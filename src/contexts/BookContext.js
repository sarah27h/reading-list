import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';
export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(bookReducer, []);
  // const [books, setBook] = useState([
  //   { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
  //   { title: 'the final empire', author: 'brandon sanderson', id: 2 }
  // ]);

  // const addBook = (title, author) => {
  //   setBook([...books, { title, author, id: uuid() }]);
  // };

  // const removeBook = id => {
  //   setBook([...books.filter(book => book.id !== id)]);
  // };

  return <BookContext.Provider value={{ books, dispatch }}>{props.children}</BookContext.Provider>;
};

export default BookContextProvider;
