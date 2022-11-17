const router = require('express').Router();
const axios = require('axios');

const { logIn, handleCallback, getDetails, handleRefreshToken } = require('../controllers/users.js');


router.get('/login', logIn);
router.get('/details', getDetails)

router.post('/callback', handleCallback)
router.post('/refresh', handleRefreshToken)

module.exports = router;