const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  category: { type: String, required: true },
  propertyType: { type: String, required: true },
  numberOfbeds: { type: Number, required: true },
  numberOfbathroom: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  zipcode: { type: Number, required: true },
  adCategory: { type: String, required: true },
});

const property = mongoose.model("Property", propertySchema);

module.exports = property;
