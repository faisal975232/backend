const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(
      "mongodb://127.0.0.1/hanabi?retryWrites=true&w=majority"
    )
    .then(() => {
      console.warn("connected");
    });
};



module.exports = { connectDB };
