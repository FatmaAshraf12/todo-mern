const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 3, maxlength: 30},
  email: {
    type: String,
    minlength: 3,
    maxlength: 200,
    unique: true,
  },
  password: {type: String, minlength: 3, maxlength: 1024},
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
