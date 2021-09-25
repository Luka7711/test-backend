const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
  thread: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const conversation = mongoose.model("Conversation", conversationSchema);

module.exports = conversation;
