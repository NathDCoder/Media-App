import React from "react";
import NavLinks from "./Components/NavBar/NavBar";
import Title from "./Components/NavBar/Title";
import Background from "./Pages/Background";
import Home from "./Pages/Home"
import { Route, Routes } from 'react-router-dom';
import SignupEngine from "./Components/Login/Signup";
import {Login} from "./Components/Login/Login";
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
                element={<SignupEngine />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              {/* <Route 
                path="/me" 
                element={<Profile />}
              />
              <Route 
                path="/profiles/:username" 
                element={<Profile />}
              />
              <Route 
                path="/thoughts/:thoughtId" 
                element={<SingleThought />}
              />   */}
      </Routes>
    </div>
</main>
  )
}

export default App;
