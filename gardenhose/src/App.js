import React from "react";
import NavLinks from "./Components/NavBar/NavBar";
import Title from "./Components/NavBar/Title";
import Background from "./Pages/Background";
import Home from "./Pages/Home"
import { Route, Routes } from 'react-router-dom';
import Signup from "./Components/Login/Signup";
import {Login} from "./Components/Login/Login";
// import Searchbar from "./Components/Searchbar/Searchbar";
import Songs from "./Pages/songChart"
import SongsPage from "./Pages/Songs";
import Genres from "./Pages/Genre";
import Artist from "./Pages/Artist";
import Playlist from "./Pages/Playlist";


function App() {
  return ( 
<main>
    <nav>
      <NavLinks />
      <Title />
      {/* <Searchbar /> */}
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
                element={<Artist />}
              />
              <Route 
                path="/Songs" 
                element={<SongsPage />}
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
