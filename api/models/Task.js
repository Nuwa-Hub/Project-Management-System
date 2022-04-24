const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    Taskname: { type: String, required: true, unique: true },
    managerId: { type: String, required: true },
    projectId: { type: String },
    companyname: { type: String, required: true },
    status: { type: String, required: true },
    developerId: { type: String, required: true },
    duedate: {
        type: Date,
        min: '1987-09-28',
        max: '2994-05-23'
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);