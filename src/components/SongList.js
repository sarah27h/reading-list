import React, { useState, useEffect } from 'react';
import NewSongForm from './NewSongForm';
import uuid from 'uuid/v1';

const SongList = () => {
  const [songs, setSong] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ]);
  const songsList = songs.map(song => {
    return <li key={song.id}>{song.title}</li>;
  });
  const addSong = title => {
    setSong([...songs, { title, id: uuid() }]);
  };
  useEffect(() => {
    console.log(songs);
  }, [songs]);
  return (
    <div className="song-list">
      <ul>{songsList}</ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
