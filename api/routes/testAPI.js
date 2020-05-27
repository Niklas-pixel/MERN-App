var express = require("express");
var router = express.Router(); // La till new

const app = express();
app.use(express.json());

// const Recipe = require("../models/recipe");

// router.post("/recipes", async (res, req) => {
//   const recipe = new Recipe(req.body);
//   console.log(req.body);
//   console.log(recipe);
//   try {
//     await recipe.save();
//     res.status(201).send(recipe);
//   } catch (e) {
//     console.log(e);
//   }
// });

router.get("/", (req, res) => {
  res.send("API is working yeah");
});
module.exports = router;
