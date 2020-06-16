const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    dishname: {
      type: String,
    },
    likes: {
      type: Number,
    },
    dishtype: {
      type: String,
    },
    time: {
      type: Number,
    },
    portions: {
      type: Number,
    },
    hashtag: {
      type: String,
    },
    ingredients: [
      {
        ingredient: {
          type: String,
        },
      },
    ],
    image: {
      type: Buffer,
    },
    description: {
      type: String,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
