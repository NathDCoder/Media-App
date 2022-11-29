import React from "react";
import NavLinks from "./Pages/NavBar";
import TEST from "./Pages/TEST";
import Background from "./Pages/Background";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';



// const client = new ApolloClient({
//   uri: 'https://flyby-gateway.herokuapp.com/',
//   cache: new InMemoryCache(),
// });


function App() {
  return ( 
    <div >
      <NavLinks />
      <TEST />
      <Background />
    </div>
  )
}

export default App;
