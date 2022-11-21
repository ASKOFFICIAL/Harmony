const dotenv = require('dotenv').config();
const SpotifyWebApi = require('spotify-web-api-node');
const User = require('../models/User');

var spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: "http://localhost:3000"
})

const scopes = ["user-read-private", "user-read-email", "playlist-read-private", "user-top-read", "user-modify-playback-state", "streaming", "user-read-playback-state"]

const logIn = async (req, res) => {
    const html = spotifyApi.createAuthorizeURL(scopes)
    res.send(html+"&show_dialog=true")
}

const handleCallback = async (req, res) => {
    const { code } = req.body;

    try {
        var data = await spotifyApi.authorizationCodeGrant(code)
        const { access_token, refresh_token, expires_in } = data.body;
        spotifyApi.setAccessToken(access_token)
        spotifyApi.setRefreshToken(refresh_token)

        res.status(200).send({ access_token, refresh_token, expires_in });
    } catch(err) {
        res.json(err)
    }
}

const getDetails = async (req, res) => {
    var result = {}
    try {
        var userDetails = await spotifyApi.getMe()
        result = Object.assign({}, result, userDetails.body)
        // console.log('test1')
        var playlists = ((await spotifyApi.getUserPlaylists()).body.items).sort(() => 0.5 - Math.random())
        result = Object.assign({}, result, { items: playlists.splice(0, 4) })
        // console.log('test2')
        var topTracks = ((await spotifyApi.getMyTopTracks({ time_range: "short_term" })).body.items)
        result = Object.assign({}, result, { topTrack: topTracks[0] })
        // console.log('test')
        // console.log(result)
        result = Object.assign({}, result, { 
            access_token: spotifyApi.getAccessToken(), 
            refresh_token: spotifyApi.getRefreshToken() 
        })
        // console.log(result)
        // console.log(spotifyApi)

        const check = await User.findOne({ id: result.id })
        console.log(check)
        if (!check) {
            const user = new User({ id: result.id })

            user
            .save()
            .then(() => {
                console.log("User added");
            })
            .catch((err) => {
                res.status(500).send({ message: err.message });
            });
        } else { console.log("User exists") }

        res.status(200).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
}

const handleRefreshToken = (req, res) => {
    try {
        spotifyApi.refreshAccessToken().then((data) => {
            spotifyApi.setAccessToken(data.body['access_token'])
            
            const { access_token, expires_in } = data.body;
            res.status(200).send({ access_token, expires_in })
        })
    } catch (err) {
        res.status(500).send(err)
    }
}

const getPlaylists = async (req, res) => {
    try {
        const result = await spotifyApi.getUserPlaylists()

        res.status(200).send(result.body.items)
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = { logIn, handleCallback, getDetails, handleRefreshToken, getPlaylists };
module.exports.spotifyApi = spotifyApi;
