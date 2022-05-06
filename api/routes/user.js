const { verifyTokenAndAdmin } = require("./verifyToken");
const router =require("express").Router();
const User = require("../models/User");




//UPADATE PROJECT
router.put("/:id",verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {$set:req.body},
      {new:true}
      );
    res.status(200).json(updateUser);
  } catch (err) {
    console.log("err")
    res.status(500).json(err);
  }
})
//DELETE PROJECT
router.delete("/:id",verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json();
  } catch (err) {
    console.log("err")
    res.status(500).json(err);
  }
})

//CREATE
router.post("/", async (req, res) => {
    const newUser = new User(req.body);
  
    try {
      const savedProject = await newUser.save();
      res.status(200).json(savedProject);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET AN USER
  router.get("/:id",verifyTokenAndAdmin, async (req, res) => {
    try {
      
      const User = await User.find({_ud:req.params.id});
      res.status(200).json(User);
    } catch (err) {
      res.status(500).json(err);
    }
  });
//GET ALL USER
router.get("/",async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find({isAdmin:false}).sort({ _id: -1 }).limit(4)
      : await User.find({isAdmin:false});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPADATE USER
router.put("/:id",verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {$set:req.body},
      {new:true}
      );
    res.status(200).json(updateUser);
  } catch (err) {
    console.log("err")
    res.status(500).json(err);
  }
})
//DELETE USER
router.delete("/:id",verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json();
  } catch (err) {
    console.log("err")
    res.status(500).json(err);
  }
})

//just a comment
module.exports=router;