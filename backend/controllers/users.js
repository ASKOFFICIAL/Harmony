const dotenv = require("dotenv").config();
const axios = require("axios");
const qs = require("qs");
const User = require("../models/User");

const logIn = async (req, res) => {
  try {
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`,
          "utf-8"
        ).toString("base64"),
    };

    const data = qs.stringify({ grant_type: "client_credentials" });
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      data,
      { headers: headers }
    );
    console.log(response);
    const uid = response.body.uid;
    const user = new User({
      uid: uid,
    });
    const check = await User.findOne({ uid: uid });
    if (!check) {
      user
        .save()
        .then(() => {
          console.log("User added");
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    }
    else{
        console.log("User exists")
    }

    res.status(200).json({ data: response.data.access_token });
  } catch (err) {
    res.status(500).json({ data: err });
  }
};

module.exports = { logIn };
