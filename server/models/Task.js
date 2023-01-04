const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  item: {type: String, required: true},
  complete: {type: Boolean, default: false},
  timestamp: {
    type: String,
    default: Date.now(),
  },
  user: {type: mongoose.Types.ObjectId, ref: "User", required: true},
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
