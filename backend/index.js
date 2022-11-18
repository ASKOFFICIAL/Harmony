require("dotenv").config();
const express = require("express")
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")


const URI = process.env.DB_URI;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connected");
  }
);

app.use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use('/user', userRoute)
    .use('/song', songRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


