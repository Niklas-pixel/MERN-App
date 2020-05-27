const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1:27017/recept-manager",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (error, client) => {
    if (error) {
      return console.log("unable to connect");
    }
    console.log("connected to database");
  }
);
