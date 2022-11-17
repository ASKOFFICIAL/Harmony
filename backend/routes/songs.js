const router = require('express').Router();
const axios = require('axios');

const { playSong } = require('../controllers/songs.js');

router.post('/play', playSong);

module.exports = router;