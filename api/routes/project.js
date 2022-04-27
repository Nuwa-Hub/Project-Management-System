const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("./verifyToken");
const router =require("express").Router();
const Project = require("../models/Project");


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

  //GET ALL PROJECTS
  router.get("/",verifyTokenAndAuthorization, async (req, res) => {
    try {
      
      const Projects = await Project.find();
      res.status(200).json(Projects);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports=router;