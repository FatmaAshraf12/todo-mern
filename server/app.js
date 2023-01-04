const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const Task = require("./models/Task");
const taskRoutes = require("./routes/task");
const userRoutes = require("./routes/user");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const uri = process.env.DB_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log("not connected", err.message));

app.listen(PORT, console.log("listening"));
app.use("/", taskRoutes);
app.use(userRoutes);

// Add new to do for specific user
/*app.post("/task/new", (req, res) => {
  const task = new Task({
    item: req.body.item,
    user: req.body.user,
  });
  task.save();
  res.json(task);
});

// Update an existing to do for specific user.
app.put("/task/update/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (req.body.item) task.item = req.body.item;
  task.complete = req.body.complete;
  task.save();
  res.json(task);
});

// Delete an existing to do for specific user.
app.delete("/tasks/delete/:id", async (req, res) => {
  const result = await Task.findByIdAndDelete(req.params.id);
  res.json({result});
});

// Get to do information for specific user
app.get("/task/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

// Get all to do for specific user
app.get("/tasks/:user", async (req, res) => {
  const tasks = await Task.find({user: req.params.user});
  res.json(tasks);
});
*/
