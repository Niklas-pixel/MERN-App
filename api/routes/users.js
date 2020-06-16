var express = require("express");
var router = express.Router();
const User = require("../models/user");

// SKAPA EN NY USER
router.post("/users", async (req, res) => {
  const user = new User(req.body);
  console.log(req.body);
  try {
    const token = await user.generateAuthToken();

    await user.save();

    res.cookie("token", token, { httpOnly: true }).sendStatus(200);
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

// LOGGA IN EN BEFINTLIG USER
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.cookie("token", token, { httpOnly: true }).sendStatus(200);
  } catch (e) {
    res.status(400).send();
  }
});

module.exports = router;
