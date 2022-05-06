const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    projectname: { type: String, required: true, unique: true },
    managerId: { type: String, required: true },
    companyname: { type: String, required: true },
    progress: { type: Number, required: true ,default:0},
    status: { type: String, required: true, default:"pending"},
    tasks: [
      {
        taskId: {
          type: String,
        },
      },
    ],
    duedate: {
        type: Date,
        min: '1987-09-28',
        max: '2994-05-23'
      },
    developers: [
      {
        developerId: {
            type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
