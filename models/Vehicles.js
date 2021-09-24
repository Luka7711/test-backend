const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  model: { type: String, required: true },
  make: { typ: String, required: true },
  year: { type: String, required: true },
  price: { type: Number, required: true },
  zipcode: { type: Number, required: true },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
