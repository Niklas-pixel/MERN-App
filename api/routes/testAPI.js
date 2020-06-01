var express = require("express");
var router = express.Router(); // La till new

const app = express();
app.use(express.json());

router.get("/", (req, res) => {
  res.send("API is working yeah");
});
module.exports = router;
