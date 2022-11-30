import React from "react";
import NavLinks from "./Components/NavBar/NavBar";
import Title from "./Components/NavBar/Title";
import Background from "./Pages/Background";
import Home from "./Pages/Home"
import { Route, Routes } from 'react-router-dom';
import Signup from "./Components/Login/Signup";
import {Login} from "./Components/Login/Login";
import Genres from "./Pages/Genre";
import Artist from "./Components/ArtistList/ArtistPage";
import Songs from "./Pages/songChart";
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
                element={<Songs />}
              />   
      </Routes>
    </div>
</main>
  )
}

export default App;
