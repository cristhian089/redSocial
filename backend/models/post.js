const mongoose = require("mongoose");
const moment = require("moment");

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "user" },
  text: String,
  hashtag: String,
  date: { type: Date, default: Date.now },
});

const post = mongoose.model("post",postSchema);
module.exports = post;
