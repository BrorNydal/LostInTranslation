//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter,
        Routes,
        Route,
        NavLink
      } from 'react-router-dom';

import LoginPage from './view-pages/Login.jsx';
import TranslatePage from './view-pages/Translate.jsx';
import ProfilePage from './view-pages/Profile.jsx';


function App() {

  function clearLocalStorage(){
    localStorage.clear();
  }

  return (
    <BrowserRouter>
     <div className="App">
      <NavLink to="/">Login page</NavLink>
      <NavLink to="/profile"> Profile </NavLink>
      <NavLink to="/translate"> Translate </NavLink>
      <button onClick={clearLocalStorage}>Clear Local Storage</button>

      <Routes>
        <Route path = "/" element = { <LoginPage/>} />
        <Route path = "/profile" element = { <ProfilePage/>} /> 
        <Route path = "/translate" element = { <TranslatePage/>} /> 

      </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
