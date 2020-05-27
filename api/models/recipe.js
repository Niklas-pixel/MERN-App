const mongoose = require("mongoose");

// const recipeSchema = new mongoose.Schema();

const recipeSchema = new mongoose.Schema({
  dishname: {
    type: String,
  },
  ingredients: {
    type: String,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
