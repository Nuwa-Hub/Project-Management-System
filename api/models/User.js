const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    telNo: { type: String, required: true },
    img: { type: String },
    projects: [
      {
        projectId: {
          type: String,
        },
      },
    ],
    tasks: [
      {
        taskId: {
          type: String,
        },
      },
    ],
    isAdmin: {
      type: Boolean,
      default: false,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
