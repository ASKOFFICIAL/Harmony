import Navbar from '../Navbar/Navbar';
import './Home.css';
import { Facebook, LinkedIn, GitHub, Mail } from '@mui/icons-material';

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <div id="section1">
        <div>
          <img src="./images/joy.jpg" alt="" width="500px" id="joyimage" />
        </div>
        <div>
          <h2>Harmony.</h2>
          <p id="className-subtext">Certified Mood Raiser</p>
        </div>

      </div>
      <div id="section2">
        <h2>
          What it is
        </h2>
        <p>
          Brick-like Phones have turned slimmer than wallets, Internet has become super fast but for some reason I can never find the perfect
          playlist for my mood. Enter, Harmony. Our website takes an input of your preferred start mood and end mood to find the ideal playlist for you.
          Our in house ML Model uses these moods and goes through our large library of music to arrange a symphony made just for your ears
        </p>
      </div>
      <div id="divimg">
        <img src="./images/piano.jpg" alt="" />
        <h2 id="memories">
          Make Memories <br />with Music
        </h2>
        <div id="line"></div>
      </div>
      <div id="section3">
        <h2>
          Who we are
        </h2>
        <p>
          In Short we're Young, Motivated Engineers hoping to make your day just a little happier. Pursuing our Engineering from VIT Vellore
          and hoping to get 100s in our Project Review 😳😳, We bring this product to you and hope you like it
        </p>
      </div>
      <div className="footerr">
        <footer>
          <div className="animated">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2" ></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
            <div className="wave" id="wave5"></div>
          </div>
          <ul className="icons">
            <li><a href="#"> <Facebook /> </a> </li>
            <li><a href="#"> <LinkedIn /> </a></li>
            <li><a href="#"> <GitHub /> </a></li>
            <li><a href="#"> <Mail /> </a></li>
          </ul>
          <ul className="timeline">
            <li><a href="#">Home </a></li>
            <li><a href="#section3">About</a></li>
            <li><a href="#">Use Spotify</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Community</a></li>
          </ul>
          <p>&copy; Harmony 2022 (Team Name) | All rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}
export default Home;
