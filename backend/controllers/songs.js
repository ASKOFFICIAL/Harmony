var spotifyApi = require('./users.js').spotifyApi;

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

module.exports = { playSong }