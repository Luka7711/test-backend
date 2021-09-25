const User = require("../models/User");
const Job = require("../models/Job");
const Product = require("../models/Product");
const Property = require("../models/Property");
const Vehicle = require("../models/Vehicle");
const utils = require("../helpers/index.js");

const productController = {
  createJob: async (req, res) => {
    const user = await User.findById(req.params.user_id);
    const data = {
      title: req.body.title,
      jobType: req.body.jobType,
      description: req.body.description,
      location: req.body.location,
      minSalary: req.body.minSalary,
      maxSalary: req.body.maxSalary,
      perHour: req.body.perHour,
    };

    const newJob = await new Job(data);
    await newJob.save();
    user.createdPosts.push(newJob._id);
    user.save();

    res.json({
      user: user,
    });
  },
};

module.exports = productController;
