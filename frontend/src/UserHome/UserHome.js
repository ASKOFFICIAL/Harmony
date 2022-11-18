import "./UserHome.css";
import { useState, useEffect } from 'react'
import { Container, Grid, Typography, Box, Paper, Fab, Slide, Slider } from "@mui/material";
import { PlayArrow, Pause, SkipNext, SkipPrevious, VolumeUp, Repeat, Shuffle, ArrowDropUp, ArrowDropDown } from "@mui/icons-material";
import Navbar from '../Navbar/Navbar';
import axiosInstance from '../utils/axiosInstance';
import { BounceLoader } from 'react-spinners';
import { useLogin } from '../utils/LoginContext';

const UserHome = () => {
  // const [userData, setUserData] = useState();
  const { setLoggedIn, data, setData } = useLogin(); 
  const [isStart, setIsStart] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  // const [displayVolumeSlider, setDisplayVolumeSlider] = useState(false);
  // const [volume, setVolume] = useState(30);
  const [displayPlaylist, setDisplayPlaylist] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axiosInstance('/user/details').then((res) => {
      // setUserData(res.data)
      setData(res.data)
    })
  }, [setData])
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      setLoggedIn(true)
      console.log(data)
      // console.log(data)
      // console.log(userData)
      // {userData.items.map(playlist => {
      //   console.log(playlist.images[0].url)
      // })}
    }, 3000)
  }, [data, setLoggedIn])

  const toggleStart = () => { setIsStart(!isStart) }
  const togglePlay = () => { setIsPlaying(!isPlaying) }
  const toggleDisplayPlaylist = () => { setDisplayPlaylist(!displayPlaylist) }
  // const toggleDisplayVolumeSlider = () => { setDisplayVolumeSlider(!displayVolumeSlider) }
  // const handleChange = (event, newVolume) => { setVolume(newVolume) }

  // Mood Graph Script
  var click=0;

  const handleClick = (e) => {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
      if (click==0){
      console.log("Left? : " + x + " ; Top? : " + y + ".");
        click=1
        document.getElementById('startpoint').style.display="block"
        document.getElementById('startpoint').style.top=y+"px"
        document.getElementById('startpoint').style.left=x+"px"
      }
      else{
        console.log("Gay Left? : " + x + " ; Top? : " + y + ".");
        click=0
        document.getElementById('endpoint').style.display="block"
        document.getElementById('endpoint').style.top=y+"px"
        document.getElementById('endpoint').style.left=x+"px"
      }
  }


  return (
    <>
    {isLoading ? 
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", margin: "0px", padding: "0"}}>
        <BounceLoader color="#36d7b7"/>
      </div>
      :
      <>
        <Navbar />
        <Grid container spacing={2} id="welcome" alignItems="center">
          <Grid item xs={8}>
            <Typography variant="h3" fontWeight="bold">
              Welcome back, <br />{data?.display_name}
            </Typography>
          </Grid>
          <Grid item xs={4} id="spotify">
            <Typography variant="h6" fontWeight="bold">
              Your Recent Top Track
            </Typography>
              <img src={data.topTrack.album.images[1].url} alt="Spotify thumbnail" width="150px" height="150px" />
          </Grid>
        </Grid>

        <Grid container pb={15}>
          <Grid item xs={12} pl={5} mb={2}>
            <Typography variant="h6" fontWeight="bold">
              Feel like listening to one of your playlists?
            </Typography>
          </Grid>
          {data && data.items.map((playlist) => {
            <Grid item xs={3} pl={7}>
              <img src={playlist.images[0].url} className="playlist-thumbnail" />
            </Grid>
          })}
        </Grid>

        <Grid container mb={50}>
          <Grid item xs={12} pl={3}>
            <Typography variant="h4" fontWeight="bold">
              Generate your own playlist.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div style={{"textAlign": "center", "width": "100%", "display": "flex", "justifyContent": "center", "alignItems": "center"}}>
              <a href="#">
                <div className="graph-container" onClick={handleClick}>
                  <div className="in-graph-container"  style={{"top":"-35px", "left":" 40%"}}><h3>Arousal</h3></div>
                  <div className="in-graph-container" style={{"top":"41%", "left":"310px"}}><h3>Pleasure</h3></div>
                  <div className="in-graph-container" style={{"top":"300px", "left":"35%"}}><h3>Sleepiness</h3></div>
                  <div className="in-graph-container" style={{"top":"41%", "left":"-70px"}}><h3>Misery</h3></div>
                  <div className="in-graph-container" style={{"top":"25px", "left":"10px"}}><h4>Distress</h4></div>
                  <div className="in-graph-container" style={{"top":"25px", "left":"240px"}}><h4>Excitement</h4></div>
                  <div className="in-graph-container" style={{"top":"235px", "left":"240px"}}><h4>Contentment</h4></div>
                  <div className="in-graph-container" style={{"top":"235px", "left":"0px"}}><h4>Depression</h4></div>
                  <div id="hor-line" className="in-graph-container"></div>
                  <div id="ver-line" className="in-graph-container"></div>
                  <div id="startpoint" className="in-graph-container"></div>
                  <div id="endpoint" className="in-graph-container"></div>
                </div>
              </a>
              {/* <div><input type="button" id="coordbutton" value="Send Coords" /></div> */}
            </div>
          </Grid>
        </Grid>

        <div id="play-controls" onClick={ () => window.location.href="/song" }>
          <div>
            <SkipPrevious className="play-controls-icon" fontSize="large" />
            {isPlaying
            ? <Pause className="play-controls-icon" fontSize="large" onClick={ () => togglePlay() } />
            : <PlayArrow className="play-controls-icon" fontSize="large" onClick={ () => togglePlay() } /> 
            }
            <SkipNext className="play-controls-icon" fontSize="large" />
          </div>
          <div id="play-controls-song">
            {/* <Box id="play-controls-thumbnail" /> */}
            <img src="./images/spotify-sample-cover.png" alt="Spotify thumbnail" id="play-controls-thumbnail" />
            <div>
              <Typography variant="h5" >All I Want</Typography>
              <Typography variant="p">Kodaline</Typography>
            </div>
          </div>
          <div>
            {/* {displayVolumeSlider
            ? <Slider aria-label="volume" value={volume} onChange={handleChange} />
            : <></>
            }
            <VolumeUp id="volume" className="play-controls-icon" fontSize="large"
              onMouseEnter={ () => { toggleDisplayVolumeSlider() }}
              onMouseLeave={ () => { toggleDisplayVolumeSlider() }}
            /> */}
            <Repeat className="play-controls-icon" fontSize="large" />
            <Shuffle className="play-controls-icon" fontSize="large" />
            {displayPlaylist
            ? <ArrowDropDown className="play-controls-icon" fontSize="large" onClick={ () => toggleDisplayPlaylist() } />
            : <ArrowDropUp className="play-controls-icon" fontSize="large" onClick={ () => toggleDisplayPlaylist() } />
            }
          </div>
        </div>
      </>
    }
    </>
  );
};

export default UserHome;
