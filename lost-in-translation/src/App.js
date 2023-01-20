//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,
        Routes,
        Route
      } from 'react-router-dom';

import Login from './view-pages/Login';
import Translate from './view-pages/Translate';
import Profile from './view-pages/Profile';


function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Routes>
        <Route> path = "/" element = { <Login/>} </Route> 
        <Route> path = "/profile" element = { <Profile/>} </Route> 
        <Route> path = "/translate" element = { <Translate/>} </Route> 
      <Routes/>
     </div>
    </BrowserRouter>
  );
}

export default App;
