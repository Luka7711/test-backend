const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: false },
  zipcode: { type: Number, required: true },
});

const product = mongoose.model("Product", productSchema);

module.exports = product;
