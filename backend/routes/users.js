const router = require('express').Router();

const { logIn } = require('../controllers/users.js');

router.post('/login', logIn);

module.exports = router;