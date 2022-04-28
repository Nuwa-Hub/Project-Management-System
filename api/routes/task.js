const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("./verifyToken");
const router =require("express").Router();
const Task = require("../models/Task");

//UPADATE Task
router.put("/:id",verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updateTask = await Task.findByIdAndUpdate(
      req.params.id,
      {$set:req.body},
      {new:true}
      );
    res.status(200).json(updateTask);
  } catch (err) {
    console.log("err")
    res.status(500).json(err);
  }
})
//DELETE Task
router.delete("/:id",verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updateTask = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json();
  } catch (err) {
    console.log("err")
    res.status(500).json(err);
  }
})

//CREATE
router.post("/", async (req, res) => {
    const newTask = new Task(req.body);
  
    try {
      const savedTask = await newTask.save();
      res.status(200).json(savedTask);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  router.get("/:id",verifyTokenAndAuthorization, async (req, res) => {
    try {
      
      const Tasks = await Task.find({_id:req.params.id});
      res.status(200).json(Tasks);
    } catch (err) {
      res.status(500).json(err);
    }
  });
    //GET ALL TaskS
  router.get("/",verifyTokenAndAuthorization, async (req, res) => {
    try {
      
      const Tasks = await Task.find();
      res.status(200).json(Tasks);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  module.exports=router;