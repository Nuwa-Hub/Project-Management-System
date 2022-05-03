const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();
const Task = require("../models/Task");

//UPADATE Task
router.put("/:id", async (req, res) => {
  try {
    const updateTask = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateTask);
  } catch (err) {
    console.log("err");
    res.status(500).json(err);
  }
});
//DELETE Task
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updateTask = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json();
  } catch (err) {
    console.log("err");
    res.status(500).json(err);
  }
});

//CREATE task
router.post("/", async (req, res) => {
  const newTask = new Task(req.body);

  try {
    const savedTask = await newTask.save();
    res.status(200).json(savedTask);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get task by developer id
router.get("/find/:id", async (req, res) => {
  try {
    const Tasks = await Task.find({ developerId: req.params.id });
    res.status(200).json(Tasks);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get task by project id
router.get("/:id", async (req, res) => {
  try {
    const Tasks = await Task.find({ projectId: req.params.id });
    res.status(200).json(Tasks);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET ALL TaskS
router.get("/",  async (req, res) => {
  try {
    const Tasks = await Task.find();
    res.status(200).json(Tasks);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
