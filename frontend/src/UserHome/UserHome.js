import "./UserHome.css";
import { Grid, Typography, Button } from "@mui/material";
import axiosInstance from '../utils/axiosInstance';
import { BounceLoader } from 'react-spinners';
import { useLogin } from '../utils/LoginContext';
import SpotifyPlayer from 'react-spotify-web-playback';


const UserHome = () => {
  const { loggedIn, data, accessToken, songData, setSongData } = useLogin();

  // const toggleStart = () => { setIsStart(!isStart) }
  const togglePlay = (e) => {
    // console.log(e.currentTarget.id)
    setSongData(e.currentTarget.id)
   }
  // const toggleDisplayPlaylist = () => { setDisplayPlaylist(!displayPlaylist) }

  // Mood Graph Script
  var click=0;
  var coords = {}

  const handleClick = (e) => {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.

    if (click == 0){
      console.log("Left? : " + x + " ; Top? : " + y + ".");
      click=1
      document.getElementById('startpoint').style.display="block"
      document.getElementById('startpoint').style.top=y+"px"
      document.getElementById('startpoint').style.left=x+"px"
      coords["startCoords"] = [x/300, y/300]
    } else {
      console.log("Left? : " + x + " ; Top? : " + y + ".");
      click=0
      document.getElementById('endpoint').style.display="block"
      document.getElementById('endpoint').style.top=y+"px"
      document.getElementById('endpoint').style.left=x+"px"
      coords["endCoords"] = [x/300, y/300]
    }
  }

  const generatePlaylists = () => {
    axiosInstance.post('/song/generate', { coords, uid: data.id }).then((res) => {
      console.log(data.id)
      setSongData(res.data)
      document.getElementById('startpoint').style.display="none"
      document.getElementById('endpoint').style.display="none"
    })
  }

  return (
    <>
    {!loggedIn ? 
      <div style={{display: "flex", justifyContent: "center", width: "100%", alignItems: "center", height: "100vh"}}>
        <BounceLoader color="#36d7b7"/>
      </div>
      :
      <>
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
              <img className="playlist-thumbnail" id={data.topTrack.uri} src={data.topTrack.album.images[1].url} alt="Spotify thumbnail" width="150px" height="150px" onClick={togglePlay} />
          </Grid>
        </Grid>

        <Grid container pb={15}>
          <Grid item xs={12} pl={5} mb={2}>
            <Typography variant="h6" fontWeight="bold">
              Feel like listening to one of your playlists?
            </Typography>
          </Grid>
          {data.items.map((playlist) => {
            // console.log(playlist)
            return (
              <Grid item xs={3} pl={7} id={playlist.uri} onClick={togglePlay}>
                <img src={playlist.images[0].url} className="playlist-thumbnail" />
                <h5 style={{padding: "0"}}>{playlist.name}</h5>
              </Grid>
            )
          })}
        </Grid>

        <Grid container mb={50}>
          <Grid item xs={12} pl={3}>
            <Typography variant="h4" fontWeight="bold">
              Generate your own playlist.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div style={{"textAlign": "center", "width": "100%", "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "column"}}>
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
              <Button variant="outlined" color="secondary" onClick={generatePlaylists} style={{marginTop: "100px"}}>Generate Playlist</Button>
            </div>
          </Grid>
        </Grid>

        <div id="play-controls">
        {songData.length != 0 ? 
            <SpotifyPlayer
              token={accessToken}
              autoPlay
              uris={songData}
              styles={{
                activeColor: '#fff',
                bgColor: '#333',
                color: '#fff',
                loaderColor: '#fff',
                sliderColor: '#1cb954',
                trackArtistColor: '#ccc',
                trackNameColor: '#fff',
              }}
            />
        : <></> 
        }
      </div>
      </>
    }
    </>
  );
};

export default UserHome;
