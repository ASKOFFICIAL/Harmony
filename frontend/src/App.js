import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./Home/Home"
// import Song from "./Song/Song"
// import Playlist from './Playlist/Playlist';
import UserHome from './UserHome/UserHome';
import LoginContext from './utils/LoginContext';
import Navbar from './Navbar/Navbar';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <>
    <Router>
      {code ? 
        <LoginContext code={code}>
          <Navbar />
          <UserHome />
        </LoginContext>
        : <Home /> }
    </Router>
    </>
  );
}

export default App;


// {/* <LoginContext> */}
        // {/* <Router>
          // <Routes> */}
          // {
            // code
            // ? 
              // <Navbar />
            // <>
              // {/* <UserHome /> */}
            // {/* </> */}
              // <Route exact path='/' element={<Home />} />
              // :
              // <Home />
              // <>
              //   <Route path='/song' element={<Song />} />
              //   <Route path='/playlists' element={<Playlist />} />
              //   <Route path='/userhome' element={<UserHome />} />
              // </>
          // }
            // {/* </Routes>
          // </Router> */}
        // {/* </LoginContext> */}