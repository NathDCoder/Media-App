import React from "react";
import NavLinks from "./Components/NavBar/NavBar";
import Title from "./Components/NavBar/Title";
import Background from "./Pages/Background";
import Home from "./Pages/HomePage";
import { Route, Routes } from 'react-router-dom';
import Signup from "./Components/Login/Signup";
import {Login} from "./Components/Login/Login";
// import Searchbar from "./Components/Searchbar/Searchbar";
import SearchSongs from "./Components/Searchbar/searchSongs";
// import SongsPage from "./Pages/Songs";
import SearchArtists from "./Components/Searchbar/searchArtists";
import Genres from "./Components/Genres/Genre";
// import Artists from "./Pages/ArtistPage";
import Playlist from "./Pages/Playlist";


function App() {
  return ( 
<main>
    <nav>
      <NavLinks />
      <Title />
     <Background />
    </nav>
  
    <div>
       <Routes>
            <Route 
                path="/"
                element={<Home />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/Genres" 
                element={<Genres />}
              />
              <Route 
                path="/Artist" 
                element={<SearchArtists />}
              />
              <Route 
                path="/Songs" 
                element={<SearchSongs />}
              />  
              <Route 
                path="/Playlists" 
                element={<Playlist />}
              /> 
      </Routes>
    </div>
</main>
  )
}

export default App;
