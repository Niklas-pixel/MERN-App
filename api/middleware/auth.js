const User = require("../models/user");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token =
      req.header("Authorization").replace("Bearer ", "") ||
      req.body.token ||
      req.query.token ||
      req.headers["x-access-token"] ||
      req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET_STRING);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!token) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate yourself" });
  }
};
module.exports = auth;
