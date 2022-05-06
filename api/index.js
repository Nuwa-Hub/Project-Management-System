const express = require("express");
const app = express();
const mongoose =require("mongoose");
const dotenv =require("dotenv");
const userRoute=require("./routes/user")
const authRoute=require("./routes/auth")
const projectRoute=require("./routes/project")
const taskRoute=require("./routes/task")

const choreRoute=require("./routes/chore")

const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB connection Successfully!");
}).catch((err)=>{
    console.log(err);
});

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users",userRoute);
app.use("/api/projects",projectRoute);
app.use("/api/tasks",taskRoute);

app.use("/api/chores",choreRoute);


app.listen(5000,()=>{
    console.log("backend server is running! ")
})