const express = require("express");
const router = new express.Router();
const Recipe = require("../models/recipe");
const auth = require("../middleware/auth");
const multer = require("multer");
const sharp = require("sharp");

// CREATE NEW RECIPE
router.post("/recipes/new", auth, async (req, res) => {
  const recipe = new Recipe({
    ...req.body,
    owner: req.user._id,
  });
  try {
    await recipe.save();
    res.status(201).send(recipe);
  } catch (e) {
    res.status(404).send(e);
  }
});

// Upload new image
const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, callback) {
    if (!file.originalname.match(/\.(jpeg|png|jpg)$/)) {
      return callback(
        new Error(
          "Upload needs to be an image with extension .png, .jpg or .jpeg and can't be larger then 1MB"
        )
      );
    }
    callback(undefined, true);
  },
});

router.post(
  "/recipe/upload/image",
  auth,
  upload.single("image"),
  async (req, res) => {
    const recipe = new Recipe({
      owner: req.user._id,
    });
    console.log(req.file);
    console.log(req.user);
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();
    recipe.image = buffer;
    await recipe.save();
    res.send();
  },
  (error, req, res, next) => {
    res.send({ error: error.message });
  }
);

module.exports = router;
