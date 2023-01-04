const router = require("express").Router();
const bodyParser = require("body-parser");
const Task = require("../models/Task");

// Add new to do for specific user
router.post("/task/new", (req, res) => {
  const task = new Task({
    item: req.body.item,
    user: req.body.user,
  });
  task.save();
  res.json(task);
});

// Update an existing to do for specific user.
router.put("/task/update/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (req.body.item) task.item = req.body.item;
  if (req.body.complete) task.complete = req.body.complete;
  task.save();
  res.json(task);
});

// Delete an existing to do for specific user.
router.delete("/tasks/delete/:id", async (req, res) => {
  const result = await Task.findByIdAndDelete(req.params.id);
  res.json({result});
});

// Get to do information for specific user
router.get("/task/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

// Get all to do for specific user
router.get("/tasks/:user", async (req, res) => {
  const tasks = await Task.find({user: req.params.user});
  res.json(tasks);
});

// Get all tasks
router.get("/tasks", async (req, res) => {
  const task = await Task.find({}).populate({
    path: "user",
    select: "-password",
  });
  res.send(task);
});

module.exports = router;
