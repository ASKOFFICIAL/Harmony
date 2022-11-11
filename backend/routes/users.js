const router = require('express').Router();

const { logIn } = require('../controllers/users.js');

router.get('/login', logIn);

module.exports = router;