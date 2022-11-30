import React, { useState, useEffect } from 'react';

import { saveSongs, searchSongArtists } from './utils/API';
import { saveSongIds, getSavedSongIds } from '../utils/localStorage';


const SearchSongs = () => {
    // create state for holding returned google api data
    const [searchedSongs, setSearchedSongs] = useState([]);
    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');
  
    // create state to hold saved song/artist values
    const [savedSongId, setSavedSongIds] = useState(getSavedSongIds());
  
    // set up useEffect hook to save `savedSongIds` list to localStorage on component unmount
    
    useEffect(() => {
      return () => saveSongIds(saveSongIds);
    });
  
    // create method to search for books and set state on form submit
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      if (!searchInput) {
        return false;
      }
  
      try {
        const response = await searchArtistSong(searchInput);
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }
  
        const { items } = await response.json();
  
        const songData = items.map((song) => ({
          song: song.id,
          artist: song.subtitle || ['No artists to display'],
          title: song.title,
          album: song.share.subject,
          image: song.images.coverart || '',
        }));
  
        setSearchedSongs(songData);
        setSearchInput('');
      } catch (err) {
        console.error(err);
      }
    };
  
    // create function to handle saving a song to our database
    const handleSaveSong = async (songId) => {
      // find a song in `searchedSongs` state by the matching id
      const songToSave = searchedSongs.find((song) => song.songId === songId);
  
      // get token
      const token = Auth.loggedIn() ? Auth.getToken() : null;
  
      if (!token) {
        return false;
      }
  
      try {
        const response = await saveSong(songToSave, token);
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }
  
        // if book successfully saves to user's account, save book id to state
        setSavedSongIds([...savesSongIds, songToSave.sngId]);
      } catch (err) {
        console.error(err);
      }
    };

    return (
      <>
       

  
        <Container>
          <h2>
            {searchedSongs.length
              ? `Viewing ${searchedSongs.length} results:`
              : 'Search for a Song'}
          </h2>
          <CardColumns>
            {searchedSongs.map((song) => {
              return (
                <Card key={song.songId} border='dark'>
                  {song.image.coverart ? (
                    <Card.Img src={song.images.coverart} alt={`The cover for ${song.title}`} variant='top' />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{song.title}</Card.Title>
                    <p className='small'>Artist: {song.subtitle}</p>
                    <Card.Text>{song.share.subject}</Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                        disabled={savedSongIds?.some((savedSongId) => savedSongId === song.songId)}
                        className='btn-block btn-info'
                        onClick={() => handleSaveSong(song.songId)}>
                        {savedSongIds?.some((savedSongId) => savedSongId === song.SongId)
                          ? 'This Song has been saved!'
                          : 'Save this Song!'}
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns>
        </Container>
      </>
    );
  };
  
  export default SearchSongs;
