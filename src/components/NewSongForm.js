import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');
  const handleChange = e => {
    setTitle(e.target.value);
    console.log(title);
  };
  const handleSubmit = e => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="song-name">enter song name</label>
      <input id="song-name" value={title} type="text" onChange={handleChange} />
      <button type="submit">Add song</button>
    </form>
  );
};

export default NewSongForm;
