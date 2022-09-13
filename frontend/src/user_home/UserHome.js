import "./UserHome.css";
import { useState } from 'react'
import { Container, Grid, Typography, Box, Paper, Fab, Slide, Slider } from "@mui/material";
import { PlayArrow, Pause, SkipNext, SkipPrevious, VolumeUp,
  Repeat, Shuffle, ArrowDropUp, ArrowDropDown } from "@mui/icons-material";

const UserHome = () => {
  const [isStart, setIsStart] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  // const [displayVolumeSlider, setDisplayVolumeSlider] = useState(false);
  // const [volume, setVolume] = useState(30);
  const [displayPlaylist, setDisplayPlaylist] = useState(false)

  const toggleStart = () => { setIsStart(!isStart) }
  const togglePlay = () => { setIsPlaying(!isPlaying) }
  const toggleDisplayPlaylist = () => { setDisplayPlaylist(!displayPlaylist) }
  // const toggleDisplayVolumeSlider = () => { setDisplayVolumeSlider(!displayVolumeSlider) }
  // const handleChange = (event, newVolume) => { setVolume(newVolume) }

  return (
    <>
      <Grid container spacing={2} id="welcome" alignItems="center">
        <Grid item xs={8}>
          <Typography variant="h3" fontWeight="bold">
            Welcome back, <br />Lorem Ipsum
          </Typography>
        </Grid>
        <Grid item xs={4} id="spotify">
          <Typography variant="h6" fontWeight="bold">
            Spotify Recently Listened
          </Typography>
          {/* <Box sx={{
            width: 150,
            height: 150,
            backgroundColor: 'gray'
          }}> */}
            <img src="./images/spotify-sample-cover.png" alt="Spotify thumbnail" width="150px" height="150px" />
          {/* </Box> */}
        </Grid>
      </Grid>

      <Grid container pb={15}>
        <Grid item xs={12} pl={5} mb={2}>
          <Typography variant="h6" fontWeight="bold">
            Most Recent Playlists
          </Typography>
        </Grid>
        <Grid item xs={3} pl={7}>
          <Box className="playlist-thumbnail" />
        </Grid>
        <Grid item xs={3} pl={7}>
          <Box className="playlist-thumbnail" />
        </Grid>
        <Grid item xs={3} pl={7}>
          <Box className="playlist-thumbnail" />
        </Grid>
        <Grid item xs={3} pl={7}>
          <Box className="playlist-thumbnail" />
        </Grid>
      </Grid>

      <Grid container mb={50}>
        <Grid item xs={12} pl={3}>
          <Typography variant="h4" fontWeight="bold">
            Generate your own playlist.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Slide direction="right" in={isStart} mountOnEnter unmountOnExit timeout={{
            appear: 900,
            enter: 900,
            exit: 10
          }}
          >
            <Paper className="mood-paper">
              <Typography variant="h6" fontWeight="bold" pl={3} pt={3}>Choose your start mood</Typography>
              <Container sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "space-between",
              }}>
                  <Fab variant="extended" className="mood-button" onClick={ () => toggleStart() }>Happy</Fab>
                  <Fab variant="extended" className="mood-button" onClick={ () => toggleStart() }>Sad</Fab>
                  <Fab variant="extended" className="mood-button" onClick={ () => toggleStart() }>Energetic</Fab>
                  <Fab variant="extended" className="mood-button" onClick={ () => toggleStart() }>Dance</Fab>
                  <Fab variant="extended" className="mood-button" onClick={ () => toggleStart() }>Lo-Fi</Fab>
                  <Fab variant="extended" className="mood-button" onClick={ () => toggleStart() }>Study</Fab>
              </Container>
            </Paper>
          </Slide>

          <Slide direction="left" in={!isStart} mountOnEnter unmountOnExit timeout={{
            appear: 900,
            enter: 900,
            exit: 10
          }}
          >
            <Paper className="mood-paper">
              <Typography variant="h6" fontWeight="bold" pl={3} pt={3}>Choose your end mood</Typography>
              <Container sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "space-between",
              }}>
                  <Fab variant="extended" className="mood-button" onClick={ () => toggleStart() }>Happy</Fab>
                  <Fab variant="extended" className="mood-button" onClick={ () => toggleStart() }>Sad</Fab>
                  <Fab variant="extended" className="mood-button" onClick={ () => toggleStart() }>Energetic</Fab>
                  <Fab variant="extended" className="mood-button" onClick={ () => toggleStart() }>Dance</Fab>
                  <Fab variant="extended" className="mood-button" onClick={ () => toggleStart() }>Lo-Fi</Fab>
                  <Fab variant="extended" className="mood-button" onClick={ () => toggleStart() }>Study</Fab>
              </Container>
            </Paper>
          </Slide>
        </Grid>
      </Grid>

      <footer id="play-controls">
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
            <Typography>Kodaline</Typography>
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
      </footer>
    </>
  );
};

export default UserHome;
