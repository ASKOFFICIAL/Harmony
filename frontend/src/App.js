import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./Home/Home"
import Song from "./Song/Song"
import Playlist from './Playlist/Playlist';
import UserHome from './UserHome/UserHome';
import Navbar from './Navbar/Navbar';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/song' element={<Song />} />
          <Route path='/playlists' element={<Playlist />} />
          <Route path='/userhome' element={<UserHome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
