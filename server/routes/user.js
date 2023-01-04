const User = require("../models/User");
const router = require("express").Router();

// Get all users
router.get("/users", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});
module.exports = router;
