//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter,
        Routes,
        Route
      } from 'react-router-dom';

import LoginPage from './view-pages/Login.jsx';
import TranslatePage from './view-pages/Translate.jsx';
import ProfilePage from './view-pages/Profile.jsx';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
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
