require("dotenv").config();
const express = require("express")
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")

const userRoute = require('./routes/users');
const songRoute = require('./routes/songs');

app.use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use('/user', userRoute)
    .use('/song', songRoute);

const PORT = process.env.PORT || 5000;
const URI = process.env.DB_URI;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)));

