const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: false },
  email: { type: String, required: true },
  savedList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "onModel",
      required: false,
    },
  ],
  onModel: {
    type: String,
    required: false,
    service: ["Product", "Property", "Job", "Vehicle"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
