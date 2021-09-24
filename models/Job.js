const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  jobType: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  minSalary: { type: Number, required: true },
  maxSalary: { type: Number, required: true },
  perHour: { type: Number, required: false },
});

const Job = new mongoose.model("Job", jobSchema);

module.exports = Job;
