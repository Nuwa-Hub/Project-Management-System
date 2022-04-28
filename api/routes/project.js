const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("./verifyToken");
const router =require("express").Router();
const Project = require("../models/Project");

//UPADATE PROJECT
router.put("/:id",verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updateProject = await Project.findByIdAndUpdate(
      req.params.id,
      {$set:req.body},
      {new:true}
      );
    res.status(200).json(updateProject);
  } catch (err) {
    console.log("err")
    res.status(500).json(err);
  }
})
//DELETE PROJECT
router.delete("/:id",verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updateProject = await Project.findByIdAndDelete(req.params.id);
    res.status(200).json();
  } catch (err) {
    console.log("err")
    res.status(500).json(err);
  }
})

//CREATE
router.post("/", async (req, res) => {
    const newProject = new Project(req.body);
  
    try {
      const savedProject = await newProject.save();
      res.status(200).json(savedProject);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET Project
router.get("/find/:id",verifyTokenAndAuthorization, async (req, res) => {
    try {
      const project = await Project.findById(req.params.id);
      
      res.status(200).json(project);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/",verifyTokenAndAuthorization, async (req, res) => {
    try {
      
      const Projects = await Project.find();
      res.status(200).json(Projects);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET ALL PROJECTS
  router.get("/:id",verifyTokenAndAuthorization, async (req, res) => {
    try {
      
      const Projects = await Project.find({managerId:req.params.id});
      res.status(200).json(Projects);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  

  module.exports=router;