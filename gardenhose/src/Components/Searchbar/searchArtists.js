import React, { useState } from 'react';
import { GiMagnifyingGlass } from "react-icons/gi";

import { searchingArtists } from "../../util/artistsAPI"


const SearchArtists = () => {
    // create state for holding returned shazam api data
    const [searchedArtists, setSearchedArtists] = useState([]);
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
        const response = await searchingArtists(searchInput);
  
        if (!response.ok) {
          throw new Error('something went wrong!');
        }
  
        const { items } = await response.json();
  
        const artistData = items.map((artist) => ({
          artistId: artist.id,
           title: artist.name,
        }));
  
        setSearchedArtists(artistData);
        setSearchInput('');
      } catch (err) {
        console.error(err);
      }
      
    };

    return (
        <>
        <form className='ml-10 absolute form2' >
        <input   placeholder ="Search for an Artist" type = 'text' id = "search"/>
            <button type="submit" onSubmit={handleFormSubmit}>
            <GiMagnifyingGlass/>
            </button>
        </form>

        {searchedArtists.map((artist)=> {
          return (
        <div className='w-full flex justify-center items-center flex-col'>
          <h1 className='font-bold text-2x1 text-white mt-2'>{artist.name} || </h1>
        </div>
            ) 
          })}
          
        </>
    );
};

export default SearchArtists;