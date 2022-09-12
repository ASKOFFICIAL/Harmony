import './Home.css'
import {Facebook,LinkedIn,GitHub,Mail} from '@mui/icons-material';
const Home=()=>{

return (
    <>
    <header>
            <div class="container">
            <a href="#">
              <h1 class="logo">
                <img src="./images/Harmony_logo.jpeg" alt="logo" class="logo" width="40"/>
              </h1>
            </a>
          
              <nav>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">What it is</a></li>
                  <li><a href="#">Who we are</a></li>
                  <li class="login_but">
                        <button class="btn btn1" onclick="location.href='#'">Login</button>
                  </li>
                </ul>
              </nav>
            </div>
        </header>
  
        <div id="section1">
          <div>
            <img src="./images/joy.jpg" alt="" width="500px" id="joyimage"/>
          </div>
          <div>
            <h2>Harmony.</h2>
            <p id="class-subtext">Certified Mood Raiser</p>
          </div>
          
        </div>
        <div id="section2">
          <h2>
            What it is
          </h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it ove
            000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
            words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the un
          </p>
        </div>
        {/* <div class="pianocontainer1" style="">
          <div class="keyboard anim-sequence">
            <div class="key anim1"></div>
            <div class="key black">
              <div class="anim2"></div>
            </div>
            <div class="key anim3"></div>
            <div class="key black">
              <div class="anim4"></div>
            </div>
            <div class="key anim5"></div>
            <div class="key anim6"></div>
            <div class="key black">
              <div class="anim7"></div>
            </div>
            <div class="key anim8"></div>
            <div class="key black">
              <div class="anim9"></div>
            </div>
            <div class="key anim10"></div>
            <div class="key black">
              <div class="anim11"></div>
            </div>
            <div class="key anim12"></div>
          </div>
        </div>
        <div class="pianocontainer2" style="">
          <div class="keyboard anim-sequence">
            <div class="key anim1"></div>
            <div class="key black">
              <div class="anim2"></div>
            </div>
            <div class="key anim3"></div>
            <div class="key black">
              <div class="anim4"></div>
            </div>
            <div class="key anim5"></div>
            <div class="key anim6"></div>
            <div class="key black">
              <div class="anim7"></div>
            </div>
            <div class="key anim8"></div>
            <div class="key black">
              <div class="anim9"></div>
            </div>
            <div class="key anim10"></div>
            <div class="key black">
              <div class="anim11"></div>
            </div>
            <div class="key anim12"></div>
          </div>
        </div> */}
        <div id="divimg">
        <img src="./images/piano.webp" alt="" />
      </div>
        <div id="section3">
          <h2>
            Who we are
          </h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it ove
            000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
            words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the un
          </p>
        </div>
        <div class="footerr">
        <footer>
        <div class="animated">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2" ></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
          <div class="wave" id="wave5"></div>
          </div>
          <ul class="icons">
          <li><a href="#"> <Facebook /> </a> </li>
          <li><a href="#"> <LinkedIn/> </a></li>
          <li><a href="#"> <GitHub/> </a></li>
          <li><a href="#"> <Mail/> </a></li>
          </ul>
          <ul class="timeline">
          <li><a href="#">Home </a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Use Spotify</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Community</a></li>
        </ul>
        <p>@Harmony 2022 (Team Name) | All rights Reserved.</p>
      </footer>
      </div> 
          </>
);
}
export default Home;
