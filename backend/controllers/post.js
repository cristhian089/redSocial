const Post = require("../models/post");
const User = require("../models/user");

const registerPost = async (req, res) => {
  if (!req.body.text || !req.body.hashtag)
    return res.status(400).send("Process failed: Incomplete data");

  let post = new Post({
    userId: req.user._id,
    text: req.body.text,
    hashtag: req.body.hashtag,
  });

  let result = await post.save();
  if (!result) return res.status(400).send("Failed to register post");
  return res.status(200).send({ result });
};

const listPost = async (req, res) => {
  let post = await Post.find({ userId : req.user._id })
    .populate("userId")
    .exec();
  if (!post || post.length === 0) return res.status(400).send("No post");
  return res.status(200).send({ post });
};

module.exports = { registerPost, listPost };
