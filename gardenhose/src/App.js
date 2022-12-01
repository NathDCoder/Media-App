import React from "react";
import NavLinks from "./Components/NavBar/NavBar";
import Title from "./Components/NavBar/Title";
import Background from "./Pages/Background";
import Home from "./Pages/Home"
import { Route, Routes } from 'react-router-dom';
import Signup from "./Components/Login/Signup";
import {Login} from "./Components/Login/Login";
import Searchbar from "./Components/Searchbar/Searchbar";
//import Songs from "./Pages/songChart"
import Genres from "./Pages/Genre";
import Artist from "./Pages/Artist";
import Playlist from "./Pages/Playlist";
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';



// const client = new ApolloClient({
//   uri: 'graphql',
//   cache: new InMemoryCache(),
// });


function App() {
  return ( 
<main>
    <nav>
      <NavLinks />
      <Title />
      <Background />
      <Searchbar/>
    </nav>
    {/* <Songs/> */}
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
                element={<Songs />}
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
