const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require("./routes/users.js")
const songRoute = require("./routes/songs.js")
const app = express();

app.use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use('/user', userRoute)
    .use('/song', songRoute);

app.listen(process.env.PORT || 8080);
// mongoose.connect(process.env.DB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(app.listen(process.env.PORT || 8080));