// let p = require('python-shell');
const { spawn } = require("child_process")
var spotifyApi = require('./users.js').spotifyApi;
const Playlist = require('../models/Playlist')

const playSong = async (req, res) => {
    // console.log((await spotifyApi.getMyDevices()).body.devices);
    const deviceList = (await spotifyApi.getMyDevices()).body.devices;
    console.log(deviceList)
    const harmonyPlayer = deviceList.find(player => player.name == 'Harmony Music Player').id
    // const { songURI } = res
    console.log(harmonyPlayer)
    spotifyApi.play({ device_id: harmonyPlayer, context_uri: songURI });
    // console.log(await spotifyApi.getMyCurrentPlayingTrack());
}

const generateSong = (req, res) => {
    const { coords, uid } = req.body

    if (coords["startCoords"] && coords["endCoords"]) {
        const python = spawn('C:/Users/shash/Desktop/GitHub/Harmony/ML/env/Scripts/python', ['C:/Users/shash/Desktop/GitHub/Harmony/ML/getrecs.py', JSON.stringify(coords["startCoords"]), JSON.stringify(coords["endCoords"])])

        let result;
        python.stderr.on('data', (data) => {
            console.log(data.toString())
        })
    
        python.stdout.on('data', (data) => {
            result = JSON.parse(data.toString())
            result = (Object.keys(result)).map((trackid) => "spotify:track:" + trackid)
        })
    
        python.on('exit', async (code) => {
            // console.log('exittest')
            // return res.status(200).send({})
            console.log(result)
            try {
                const playlist = new Playlist({ uid, songList: result })
                await playlist.save()
                console.log(playlist)
                res.status(200).send(result)
            } catch (err) {
                res.status(400).send(err)
            }
            // console.log(result)
        })
    } else {
        return res.status(400).send({ message: "You failure" })
    }
}

module.exports = { playSong, generateSong }