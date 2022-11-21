const router = require('express').Router();
const axios = require('axios');

const { playSong, generateSong } = require('../controllers/songs.js');

router.post('/play', playSong);
router.post('/generate', generateSong)

module.exports = router;