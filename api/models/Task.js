const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    Taskname: { type: String, required: true},
    managerId: { type: String, required: true },
    projectId: { type: String },
    status: { type: String, required: true },
    developerId: { type: String, required: true },
    duedate: {
        type: Date, required:true,
        min: '1987-09-28',
        max: '2994-05-23'
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);