const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoute = require("./routes/users.js")
const app = express();

app.use(cors())
app.use('/user', userRoute);

app.listen(process.env.PORT || 8080);
// mongoose.connect(process.env.DB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(app.listen(process.env.PORT || 8080));