const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true
  },
  songList: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model("PLaylist", playlistSchema);
