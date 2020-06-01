var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello");
});

const Recipe = require("../models/recipe");

router.post("/recipes", async (req, res) => {
  const recipe = new Recipe(req.body);
  console.log(req.body);
  console.log(recipe);
  try {
    await recipe.save();
    res.status(201).send(recipe);
  } catch (e) {
    console.log(e);
  }
});

router.get("/recipes", async (req, res) => {
  Recipe.find({})
    .then((recipes) => res.send(recipes))
    .catch((e) => {
      res.status(500).send();
    });
});

module.exports = router;
