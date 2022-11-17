import { useEffect, useState } from 'react';
import { FavoriteBorder, Favorite, PlayArrow, Pause, SkipNext, SkipPrevious, Loop, Shuffle, QueueMusic } from '@mui/icons-material';
import { Slider, Box, Typography } from '@mui/material';
import "./Song.css";
import axiosInstance from '../utils/axiosInstance';
import { useLogin } from '../utils/LoginContext';

const Song = () => {
    const { data } = useLogin();

    useEffect(() => {
        axiosInstance.post('/song/play', { songURI: data?.topTrack.uri });
    }, []);

    const [isLiked, setIsLiked] = useState(false)
    const [isPlaying, setIsPlaying] = useState(true)
    const [position, setPosition] = useState(0)
    const [duration, setDuration] = useState(200)

    const toggleIsLiked = () => { setIsLiked(!isLiked) }
    const toggleIsPlaying = () => { setIsPlaying(!isPlaying) }
    const formatDuration = (value) => {
        const minute = Math.floor(value / 60);
        const secondsLeft = value - minute * 60;
        return `${minute}:${secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}`
    }

    return (
        <div id="main">
            <div id="main-music">
                <div id="music">
                    <div id="cover">
                        <img src="./images/Needed.jpg" />
                    </div>
            
                    <div id="music_name">
                        <h2>Needed Me</h2>
                        <p>Rihanna - ANTI [Explicit]</p>
                    </div>
                </div>
            </div>
            <div id="user-seeker-controls">
                <div className="seeker">
                    <Slider
                        aria-label="time-indicator"
                        size="small"
                        value={position}
                        min={0}
                        step={1}
                        max={duration}
                        onChange={(_, value) => setPosition(value)}
                        sx={{color: "white", width: "100%"}}
                    />
                    <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: -1,
                    }}
                    >
                    <Typography sx={{
                        fontSize: "12px",
                        color: "gray",
                        fontWeight: "bold",
                        fontFamily: "Product Sans"
                    }}>{formatDuration(position)}</Typography>
                    <Typography sx={{
                        fontSize: "12px",
                        color: "gray",
                        fontWeight: "bold",
                        fontFamily: "Product Sans"
                    }}>{formatDuration(duration - position)}</Typography>
                    </Box>
                </div>

                <div id="user-controls">
                    <div id="options_bar">
                            <div i="heart">
                                {isLiked
                                ? <Favorite fontSize="large" onClick={ () => toggleIsLiked() } />
                                : <FavoriteBorder fontSize="large" onClick={ () => toggleIsLiked() } />
                                }
                            </div>    
                        
                            <div id="center">
                                <SkipPrevious fontSize="large" />
                                {isPlaying
                                ? <Pause fontSize="large" onClick={ () => toggleIsPlaying() } />
                                : <PlayArrow fontSize="large" onClick={ () => toggleIsPlaying() } />
                                }
                                <SkipNext fontSize="large" />
                                <Shuffle fontSize="large" />
                            </div>
                            
                            <div id="right">
                                <QueueMusic fontSize="large" />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Song;