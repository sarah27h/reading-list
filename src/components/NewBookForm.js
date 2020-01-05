import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
  // const { addBook } = useContext(BookContext);
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState(['']);
  const [author, setAuthor] = useState(['']);
  //   const [title, author, setDetails] = useState(['', '']);

  const handleChange = e => {
    e.target.name === 'title' ? setTitle(e.target.value) : setAuthor(e.target.value);
    console.log(title, author);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_BOOK',
      book: {
        title,
        author
      }
    });
    // addBook(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        onChange={handleChange}
        type="text"
        name="title"
        aria-label="book name"
        value={title}
        placeholder="enter book name"
      />
      <input
        className="form-input"
        onChange={handleChange}
        type="text"
        name="author"
        aria-label="author name"
        value={author}
        placeholder="enter author name"
      />
      <button className="primary-btn" type="submit">
        Add book
      </button>
    </form>
  );
};

export default NewBookForm;
