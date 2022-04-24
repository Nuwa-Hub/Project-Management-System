const { verifyTokenAndAdmin } = require("./verifyToken");
const router =require("express").Router();
const User = require("../models/User");

//GET ALL USER
router.get("/", async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});


//just a comment
module.exports=router;