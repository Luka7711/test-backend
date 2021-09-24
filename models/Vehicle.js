const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  model: { type: String, required: true },
  make: { type: String, required: true },
  year: { type: String, required: true },
  price: { type: Number, required: true },
  zipcode: { type: Number, required: true },
});

const vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = vehicle;
