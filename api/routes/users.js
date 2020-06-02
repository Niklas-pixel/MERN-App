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

    res.status(201).send({ user, token });
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
    const token = user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

module.exports = router;
