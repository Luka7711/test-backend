const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  car: String,
  price: String,
  image: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
