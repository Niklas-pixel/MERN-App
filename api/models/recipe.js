const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  dishname: {
    type: String,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
