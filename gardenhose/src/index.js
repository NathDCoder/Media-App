import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './Components/Home/Home.css'

// const client = new ApolloClient({
//   uri: 'https://flyby-gateway.herokuapp.com/',
//   cache: new InMemoryCache(),
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
