var express = require("express");
var router = express.Router();
const User = require("../models/user");

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    const token = await user.generateAuthToken();

    await user.save();

    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

module.exports = router;
