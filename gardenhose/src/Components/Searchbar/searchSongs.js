
import React, { useState } from 'react';
import { GiMagnifyingGlass } from "react-icons/gi";

import { Searching } from "../../util/songsAPI";


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
        const response = await Searching(searchInput);
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }
  
        const { items } = await response.json();
  
        const songData = items.map((song) => ({
          title: song.caption,
         video: song.action.uri
        
      
        }));
  
        setSearchedSongs(songData);
        setSearchInput('');
      } catch (err) {
        console.error(err);
      }
      
    };

    return (
        <>
        <form className='ml-10' >
        <input   placeholder =" Search for Song" type = 'text' id = "search"/>
            <button type="submit " onSubmit={handleFormSubmit}>
            <GiMagnifyingGlass/>
            </button>
        </form>

        {searchedSongs.map((song)=> {
          return (
        <div className='w-full flex justify-center items-center flex-col'>
          <iframe width='420' height='315' title={song.caption} src={song.action.uri}></iframe>
        </div>
            ) 
          })}

        </>
    );
};

export default SearchSongs;