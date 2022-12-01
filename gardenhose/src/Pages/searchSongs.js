
import React, { useState } from 'react';
import { GiMagnifyingGlass } from "react-icons/gi";

import { Searching } from "../util/API";


const SearchSongs = () => {
    // create state for holding returned shazam api data
    const [searchedSongs, setSearchedSongs] = useState([]);
    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');
  
    // create state to hold saved songId values
   // const [savedSongIds, setSavedSongIds] = useState(getSavedSongIds());
  
    // set up useEffect hook to save `savedSongIds` list to localStorage on component unmount
   
  //  useEffect(() => {
   //   return () => saveSongIds(savedSongIds);
   // });
  
    // create method to search for songs and set state on form submit
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      if (!searchInput) {
        return false;
      }
  
      try {
        const response = await searchedSongs(searchInput);
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }
  
        const { items } = await response.json();
  
        const songData = items.map((song) => ({
          bookId: song.id,
          title: song.title || ['No author to display'],
          artists: song.subtitle,
          image: song.images.coverart || '',
        }));
  
        setSearchedSongs(songData);
        setSearchInput('');
      } catch (err) {
        console.error(err);
      }
      
    };

    return (
        <>
        <form className='Search' onSubmit={handleFormSubmit} >
        <input placeholder =" Search for Song" type = 'text' id = "search"/>
            <button className = "searchbutton" type="submit ">
            <GiMagnifyingGlass/>
            </button>
        </form>

        </>
    );
};

export default SearchSongs;